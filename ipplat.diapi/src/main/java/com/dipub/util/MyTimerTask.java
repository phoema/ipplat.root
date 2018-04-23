package com.dipub.util;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.PostConstruct;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.dipub.oauth.OAuthParams;
import com.dipub.oauth.OauthConfig;
import com.dipub.service.MailService;
import com.dipub.web.HttpController;
import com.google.common.io.Files;
import com.thoughtworks.xstream.XStream;


 
/**
 * 定时器
 * @author jiahh 2016年8月23日
 *
 */
@Slf4j
@Component
public class MyTimerTask{

	@Autowired
	AreaCodeCache areaCodeCache;
	@Autowired
	OauthConfig oauthConfig;
	@Autowired
	HttpController httpController;
	@Autowired
	MailService mailService;
	@Autowired
	private Environment env;
	//更新定时器
	// 定时任务 每天凌晨1点触发
	@Scheduled(cron="0 15 1 * * ?")   
	// 定时任务 每50秒触发一次
	//@Scheduled(fixedDelay=5000000)  
	//  启动后延迟5秒后开始首次触发
	//@Scheduled(initialDelay=50000)
	// 定时任务 "0 15 2 7 * ?" 每月7日凌晨2点15触发 
	//@Scheduled(cron="0 14 9 18 * ?")   

	public void run() {
		try {
			//Oauth2.0二次握手，根据code或者REFRESH_TOKEN的值返回AccessToken
			//httpController.token(null,null);
			log.info("Oauth认证轮询定时任务启动");
			init();
		} catch (Exception e) {
			log.error("MyTimerTask.run()" + e.getMessage());
			e.printStackTrace();
		}


	}     
	/** 
     * 初始化 Oauth信息
	 * @throws Exception 
	 * @throws IOException 
     */  
    @PostConstruct  
    public void init(){
    	String active = env.getActiveProfiles()[0];
		File file = new File(active + "_oauthparams.xml");
		log.info("init():oauthparams.xml.path:" + file.getPath());
		if(file.exists()){
			XStream xstream = new XStream();
			xstream.processAnnotations(OAuthParams.class);
			OAuthParams obj = null;
			//xstream.autodetectAnnotations(true);
			//xstream.alias("OAuthParams", OAuthParams.class);
			try{
				obj = (OAuthParams)xstream.fromXML(file);
				long accessTime = Long.parseLong(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
				long start = System.currentTimeMillis();

				// 如果认证信息在不到一天的时间内超期的话
				Date accesstime = new SimpleDateFormat("yyyyMMddHHmmss").parse(obj.getAccessTime().toString());
				if((System.currentTimeMillis() - accesstime.getTime())/1000 + 86400 > obj.getExpiresIn()){
					Files.copy(file, new File( active + "_oauthparams_bak.xml"));
					log.info("认证信息在不到一天的时间内超期，重新认证");
					httpController.token(null,obj.getRefreshToken());
				}else{
					log.info("认证信息不需重新认证");
					HttpController.oauthParams = obj;  
				}
			}catch(Exception ex){
				HttpController.oauthParams = obj;  
				log.error(ex.getMessage());
			}


		}
	}
	
	// 定时预警任务 每周日凌晨1点15分触发
	@Scheduled(cron="0 15 1 ? * SUN")   
	//@Scheduled(cron="0 12 11 ? * TUE")   
	public void warnstart() {
		log.info("定时预警任务启动");
		try {
			mailService.warning();
		} catch (Exception e) {
			log.error(e.getMessage());
			e.printStackTrace();
		}


	}     


}