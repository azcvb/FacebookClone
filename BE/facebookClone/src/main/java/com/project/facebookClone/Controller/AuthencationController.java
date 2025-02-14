package com.project.facebookClone.Controller;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nimbusds.jose.JOSEException;
import com.project.facebookClone.Service.AuthenticationService;
import com.project.facebookClone.dto.Request.AuthencationRequest;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.AuthencationResponse;
import com.project.facebookClone.dto.Response.IntrospectResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Slf4j
public class AuthencationController {
	@Autowired
	AuthenticationService  authenticationService ;
	
	
	@PostMapping("/login")
	public ApiResponse<AuthencationResponse> login(@RequestBody @Valid AuthencationRequest request) {
		return ApiResponse.<AuthencationResponse>builder()
				.result(authenticationService.authenticated(request))
				.build();
	}
	
	@GetMapping("/introspect")
	public ApiResponse<IntrospectResponse> introspect(@RequestHeader("Authorization") String token) 
			throws JOSEException, ParseException {
		return ApiResponse.<IntrospectResponse>builder()
				.result(authenticationService.introspect(token))
				.build();
	}
	
	@GetMapping("/logout")
	public void logout(@RequestHeader("Authorization" ) String token) 
			throws JOSEException, ParseException {
		authenticationService.logout(token);
	}
	
}
