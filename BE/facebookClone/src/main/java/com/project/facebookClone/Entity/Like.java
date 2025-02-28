package com.project.facebookClone.Entity;

import java.util.Date;

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
@Table(name = "likes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Like {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	String likeId;
	
	@ManyToOne
	@JoinColumn(name = "userId1", nullable = false)
	User userId1;
	
	@ManyToOne
	@JoinColumn(name = "userId2", nullable = false)
	User userId2;
	
	@ManyToOne
	@JoinColumn(name = "postId")
	Post post;
	
	int amountLike;
	String emoji;
	 
	@Temporal(TemporalType.TIMESTAMP)
	Date createdAt = new Date();
	
}
