package com.project.facebookClone.Exception;

import java.util.Map;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.project.facebookClone.dto.Response.ApiResponse;

import jakarta.validation.ConstraintValidator;
import lombok.extern.slf4j.Slf4j;


@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
	private ErrorCode errorCode;
	private static final String MIN_ATTRIBUTE = "min";
	
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
	@ExceptionHandler(value = MethodArgumentNotValidException.class)
	ResponseEntity<ApiResponse> handlingRuntimeException(MethodArgumentNotValidException exception) {
		String enumkey = exception.getFieldError().getDefaultMessage();
		errorCode = ErrorCode.INVALID_KEY;
		Map<String, Object> attributes = null;
		
		try {
			errorCode = ErrorCode.valueOf(enumkey);
			var constraintViolation = exception.getBindingResult()
					.getAllErrors().getFirst().unwrap(ConstraintValidator.class);
			
		}catch(IllegalArgumentException e) {
			
		}
		
		ApiResponse apiResponse = new ApiResponse();
		
		apiResponse.setCode(errorCode.getCode());
		apiResponse.setMessage(Objects.nonNull(attributes)
				? mapAttribute(errorCode.getMessage(), attributes)
				: errorCode.getMessage());
		
		return ResponseEntity.badRequest().body(apiResponse);
		
	}
	
	private String mapAttribute(String message, Map<String, Object> attributes) {
		String minValue = String.valueOf(attributes.get(MIN_ATTRIBUTE));
		
		return message.replace("{" + MIN_ATTRIBUTE + "}", minValue);
	}
}
