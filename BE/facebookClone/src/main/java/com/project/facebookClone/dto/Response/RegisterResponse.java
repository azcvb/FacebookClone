package com.project.facebookClone.dto.Response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegisterResponse {
    String username;
    String password;
    String email;
    LocalDate dateSign;
    String firtname;
    String lastname;
    String gender;
    LocalDate dob;
}
