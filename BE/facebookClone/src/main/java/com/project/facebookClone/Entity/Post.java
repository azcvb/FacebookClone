package com.project.facebookClone.Entity;

import java.util.Date;

import com.project.facebookClone.Entity.Friend.Status;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "post")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	String postId;
	
	@ManyToOne
	@JoinColumn(name = "userId", nullable = false)
	User user;
	
	String content;
	String imgUrl;
	String videoUrl;
	
	@Temporal(TemporalType.TIMESTAMP)
	Date createAt = new Date();
}
