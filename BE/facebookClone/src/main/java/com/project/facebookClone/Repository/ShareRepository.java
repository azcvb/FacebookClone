package com.project.facebookClone.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.facebookClone.Entity.Share;

public interface ShareRepository extends JpaRepository<Share, String>{
	@Query(value = "SELECT * FROM share WHERE post_id = :postId", nativeQuery = true)
	Optional<Share> findByPostId(@Param("postId") String postId);
}
