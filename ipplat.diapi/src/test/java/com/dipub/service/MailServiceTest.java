package com.dipub.service;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class MailServiceTest {

	@Autowired
	MailService mailService;
	public MailServiceTest() {


	}

	@Test
	public void send() throws Exception {
		mailService.sendSimpleMail("53452368@qq.com", "");
		assert(true);
	}

}
