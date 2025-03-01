package com.project.facebookClone.Controller;

import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nimbusds.jose.JOSEException;
import com.project.facebookClone.Configuration.SecurityConfig;
import com.project.facebookClone.Service.AuthenticationService;
import com.project.facebookClone.Service.FriendService;
import com.project.facebookClone.dto.Request.AddFriendRequest;
import com.project.facebookClone.dto.Response.AddFriendReponse;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.GetMyFriendResponse;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/friend")
@Slf4j
public class FriendController {
	@Autowired
	FriendService friendService;
	@Autowired 
	SecurityConfig securityConfig;
	@Autowired 
	AuthenticationService authenticationService;
	@PostMapping
	public ApiResponse<AddFriendReponse> addFriend(@Valid @RequestBody AddFriendRequest request) {
		return ApiResponse.<AddFriendReponse>builder()
				.result(friendService.addFriend(request))
				.build();
	}
	
	@GetMapping
	public ApiResponse<List<GetMyFriendResponse>> getMyFriends(@RequestHeader("Authorization") String token) 
			throws JOSEException, ParseException {
		String validInputToken = securityConfig.validInputToken(token);
		var signToken = authenticationService.verifyToken(validInputToken, false);
		String userId = signToken.getJWTClaimsSet().getStringClaim("userId");
		return ApiResponse.<List<GetMyFriendResponse>>builder()
				.result(friendService.getMyFriend(userId))
				.build();
							
	}

}
