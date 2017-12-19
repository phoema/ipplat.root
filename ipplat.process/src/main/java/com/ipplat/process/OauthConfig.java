package com.ipplat.process;

import lombok.Data;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix="security.oauth2.client")
/**
 * oauth2的配置信息
 * @author jiahh 2017年2月10日
 *
 */
public class OauthConfig {

	// 指定OAuth2 client ID.
	private String clientId = "";
	// 指定OAuth2 client secret
	private String clientSecret = "";
	// 指定获取access token的URI.
	private String accessTokenUri = "";
	// 用户跳转去获取access token的URI
	private String userAuthorizationUri = "";
	// 指定客户端相关的资源
	private String resourceUrl = "";
	//指定客户端跳转URI
	private String registeredRedirectUri = "";
	//指定客户端跳转URI版权
	private String resourceUrlcr = "";
	//scope
	private String scope = "read_cn";
}
