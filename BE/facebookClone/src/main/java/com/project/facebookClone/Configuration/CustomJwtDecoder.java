package com.project.facebookClone.Configuration;

import java.text.ParseException;
import java.util.Objects;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.stereotype.Component;

import com.nimbusds.jose.JOSEException;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Service.AuthenticationService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CustomJwtDecoder implements JwtDecoder{
	@Value("${jwt.signerKey}")
	private String signKey;
	
	@Autowired
	private AuthenticationService authenticationService;
	
	private NimbusJwtDecoder nimbusJwtDecoder = null;

	@Override
	public Jwt decode(String token) throws JwtException {
		try {
			var res = authenticationService.introspect(token);
			if(!res.isAuthencated())
				throw new AppException(ErrorCode.UNAUTHENCATED);
		}catch (JOSEException | ParseException  e) {
			throw new JwtException(e.getMessage());
		}
		
		if(Objects.isNull(nimbusJwtDecoder)) {
			SecretKeySpec secretKeySpec = new SecretKeySpec(signKey.getBytes(), "HS512");
			nimbusJwtDecoder = NimbusJwtDecoder
					.withSecretKey(secretKeySpec)
					.macAlgorithm(MacAlgorithm.HS512)
					.build();
		}
		return nimbusJwtDecoder.decode(token);
	}
	
}
