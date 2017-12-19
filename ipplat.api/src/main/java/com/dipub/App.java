package com.dipub;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.dipub.oauth.OAuthParams;
import com.dipub.web.HttpController;
import com.thoughtworks.xstream.XStream;

/**
 * springboot快速启动项
 * 可以使用其他方式启动，通过maven可以进行控制
 * @author jiahh
 *
 */
@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigurationProperties
@EnableScheduling  //配置和使用定时器
@EnableCaching  //配置和使用缓存
public class App {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(App.class, args);
	}
}
