package com.project.facebookClone.Entity;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "thongtincanhan")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class InfoPersonal {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	String id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "taikhoan_id")
	Account account; 
	
	String hoten;
	Date ngaysinh;
	String gioitinh;
	String diachi;
}
