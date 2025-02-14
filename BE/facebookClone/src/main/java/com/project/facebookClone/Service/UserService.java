package com.project.facebookClone.Service;

import com.project.facebookClone.Entity.InfoPersonal;
import com.project.facebookClone.Entity.User;
import com.project.facebookClone.Exception.AppException;
import com.project.facebookClone.Exception.ErrorCode;
import com.project.facebookClone.Mapper.RegisterMapper;
import com.project.facebookClone.Mapper.UserMapper;
import com.project.facebookClone.Repository.InfoPersonalRepository;
import com.project.facebookClone.Repository.UserRepository;
import com.project.facebookClone.dto.Request.RegisterRequest;
import com.project.facebookClone.dto.Response.RegisterResponse;
import com.project.facebookClone.dto.Response.UserResponse;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.util.List;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserService {
    UserRepository userRepository;
    InfoPersonalRepository infoPersonalRepository;
    RegisterMapper registerMapper;
    UserMapper userMapper;
    PasswordEncoder passwordEncoder;

    public RegisterResponse createUser(RegisterRequest request) {
        User user = User.builder()
        		.username(request.getUsername())
        		.password(passwordEncoder.encode(request.getPassword()))
        		.email(request.getEmail())
        		.dateSign(LocalDate.now())
        		.build();
        InfoPersonal infoPersonal = InfoPersonal.builder()
        		.firstName(request.getFirstName())
        		.lastName(request.getLastName())
        		.gender(request.getGender())
        		.dob(request.getDob())
        		.build();
        

        
        if(!userRepository.findByUsername(request.getUsername()).isEmpty()) {
        	throw new AppException(ErrorCode.USER_EXITSTED);
        }
        	

        try {
        	userRepository.save(user);
        }catch (Exception e) {
        	log.info(e.toString());
        }
        infoPersonal.setUser(user);
        infoPersonalRepository.save(infoPersonal);
        
        return registerMapper.toRegisterResponse(user);
    }
    
 
    		
    public List<UserResponse> getAll() {
    	return userRepository.findAll()
    			.stream().map(userMapper::toUserResponse).toList();
    }
}
