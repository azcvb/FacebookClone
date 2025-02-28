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
@Table(name = "comment")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
    String commentId;

    @ManyToOne
    @JoinColumn(name = "postId", nullable = false)
    Post post;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    User user;

    String content;

    @Temporal(TemporalType.TIMESTAMP)
    Date createdAt = new Date();
}
