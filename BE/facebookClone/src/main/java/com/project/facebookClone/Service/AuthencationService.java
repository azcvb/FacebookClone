package com.project.facebookClone.Service;

import java.security.Signer;
import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

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
import com.project.facebookClone.Entity.Account;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Repository.AccountRepository;
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
public class AuthencationService {
	AccountRepository accountRepository;
	PasswordEncoder passwordEncoder;
	
	@NonFinal
	protected String SIGNER_KEY = 
		"My/yT?bUoTdXGGrpv--A/V4?agkMK=bpEjD5vK2aNGhMoyDuCIE=Tx2Yf0=kb6U3\r\n";
	
	public IntrospectResponse introspect(IntrospectRequest request) 
			throws JOSEException, ParseException {
		var token = request.getToken();
		
		JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());
		
		SignedJWT signedJWT = SignedJWT.parse(token);
		
		Date expiryTime = signedJWT.getJWTClaimsSet().getExpirationTime();
		
		var veryfied = signedJWT.verify(jwsVerifier);
		
		return IntrospectResponse.builder()
				.valid(veryfied && expiryTime.after(new Date()))
				.build();
				
	}
	
	public AuthencationResponse authencated(AuthencationRequest request) {
		var account = accountRepository.findByTendangnhap(request.getTendangnhap())
						.orElseThrow(()-> new AppException(ErrorCode.USER_NOT_EXITSTED));
		boolean isAuthencated = passwordEncoder.matches(request.getMatkhau(), account.getMatkhau());
		
		if(!isAuthencated)
			throw new AppException(ErrorCode.UNAUTHENCATED);
		var token = generateToken(account);
		
		return AuthencationResponse.builder()
				.token(token)
				.authencation(true)
				.build();	}
	
	public String generateToken(Account account) {
		JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
		
		JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
				.subject(account.getTendangnhap())
				.issuer("facebook.com")
				.issueTime(new Date())
				.expirationTime(new Date(Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()))
				.build();
		Payload payload = new Payload(jwtClaimsSet.toJSONObject());
		
		JWSObject jwsObject = new JWSObject(header, payload);
		
		try {
			jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
			return jwsObject.serialize();
		} catch(JOSEException e) {
			log.error("Cannot create token", e);
			throw new RuntimeException(e);
		}
	}
	
	
}
