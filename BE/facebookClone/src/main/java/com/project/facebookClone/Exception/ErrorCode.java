package com.project.facebookClone.Exception;

public enum ErrorCode {
	UNCATEGORIZED_EXCEPTION(9999, "uncategorized error"),
	USER_NOT_EXITSTED(1005, "User not exitsted"),
	USER_EXIT(1002, "The entry already exists"),
	INVALID_KEY(1004, "not fount key"),
	USERNAME_INVALID(1003, "Name must be at least 6 charater"),
	UNAUTHENCATED(1004, "Unauthencated")
	;
	private int code;
	private String message;
	
	private ErrorCode(int code, String message) {
		this.code = code;
		this.message = message;
	}
	
	public int getCode() {
		return code;
	}
	
	public String getMessage() {
		return message;
	}
}
