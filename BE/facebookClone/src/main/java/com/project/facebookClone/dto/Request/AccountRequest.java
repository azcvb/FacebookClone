package com.project.facebookClone.dto.Request;

import java.sql.Date;

import com.project.facebookClone.Entity.Account;

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
public class AccountRequest {
	@Size(min = 6, message = "USERNAME_INVALID")
	String tendangnhap;
	String email;
	String sodienthoai;
	String matkhau;
	Date ngaydangky;
}
