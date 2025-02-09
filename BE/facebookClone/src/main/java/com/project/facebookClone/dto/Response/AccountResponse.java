package com.project.facebookClone.dto.Response;

import java.sql.Date;


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
public class AccountResponse {
	String tendangnhap;
	String email;
	String sodienthoai;
	String matkhau;
	Date ngaydangky;
}
