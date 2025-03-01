package com.project.facebookClone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.facebookClone.Configuration.SecurityConfig;
import com.project.facebookClone.Service.AuthenticationService;
import com.project.facebookClone.Service.PostService;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.PostResponse;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {
	@Autowired
	PostService postService;
	
	@Autowired
	SecurityConfig securityConfig;
	@Autowired
	AuthenticationService authenticationService;
	
	@PostMapping
	public ApiResponse<List<PostResponse>> getPost(@RequestBody List<String> friendId) {
		 List<PostResponse> postResponses = postService.getPost(friendId);
		return ApiResponse.<List<PostResponse>>builder()
				.result(postResponses)
				.build();
	}
}
