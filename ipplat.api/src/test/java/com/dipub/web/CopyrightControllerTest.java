package com.dipub.web;

import static org.junit.Assert.assertEquals;

import java.util.LinkedHashMap;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.web.api.CopyrightController;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class CopyrightControllerTest {

	@Autowired
	CopyrightController copyrightController;
	public CopyrightControllerTest() {


	}

	@Test
	public void express() throws Exception {
		String express = "登记日期=2011";
		String page = "1";
		String page_row = "10";
		String sort_column = "+RELEVANCE";
		String ret = copyrightController.expression(express,page,page_row,sort_column);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assertEquals("10", map.get("page_row"));
		assert(true);
	}
	@Test
	public void statistics() throws Exception {
		String express = "登记日期=2011";
		String category = null;
		String ret = copyrightController.statistics(express,category);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}

	@Test
	public void workexpress() throws Exception {
		String express = "登记日期=2011";
		String page = "1";
		String page_row = "10";
		String sort_column = "+RELEVANCE";
		String ret = copyrightController.workexpression(express,page,page_row,sort_column);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assertEquals("10", map.get("page_row"));
		assert(true);
	}
	@Test
	public void workstatistics() throws Exception {
		String express = "登记日期=2011";
		String category = null;
		String ret = copyrightController.workstatistics(express,category);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}


}
