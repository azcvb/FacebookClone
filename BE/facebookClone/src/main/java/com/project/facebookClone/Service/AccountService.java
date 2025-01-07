package com.project.facebookClone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.facebookClone.Entity.Account;
import com.project.facebookClone.Mapper.AccountMapper;
import com.project.facebookClone.Repository.AccountRepository;
import com.project.facebookClone.dto.Request.AccountRequest;

import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountMapper accountMapper;
	
	public Account CreateAccount(AccountRequest request) {
		Account account = accountMapper.toAccount(request);
		
		log.info(request.getMatkhau());
		account.setMatkhau(passwordEncoder.encode(request.getMatkhau()));
		log.info(account.getMatkhau());
		return accountRepository.save(account);
	}
	
	public List<Account> getAllAcc() {
		return accountRepository.findAll();
	}
	
//	public List<Account> getById(String id) {
//		return accountMapper.to
//	}
}
