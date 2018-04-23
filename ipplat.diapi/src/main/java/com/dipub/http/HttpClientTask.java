package com.dipub.http;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.conn.HttpClientConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


 
/**
 * 定时器
 * @author jiahh 2016年8月23日
 *
 */
@Slf4j
@Component
public class HttpClientTask{

	@Autowired
	HttpClientConnectionManager  connMgr;
	//更新定时器
	// 定时任务 每天凌晨1点触发
	//@Scheduled(cron="0 15 1 * * ?")   
	// 定时任务 每小时触发一次
	@Scheduled(fixedDelay=3600000)  
	//  启动后延迟5秒后开始首次触发
	//@Scheduled(initialDelay=50000)  
	// 定时任务 "0 15 2 7 * ?" 每月7日凌晨2点15触发 
	//@Scheduled(cron="0 14 9 18 * ?")   
	//清理连接池中的无效链接
	public void run() {
		try {
			log.info("清理连接池中的无效链接");
			// 关闭失效的连接
			connMgr.closeExpiredConnections();
		} catch (Exception e) {
			log.error("清理连接池中的无效链接出现异常");
			e.printStackTrace();
		}


	}     

	

}