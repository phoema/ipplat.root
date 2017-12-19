package com.ipplat.process;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * springboot快速启动项
 * 可以使用其他方式启动，通过maven可以进行控制
 * @author jiahh
 *
 */
@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigurationProperties
public class App {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(App.class, args);
	}
}
