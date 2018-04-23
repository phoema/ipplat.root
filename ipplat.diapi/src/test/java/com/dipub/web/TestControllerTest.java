package com.dipub.web;

import java.io.File;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.regex.Pattern;

import lombok.extern.slf4j.Slf4j;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.io.Files;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class TestControllerTest {

	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	public TestControllerTest() {


	}

	private static Pattern FilePattern = Pattern.compile("[\\\\/:*?\"<>|]");  
	@Test
	public void search() throws Exception{
		String lineval = "%s\t%s\t%s\t%s\t%s\t";
		String claimstr = "http://image.zldsj.com/H/PID/%s/%s/%s/%s/%s/CLA/CLA_ZH.html";
		//List<String> query = Files.readLines(new File("D:\\queyr.txt"),StandardCharsets.UTF_8);
		String query = Files.readFirstLine(new File("D:\\query.txt"),StandardCharsets.UTF_8);
		String columns = "PID;ANO;PNO;AD;PD";
		List<String> lines = Files.readLines(new File("D:\\pno.txt"), StandardCharsets.UTF_8);
		Charset charset = Charset.forName("GB2312");    
		for (int i=0;i<lines.size();i++){
			String line = lines.get(i);
			String pid = line.split("\t")[0];
			String tio = line.split("\t")[1];
			System.out.println(pid);
			//PIDCNA020141001000000001040780FCA25VVLM017643
			String url = String.format(claimstr, pid.substring(3, 7), pid.substring(7, 11), pid.substring(11, 15), pid.substring(15, 29), pid.substring(29, 45));
			String result = httpClientService.doGet(url);
			File file = new File("D:\\result\\" + FilePattern.matcher(tio).replaceAll("") + ".txt");
			Files.write(result.getBytes("gb2312"),file );
			Files.append(line, file , charset);

		}

	}



}
