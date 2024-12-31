package com.project.facebookClone.dto.Request;

import java.sql.Date;

import com.project.facebookClone.Entity.Account;

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
	String tendangnhap;
	String email;
	String sodienthoai;
	String matkhau;
	Date ngaydangky;
}
