package com.project.facebookClone.dto.Request;


import java.sql.Date;

import com.project.facebookClone.Validator.PhoneNumberConstraint;

import jakarta.annotation.Nonnull;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegisterRequest {
	@NotEmpty
	String username;
	@NotEmpty
    String password;
	@NotEmpty
    String firstName;
	@NotEmpty
    String lastName;
    Date dob;
    String gender;
}
