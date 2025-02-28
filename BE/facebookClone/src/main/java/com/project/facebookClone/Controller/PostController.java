package com.project.facebookClone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.facebookClone.Configuration.SecurityConfig;
import com.project.facebookClone.Service.AuthenticationService;
import com.project.facebookClone.Service.PostService;
import com.project.facebookClone.dto.Request.GetPostRequest;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.PostResponse;

@RestController
@RequestMapping("/post")

public class PostController {
	@Autowired
	PostService postService;
	
	@Autowired
	SecurityConfig securityConfig;
	@Autowired
	AuthenticationService authenticationService;
	
	@PostMapping
	public ApiResponse<PostResponse> getPost(@RequestBody GetPostRequest friendId) {
		return ApiResponse.<PostResponse>builder()
				.result(postService.getPost(friendId.getFriendId()))
				.build();
	}
}
