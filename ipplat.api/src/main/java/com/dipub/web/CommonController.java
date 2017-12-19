package com.dipub.web;

import java.lang.reflect.UndeclaredThrowableException;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.dipub.util.DIPubException;
import com.dipub.web.api.AgencyController;

@Slf4j
public class CommonController {

	@ExceptionHandler(Exception.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public @ResponseBody String greetingExceptionHandler(Exception ex) {
		
		log.error("@getClass:" + this.getClass().getSimpleName() + "---Exception:" + ex.getMessage());
		return ex.getMessage();
	}
	@ExceptionHandler(UndeclaredThrowableException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public @ResponseBody String greetingExceptionHandler(UndeclaredThrowableException ex) {
		
		log.error("@getClass:" + this.getClass().getSimpleName() + "---UndeclaredThrowableException:" + ex.getUndeclaredThrowable().getMessage());
		
		return ex.getUndeclaredThrowable().getMessage();
	}

	@ExceptionHandler(DIPubException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public @ResponseBody String oauthExceptionHandler(DIPubException ex) {
		log.error("@getClass:" + this.getClass().getSimpleName() + "---UndeclaredThrowableException:" + ex.getMessage());
		return ex.getMessage();
	}

}