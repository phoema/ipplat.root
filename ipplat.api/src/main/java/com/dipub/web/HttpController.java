package com.dipub.web;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.oltu.oauth2.client.OAuthClient;
import org.apache.oltu.oauth2.client.URLConnectionClient;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.client.response.OAuthAccessTokenResponse;
import org.apache.oltu.oauth2.client.response.OAuthJSONAccessTokenResponse;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.apache.oltu.oauth2.common.message.types.GrantType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.oauth.OAuthParams;
import com.dipub.oauth.OauthConfig;
import com.dipub.util.DIPubException;
import com.dipub.util.DataInfoCache;
import com.google.common.io.Files;
import com.thoughtworks.xstream.XStream;
@RestController
@RequestMapping(value="/http",method={RequestMethod.POST,RequestMethod.GET})
public class HttpController {
 
	public static OAuthParams oauthParams;
	
	@Autowired
	private OauthConfig oauthConfig;
	@Autowired
	private Environment env;
	/**
	 * Oauth认证信息，需要跳转页面
	 * @param request
	 * @param response
	 * @throws OAuthSystemException
	 * @throws IOException
	 */
    @RequestMapping(value="/authorize")
    public void authorize(HttpServletRequest request, HttpServletResponse response) throws OAuthSystemException, IOException {
 

    	OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getUserAuthorizationUri())
				   .setClientId(oauthConfig.getClientId())
				   .setRedirectURI(oauthConfig.getRegisteredRedirectUri())
				   .setResponseType("code")
				   .setScope("read_cn")
				   .buildQueryMessage();	
		String location = oltu_request.getLocationUri();	
		// 认证要求跳转
        response.sendRedirect(location);

 
    }
    /**
     * Oauth2.0二次握手，根据code或者REFRESH_TOKEN的值返回AccessToken
     * @param code
     * @return
     * @throws Exception 
     */
    @RequestMapping(value="/token")
    public String token(String code,String refreshToken) throws Exception {
    	OAuthClientRequest oltu_request = null;

    	if(code != null){
            oltu_request = OAuthClientRequest
                    .tokenLocation(oauthConfig.getAccessTokenUri())
                    .setClientId(oauthConfig.getClientId())
                    .setClientSecret(oauthConfig.getClientSecret())
                    .setRedirectURI(oauthConfig.getRegisteredRedirectUri())
                    .setCode(code)
                    .setGrantType(GrantType.AUTHORIZATION_CODE)//authorization_code
                    .buildBodyMessage();
    	}else if(refreshToken != null){
            oltu_request = OAuthClientRequest
                    .tokenLocation(oauthConfig.getAccessTokenUri())
                    .setClientId(oauthConfig.getClientId())
                    .setClientSecret(oauthConfig.getClientSecret())
                    .setGrantType(GrantType.REFRESH_TOKEN)//authorization_code
                    .setRefreshToken(refreshToken)
                    .buildBodyMessage();

        }else if(oauthParams != null){
        	refreshToken = oauthParams.getRefreshToken();
            oltu_request = OAuthClientRequest
                    .tokenLocation(oauthConfig.getAccessTokenUri())
                    .setClientId(oauthConfig.getClientId())
                    .setClientSecret(oauthConfig.getClientSecret())
                    .setGrantType(GrantType.REFRESH_TOKEN)//authorization_code
                    .setRefreshToken(refreshToken)
                    .buildBodyMessage();
        }else{
           	throw new DIPubException("code或 refreshToken不能都为空");
        }
//		String location = oltu_request.getLocationUri();	
//		String body = oltu_request.getBody();
//		oltu_request.setLocationUri(location+"?" + body);
        OAuthClient client = new OAuthClient(new URLConnectionClient());

        Class<? extends OAuthAccessTokenResponse> cl = OAuthJSONAccessTokenResponse.class;

        Long accessTime = Long.parseLong(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
        OAuthAccessTokenResponse oauthResponse = client.accessToken(oltu_request, cl);
        oauthParams = new OAuthParams();
        oauthParams.setClientId(oauthConfig.getClientId());
        oauthParams.setScope("read_cn");
        oauthParams.setResourceUrl(oauthConfig.getResourceUrl());
        oauthParams.setAccessToken(oauthResponse.getAccessToken());
        oauthParams.setExpiresIn(oauthResponse.getExpiresIn());
        oauthParams.setRefreshToken(oauthResponse.getRefreshToken());
        oauthParams.setAccessTime(accessTime);
		XStream xstream = new XStream();
		xstream.autodetectAnnotations(true);

		File file = new File(env.getActiveProfiles()[0] + "_oauthparams.xml");
		Files.write(xstream.toXML(oauthParams).getBytes(StandardCharsets.UTF_8), file);

		Object obj = xstream.fromXML(file);  
        String exec = "AccessToken:" + oauthParams.getAccessToken();
        return exec;
        
    }
    @RequestMapping(value="/params")
    public OAuthParams getOAuthParams(){
    	return oauthParams;
    }
    @RequestMapping(value="/config")
    public OauthConfig getOauthConfig(){
    	return oauthConfig;
    }
	@Autowired
	DataInfoCache dataInfoCache;
    @RequestMapping(value="/datainfo")
    @Cacheable(cacheNames="datainfo")
    public HashMap getDataInfo() throws Exception{
    	HashMap map = dataInfoCache.weeklyRemind();
    	return map;
    }
    
}