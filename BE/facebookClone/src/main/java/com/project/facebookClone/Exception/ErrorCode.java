package com.project.facebookClone.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

import lombok.Getter;

@Getter
public enum ErrorCode {
	UNCATEGORIZED_EXCEPTION(9999, "uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
	USER_NOT_EXITSTED(1001, "User not exitsted.", HttpStatus.BAD_REQUEST),
	USER_EXITSTED(1003, "User exitsted", HttpStatus.BAD_REQUEST),
	UNAUTHENCATED(1002, "Unauthencated", HttpStatus.UNAUTHORIZED),
	PASSWORD_NOT_EXITED(1004, "Password not exited.", HttpStatus.BAD_REQUEST),
	INVALID_KEY(1005, "not fount key", HttpStatus.BAD_REQUEST),
	INVALID_USERNAME(1006, "Invalid username", HttpStatus.BAD_REQUEST),
	POST_NOT_EXITED(1007, "Post not exited", HttpStatus.BAD_REQUEST)
	;
	private int code;
	private String message;
	private HttpStatusCode statusCode;
	
	private ErrorCode(int code, String message, HttpStatusCode statusCode) {
		this.code = code;
		this.message = message;
		this.statusCode = statusCode;
	}
}
