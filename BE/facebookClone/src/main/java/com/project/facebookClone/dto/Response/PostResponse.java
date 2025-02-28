package com.project.facebookClone.dto.Response;

import java.util.Date;
import java.util.List;

import com.project.facebookClone.Define.ListComment;
import com.project.facebookClone.Entity.Comment;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PostResponse {
	String avata;
	String name;
	Date createAtPost;
	String content;
	String imgUrl;
	String emoji;
	int amountEmoji;
	String userIdComment;
	List<ListComment> comment;
	int amountComment;
	int amountShare;	
	
}
