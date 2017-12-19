package com.dipub.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.domain.LogInfo;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class LogInfoRepositoryTest {

	@Autowired
	LogInfoRepository logInfoRepository;
	public LogInfoRepositoryTest() {


	}

	@Test
	public void findOne() throws Exception {
		LogInfo ret = logInfoRepository.findOne(Long.valueOf(2));
		assert(true);
	}
	@Test
	public void save() throws Exception {
		LogInfo info = new LogInfo();
		info.setIp("127.0.0.1");
		info.setUserAgent("userAgent");
		long accessTime = Long.parseLong(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));

		info.setAccessTime(accessTime);
		info.setAccessMethod("junit test");
		LogInfo dbinfo = logInfoRepository.save(info);
		assert(true);
	}

}
