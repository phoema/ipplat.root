package com.dipub.service;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.util.AreaCodeCache;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class AreaCodeCacheTest {

	@Autowired
	AreaCodeCache areaCodeCache;
	public AreaCodeCacheTest() {


	}

	@Test
	public void findOne() throws Exception {
		for(int i=0;i<10 ;i++){
			Thread.sleep(2000);
			areaCodeCache.findByCode("340802");
		}
		Thread.sleep(5000);
		for(int i=0;i<10 ;i++){
			areaCodeCache.findByCode("340802");
		}
		Thread.sleep(5000);
		assert(true);
	}

}
