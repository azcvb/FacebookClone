package com.project.facebookClone.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.facebookClone.Define.ListComment;
import com.project.facebookClone.Entity.Comment;
import com.project.facebookClone.Entity.Like;
import com.project.facebookClone.Entity.Post;
import com.project.facebookClone.Entity.Share;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Repository.CommentRepository;
import com.project.facebookClone.Repository.LikeRepository;
import com.project.facebookClone.Repository.PostRepository;
import com.project.facebookClone.Repository.ShareRepository;
import com.project.facebookClone.dto.Response.PostResponse;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class PostService {
	final PostRepository postRepository;
	final CommentRepository commentRepository;
	final LikeRepository likeRepository;
	final ShareRepository shareRepository;
	
	public PostResponse getPost(String userId) {
		Post post = postRepository.findByUserId(userId)
				.orElseThrow(() -> new AppException(ErrorCode.POST_NOT_EXITED));
		String postId = post.getPostId();
		Like like = likeRepository.findByPostId(postId)
				.orElseThrow(() -> new AppException(ErrorCode.POST_NOT_EXITED));

		Share share = shareRepository.findByPostId(postId)
				.orElseThrow(() -> new AppException(ErrorCode.POST_NOT_EXITED));
		List<Comment> comments = commentRepository.findAllByPostId(postId);

		List<ListComment> listComments = comments.stream()
			    .map(comment -> ListComment.builder()
			    		.userId(comment.getUser().getUserId())
			    		.avata(comment.getUser().getInfo().getAvata())
			    		.name(comment.getUser().getInfo().getFirstName() + " " + comment.getUser().getInfo().getLastName())
			    		.createAt(comment.getCreatedAt())
			    		.comment(comment.getContent())
			    		.build())
			    .collect(Collectors.toList());
		
		return PostResponse.builder()
				.avata(post.getUser().getInfo().getAvata())
				.name(post.getUser().getInfo().getFirstName() + " " + post.getUser().getInfo().getLastName())
				.createAtPost(post.getCreateAt())
				.content(post.getContent())
				.imgUrl(post.getImgUrl())
				.emoji(like.getEmoji())
				.amountEmoji(like.getAmountLike())
				.comment(listComments)
			    .amountComment(comments.size()) 
				.amountShare(share.getAmount())
				.build();
	}
}
