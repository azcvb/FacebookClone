package com.project.facebookClone.Mapper;

import com.project.facebookClone.Entity.User;
import com.project.facebookClone.dto.Request.CreateUserRequest;
import com.project.facebookClone.dto.Response.UserResponse;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(CreateUserRequest request);

    UserResponse toUserResponse(User user);
    
}
