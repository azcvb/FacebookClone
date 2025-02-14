package com.project.facebookClone.Mapper;

import org.mapstruct.Mapper;

import com.project.facebookClone.Entity.User;
import com.project.facebookClone.dto.Response.RegisterResponse;

@Mapper(componentModel = "spring")
public interface RegisterMapper {
	RegisterResponse toRegisterResponse(User user);
}
