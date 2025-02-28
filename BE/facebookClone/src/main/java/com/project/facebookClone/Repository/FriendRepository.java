package com.project.facebookClone.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.facebookClone.Entity.Friend;

@Repository
public interface FriendRepository extends JpaRepository<Friend, String>{
	@Query(value = "SELECT * FROM friend WHERE user_id1 = :userId1", nativeQuery = true)
	List<Friend> findAllByUserId1(@Param("userId1") String userId);
}