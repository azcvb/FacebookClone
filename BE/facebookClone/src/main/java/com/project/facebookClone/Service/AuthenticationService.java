package com.project.facebookClone.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.UUID;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.Payload;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.project.facebookClone.Entity.InvalidateToken;
import com.project.facebookClone.Entity.User;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Repository.InvalidateTokenRepository;
import com.project.facebookClone.Repository.UserRepository;
import com.project.facebookClone.dto.Request.AuthencationRequest;
import com.project.facebookClone.dto.Request.IntrospectRequest;
import com.project.facebookClone.dto.Response.AuthencationResponse;
import com.project.facebookClone.dto.Response.IntrospectResponse;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class AuthenticationService  {
	UserRepository userRepository;
	InvalidateTokenRepository invalidateTokenRepository;
	@NonFinal
    @Value("${jwt.signerKey}")
	protected  String SIGNER_KEY;
	
	public IntrospectResponse introspect(String token)
			throws JOSEException, ParseException {
		if(token.startsWith("Bearer ")) {
			token = token.substring(7);
		}
		boolean isValid = true;
		
		try {
			verifyToken(token, false);
		}catch (AppException e) {
			isValid = false;
		}
		
		return IntrospectResponse.builder()
				.authencated(isValid)
				.build();
	}
	
	public AuthencationResponse authenticated (AuthencationRequest request) {
		var user = userRepository.findByUsername(request.getUsername())
				.orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXITSTED));
		
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
		boolean isAuthencated = passwordEncoder.matches(request.getPassword(), user.getPassword());
		
		if(!isAuthencated)
			throw new AppException(ErrorCode.PASSWORD_NOT_EXITED);
		var token = generateToken(user);
		
		return AuthencationResponse.builder()
				.token(token)
				.authencated(true)
				.build();
	}
	
	public void logout(String token) 
			throws JOSEException, ParseException {
		try {
			if(token.startsWith("Bearer ")) {
				token = token.substring(7);
			}
			var signToken = verifyToken(token, true);
			String jit = signToken.getJWTClaimsSet().getJWTID();
			Date expiryTime = signToken.getJWTClaimsSet().getExpirationTime();
			
			InvalidateToken invalidateToken = InvalidateToken.builder()
					.idToken(jit)
					.expiryTime(expiryTime)
					.build();
			invalidateTokenRepository.save(invalidateToken);
		}catch (AppException e) {
			log.info("Token already expiryed");
		}
	}
	
	public String generateToken(User user) {
		JWSHeader jwsHeader = new JWSHeader(JWSAlgorithm.HS512);
		JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
				.subject(user.getUsername())
				.issueTime(new Date())
				.expirationTime(new Date(Instant.now().plus(1, ChronoUnit.DAYS).toEpochMilli()))
				.jwtID(UUID.randomUUID().toString())
				.build();
		Payload payload = new Payload(jwtClaimsSet.toJSONObject());
		
		JWSObject jwsObject = new JWSObject(jwsHeader, payload);
		
		try {
			jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
			return jwsObject.serialize();
		}catch (JOSEException e) {
			log.info("", e);
			throw new RuntimeException(e);
		}
	}
	public SignedJWT verifyToken(String token, boolean isRefresh) 
			throws JOSEException, ParseException {
		JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());
		
		SignedJWT signedJWT = SignedJWT.parse(token);
		
		Date expiryTime = (isRefresh)
					? new Date (signedJWT.getJWTClaimsSet().getIssueTime().toInstant().plus(1, ChronoUnit.HOURS).toEpochMilli())
					: signedJWT.getJWTClaimsSet().getExpirationTime();
		
		var veryfied = signedJWT.verify(jwsVerifier);

		if(!(veryfied && expiryTime.after(new Date())))
			throw new AppException(ErrorCode.UNAUTHENCATED);
		
		if(invalidateTokenRepository
				.existsById(signedJWT.getJWTClaimsSet().getJWTID()))
			throw new AppException(ErrorCode.UNAUTHENCATED);
		
		return signedJWT;
		
	}
}
