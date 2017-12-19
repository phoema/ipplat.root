package com.dipub.util;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorMessage {
	// 错误代码
	private String errorCode;
	// 错误说明
	private String errorDesc;

	public ErrorMessage(String errorCode, String errorDesc) {
		this.errorCode = errorCode;
		this.errorDesc = errorDesc;
	}

}