package com.project.facebookClone.Exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.project.facebookClone.dto.Response.ApiResponse;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(value = AppException.class)
	ResponseEntity<ApiResponse> handlingRuntimeEception(AppException exception){
		ErrorCode errorCode = exception.getErrorCode();
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setCode(errorCode.getCode());
		apiResponse.setMessage(errorCode.getMessage());
		return ResponseEntity.badRequest().body(apiResponse);
	}
	
	@ExceptionHandler(value = DataIntegrityViolationException.class)
	ResponseEntity<ApiResponse> handlingDataIntegrityViolationException(DataIntegrityViolationException exception) {
		ApiResponse apiResponse = new ApiResponse();
		
		String constraintType = ConstraintViolationHandler.extractConstraintViolation(exception);
		
		switch (constraintType) {
		case "DUPLICATE_ENTRY":
			apiResponse.setCode(ErrorCode.USER_EXIT.getCode());
			apiResponse.setMessage(ErrorCode.USER_EXIT.getMessage());
			break;
		
		default:
			apiResponse.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
			apiResponse.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getMessage());
            break;
		}
		
		return ResponseEntity.badRequest().body(apiResponse);
	}
	
	@ExceptionHandler(value = MethodArgumentNotValidException.class)
	ResponseEntity<ApiResponse> handlingRuntimeException(MethodArgumentNotValidException exception) {
		String enumKey = exception.getFieldError().getDefaultMessage();
		ErrorCode errorCode = ErrorCode.INVALID_KEY;
		
		try {
			errorCode = ErrorCode.valueOf(enumKey);
		}catch(IllegalArgumentException e){
			
		}
		
		
		ApiResponse apiResponse = new ApiResponse();
		
		apiResponse.setCode(errorCode.getCode());
		apiResponse.setMessage(errorCode.getMessage());
		
		return ResponseEntity.badRequest().body(apiResponse);
	}
}
