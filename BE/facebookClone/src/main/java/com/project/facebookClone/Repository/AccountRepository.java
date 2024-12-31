package com.project.facebookClone.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.facebookClone.Entity.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
	Optional<Account> findByTendangnhap(String tendangnhap);
}
