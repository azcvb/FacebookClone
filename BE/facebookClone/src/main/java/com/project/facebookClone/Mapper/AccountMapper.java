package com.project.facebookClone.Mapper;

import org.mapstruct.Mapper;

import com.project.facebookClone.Entity.Account;
import com.project.facebookClone.dto.Request.AccountRequest;
import com.project.facebookClone.dto.Response.AccountResponse;

@Mapper(componentModel = "spring")
public interface AccountMapper {
	Account toAccount(AccountRequest request);
	
	AccountResponse toAccountResponse(Account account);
	
}
