package com.project.facebookClone.Repository;

import com.project.facebookClone.Entity.InfoPersonal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoPersonalRepository extends JpaRepository<InfoPersonal, String> {
	
}
