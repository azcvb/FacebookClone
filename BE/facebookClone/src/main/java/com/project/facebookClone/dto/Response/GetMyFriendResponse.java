package com.project.facebookClone.dto.Response;

import java.util.Date;


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
public class GetMyFriendResponse {
	String friendUserId;
	String avata;
	String firtName;
	String lastName;
	String status;
	Date createAt;
}
