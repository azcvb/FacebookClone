package com.project.facebookClone.Exception;

public enum ErrorCode {
	UNCATEGORIZED_EXCEPTION(9999, "uncategorized error")
	
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
