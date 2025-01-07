package com.project.facebookClone.Exception;

import org.springframework.dao.DataIntegrityViolationException;

public class ConstraintViolationHandler {
	public static String extractConstraintViolation(DataIntegrityViolationException exception) {
		String message = exception.getMostSpecificCause().getMessage();
		
		if(message.contains("Duplicate entry")) {
			return "DUPLICATE_ENTRY";
		}
		
		return "UNKNOWN_CONSTRAINT";
	}
}
