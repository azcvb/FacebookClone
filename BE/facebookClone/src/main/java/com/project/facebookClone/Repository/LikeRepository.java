package com.project.facebookClone.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.facebookClone.Entity.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, String>{
	@Query(value = "SELECT * FROM likes WHERE post_id = :postId", nativeQuery = true)
	Optional<Like> findByPostId(@Param("postId") String postId);
}
