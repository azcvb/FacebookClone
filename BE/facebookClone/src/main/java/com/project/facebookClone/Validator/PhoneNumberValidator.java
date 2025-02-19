package com.project.facebookClone.Validator;

import java.util.regex.Pattern;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PhoneNumberValidator  implements ConstraintValidator<PhoneNumberConstraint , String>{

	private static final String PHONE_PATTERN = "^(0[3-9])+([0-9]{8})$";
	private static final Pattern pattern = Pattern.compile(PHONE_PATTERN);
	
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		 if (value == null || value.isEmpty()) {
	            return false;
	        }
		 boolean isValid = pattern.matcher(value).matches();
		 System.out.println("Validation for " + value + " is " + isValid);
		 return isValid;
	}

}
