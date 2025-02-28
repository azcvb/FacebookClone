package com.project.facebookClone.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.facebookClone.Entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, String>{
	@Query(value = "SELECT * FROM post WHERE user_id = :userId", nativeQuery = true)
	Optional<Post> findByUserId(@Param("userId") String userId);
}
