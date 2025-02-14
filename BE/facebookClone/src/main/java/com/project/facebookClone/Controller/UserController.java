package com.project.facebookClone.Controller;

import com.project.facebookClone.Service.UserService;
import com.project.facebookClone.dto.Request.LoginRequest;
import com.project.facebookClone.dto.Request.RegisterRequest;
import com.project.facebookClone.dto.Response.ApiResponse;
import com.project.facebookClone.dto.Response.RegisterResponse;
import com.project.facebookClone.dto.Response.UserResponse;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
@Slf4j
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping
    public ApiResponse<RegisterResponse> createUser(@RequestBody @Valid RegisterRequest request) {
        return ApiResponse.<RegisterResponse>builder()
                .result(userService.createUser(request))
                .build();
    }
    
    @GetMapping
    public ApiResponse<List<UserResponse>> getAll() {
    	return ApiResponse.<List<UserResponse>>builder()
    			.result(userService.getAll())
    			.build();
    }
    
}
