package com.project.facebookClone.dto.Request;

import java.time.LocalDate;


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
public class CreateInfoPersonalRequest {
	String firtname;
    String lastname;
    String gender;
    LocalDate dob;
}
