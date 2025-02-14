package com.project.facebookClone.Mapper;

import org.mapstruct.Mapper;

import com.project.facebookClone.Entity.InfoPersonal;
import com.project.facebookClone.dto.Request.CreateInfoPersonalRequest;
import com.project.facebookClone.dto.Request.CreateUserRequest;

@Mapper(componentModel = "spring")
public interface InfoPersonalMapper {
	InfoPersonal toInfor(CreateInfoPersonalRequest infoRequest);
	
	
}
