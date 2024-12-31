package com.project.facebookClone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.facebookClone.Entity.Account;
import com.project.facebookClone.Service.AccountService;
import com.project.facebookClone.dto.Request.AccountRequest;
import com.project.facebookClone.dto.Response.ApiResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/account")
public class AccountController {
	@Autowired
	AccountService accountService;
	
	@PostMapping
	ApiResponse<Account> CreateAccount(@RequestBody @Valid AccountRequest request) {
		ApiResponse<Account>  apiRequest = new ApiResponse<Account>();
		
		apiRequest.setResult(accountService.CreateAccount(request)); 
		return apiRequest;
	}
	@GetMapping
	List<Account> getAllAcc() {
		return accountService.getAllAcc();
	}
}
