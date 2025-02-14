package com.project.facebookClone.Exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.project.facebookClone.dto.Response.ApiResponse;


@ControllerAdvice
public class GlobalExceptionHandler {
	private ErrorCode errorCode;
	
	@ExceptionHandler(value = AppException.class)
	ResponseEntity<ApiResponse> handlingRuntimeException(AppException exception) {
		errorCode = exception.getErrorCode();
		
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setCode(errorCode.getCode());
		apiResponse.setMessage(errorCode.getMessage());
		
		return ResponseEntity.status(errorCode.getStatusCode()).body(apiResponse);
	}
	
	@ExceptionHandler(value = Exception.class)
	ResponseEntity<ApiResponse> handlingCommonException() {
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
		apiResponse.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getMessage());
		
		return ResponseEntity.badRequest().body(apiResponse);
	}
}
