package com.dipub.web;

import java.lang.reflect.UndeclaredThrowableException;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.dipub.domain.SysUser;
import com.dipub.util.DIPubException;

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

	/**
	 * 业务异常
	 * @param ex
	 * @return
	 */	
	@ExceptionHandler(DIPubException.class)
	@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
	public @ResponseBody String oauthExceptionHandler(DIPubException ex) {
		log.error("@getClass:" + this.getClass().getSimpleName() + "---DIPubException:" + ex.getMessage());
		return ex.getMessage();
	}

	public SysUser 	GetCurUser() throws DIPubException{
    	// 获取当前用户
		org.apache.shiro.subject.Subject currentUser = org.apache.shiro.SecurityUtils.getSubject();

		SysUser curuser = (SysUser)currentUser.getPrincipal();
		if(curuser == null){
			throw new DIPubException("用户未登录");
		}
		return curuser;
	}

}