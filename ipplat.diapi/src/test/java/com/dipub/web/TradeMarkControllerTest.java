package com.dipub.web;

import static org.junit.Assert.assertEquals;

import java.util.LinkedHashMap;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.web.api.TradeMarkController;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class TradeMarkControllerTest {

	@Autowired
	TradeMarkController tradeMarkController;
	public TradeMarkControllerTest() {


	}

	@Test
	public void express() throws Exception {
		String express = "申请日期=2011";
		String page = "1";
		String page_row = "10";
		String sort_column = "+RELEVANCE";
		String ret = tradeMarkController.expression(express, null,page,page_row,sort_column);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assertEquals("10", map.get("page_row"));
		assert(true);
	}
	@Test
	public void statistics() throws Exception {
		String express = "申请日期=2011";
		String category = null;
		String ret = tradeMarkController.statistics(express, null,category);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}
	@Test
	public void detail() throws Exception {
		String id = "TIDCN2014012242CN00001389382240FCG22MS72016CE6";
		String ret = tradeMarkController.detail(id);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}
	@Test
	public void procedure() throws Exception {
		String id = "TIDCN2014012242CN00001389382240FCG22MS72016CE6";
		String ret = tradeMarkController.procedure(id);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}



}
