package com.project.facebookClone.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.facebookClone.Entity.Friend;
import com.project.facebookClone.Entity.User;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Mapper.FriendMapper;
import com.project.facebookClone.Repository.FriendRepository;
import com.project.facebookClone.Repository.UserRepository;
import com.project.facebookClone.dto.Request.AddFriendRequest;
import com.project.facebookClone.dto.Response.AddFriendReponse;
import com.project.facebookClone.dto.Response.GetMyFriendResponse;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class FriendService {
	final FriendRepository friendRepository;
	final UserRepository userRepository;
	public AddFriendReponse addFriend(AddFriendRequest request) {
		boolean isSuccess = false;
		try {
			User myUser = userRepository.findById(request.getUserId1())
					.orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXITSTED));
			User friendUser = userRepository.findById(request.getUserId2())
					.orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXITSTED));;
			Friend friend = Friend.builder()
					.userId1(myUser)
					.userId2(friendUser)
					.status(Friend.Status.valueOf(request.getStatus()))
					.createAt(new Date())
					.build();
			friendRepository.save(friend);
			isSuccess = true;
		}catch (Exception e) {
			log.info(e.toString());
		}
		
		return AddFriendReponse.builder()
				.isAddFriend(isSuccess)
				.build();
	}
	public List<GetMyFriendResponse> getMyFriend(String userId) {
		List<Friend> friends  = friendRepository.findAllByUserId1(userId);
		
		List<GetMyFriendResponse> response = friends.stream().map(friend -> 
			GetMyFriendResponse.builder()
			.friendUserId(friend.getUserId2().getUserId())
			.avata(friend.getUserId2().getInfo().getAvata())
			.firtName(friend.getUserId2().getInfo().getFirstName())
			.lastName(friend.getUserId2().getInfo().getLastName())
			.status(friend.getStatus().name())
			.createAt(friend.getCreateAt())
			.build())
				.collect(Collectors.toList());
		    return response;
				
	}
}
