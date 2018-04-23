package com.dipub.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.domain.BlackList;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class BlacklistRepositoryTest {

	@Autowired
	BlackListRepository blacklistRepository;
	public BlacklistRepositoryTest() {


	}

	@Test
	public void findOne() throws Exception {
		for(int i =0 ;i < 10; i++){
			Thread.sleep(2);
			BlackList black = blacklistRepository.findByIp("127.0.0.1");
			if(black != null){
				System.out.println(black.getIp());
			}
		}
		assert(true);
	}
	@Test
	public void save() throws Exception {
		BlackList black = new BlackList();
		black.setIp("127.0.0.1");
		long accessTime = Long.parseLong(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));

		BlackList dbinfo = blacklistRepository.save(black);
		blacklistRepository.delete("127.0.0.1");
		assert(true);
	}

}
