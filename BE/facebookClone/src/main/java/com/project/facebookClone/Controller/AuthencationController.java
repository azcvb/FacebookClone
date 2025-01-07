package com.project.facebookClone.Controller;

import java.text.ParseException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nimbusds.jose.JOSEException;
import com.project.facebookClone.Service.AuthencationService;
import com.project.facebookClone.dto.Request.AuthencationRequest;
import com.project.facebookClone.dto.Request.IntrospectRequest;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.AuthencationResponse;
import com.project.facebookClone.dto.Response.IntrospectResponse;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class AuthencationController {
	AuthencationService authencationService;
	
	@PostMapping("/token")
	ApiResponse<AuthencationResponse> authencation(@RequestBody AuthencationRequest request){
		var result = authencationService.authencated(request);
		
		return ApiResponse.<AuthencationResponse>builder()
				.result(result)
				.build();
	}
	
	@PostMapping("/introspect")
	ApiResponse<IntrospectResponse> authencate(@RequestBody IntrospectRequest request)
			throws JOSEException, ParseException {
		var result = authencationService.introspect(request);
		
		return ApiResponse.<IntrospectResponse>builder()
				.result(result)
				.build();
	}

}