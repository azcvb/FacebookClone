package com.project.facebookClone.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.facebookClone.Entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String>{
	@Query(value = "SELECT * FROM comment WHERE post_id = :postId", nativeQuery = true)
	List<Comment> findAllByPostId(@Param("postId") String postId);
}
