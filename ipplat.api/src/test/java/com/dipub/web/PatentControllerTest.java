package com.dipub.web;

import static org.junit.Assert.assertEquals;

import java.util.HashMap;
import java.util.LinkedHashMap;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.dipub.web.api.PatentController;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class PatentControllerTest {

	@Autowired
	PatentController patentController;
	public PatentControllerTest() {


	}

	@Test
	public void express() throws Exception {
		String express = "PD=2011";
		String pdb = "CNA0,CNS0,CNY0";
		String page = "1";
		String page_row = "10";
		String sort_column = "+RELEVANCE";
		String ret = patentController.expression(express,pdb,page,page_row,sort_column,null);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assertEquals("10", map.get("page_row"));
		assert(true);
	}
	@Test
	public void statistics() throws Exception {
		String express = "PD=201101";
		String pdb = "CNA0,CNS0,CNY0";
		String category = null;
		HashMap<String,Integer> lenghmap = null;
		String ret = patentController.statistics(express,pdb,category,null);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}

	@Test
	public void detail() throws Exception {
		String pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		String pno = "CN102236702A";
		String ret = patentController.detail(pid, pno);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}
	@Test
	public void law() throws Exception {
		String pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		String ret = patentController.law(pid);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}
	@Test
	public void related() throws Exception {
		String pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		String ret = patentController.related(pid);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}
	@Test
	public void download() throws Exception {
		String pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		String pns = "CN102236702A";

		String ret = patentController.download(pid,pns);
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap map = objectMapper.readValue(ret,LinkedHashMap.class);
		assert("000000".equals(map.get("errorCode")));
		assert(true);
	}

}
