package com.project.facebookClone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.facebookClone.Entity.Account;
import com.project.facebookClone.Mapper.AccountMapper;
import com.project.facebookClone.Repository.AccountRepository;
import com.project.facebookClone.dto.Request.AccountRequest;


@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private AccountMapper accountMapper;
	
	public Account CreateAccount(AccountRequest request) {
		Account account = accountMapper.toAccount(request);
		
		return accountRepository.save(account);
	}
	
	public List<Account> getAllAcc() {
		return accountRepository.findAll();
	}
	
//	public List<Account> getById(String id) {
//		return accountMapper.to
//	}
}
