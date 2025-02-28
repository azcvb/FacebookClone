package com.project.facebookClone.Entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
import lombok.ToString;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "friend")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Friend {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	String friendId;
	
	@ManyToOne
	@JoinColumn(name = "userId1")
	@ToString.Exclude
	User userId1;
	
	@ManyToOne
	@JoinColumn(name = "userId2")
	@ToString.Exclude
	User userId2;
	
	@Enumerated(EnumType.STRING)
	Status status;
	
	@Temporal(TemporalType.TIMESTAMP)
	Date createAt = new Date();
	
	public enum Status{
		PENDING, ACCEPTED, BLOCKED;
	}
	
	
}
