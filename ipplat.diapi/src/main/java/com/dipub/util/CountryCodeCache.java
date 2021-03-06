package com.dipub.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import com.google.common.io.Files;


 
/**
 * 申请人区域代码
 * @author jiahh 2016年8月23日
 *
 */
@Component
@CacheConfig(cacheNames = "countrycode")
public class CountryCodeCache{

	private Hashtable<String,String> countryMap = new Hashtable<String,String>();  
	/** 
     * 初始化 申请人区域代码表
	 * @throws IOException 
     */  
    @PostConstruct  
    public void init() throws IOException {  
    	countryMap = new Hashtable<String,String>();
		Resource resource = new ClassPathResource("countrylist.txt");
		List<String> countrylist =this.readContent(resource.getInputStream());
//		File file = resource.getFile();
//		List<String> countrylist =Files.readLines(file,StandardCharsets.UTF_8);
		for(int index = 1; index<countrylist.size(); index++){
			String[] array = countrylist.get(index).split("\t");
			countryMap.put(array[0], array[1]);
		}

    }
//	@Cacheable
//	public Hashtable<String,AreaCode> getAreaCode() throws IOException {
//		System.out.println("---> Loading country with code ");
//		Hashtable<String,AreaCode> dict = new Hashtable<String,AreaCode> ();
//		Resource resource = new ClassPathResource("arealist.txt");
//		File file = resource.getFile();
//		List<String> arealist =Files.readLines(file,StandardCharsets.UTF_8);
//		for(int index = 1; index<arealist.size(); index++){
//			String[] array = arealist.get(index).split("\t");
//			AreaCode area = new AreaCode();
//			area.setProvince(array[0]);
//			area.setCity(array[1]);
//			area.setCounty(array[2]);
//			area.setAreacode(array[3]);
//			dict.put(array[3], area);
//		}
//		return dict;
//	}

	@Cacheable
	public String findByCode(String code) throws IOException{
		
		System.out.println("---> findByCode country with code " + code);
		//Hashtable<String,AreaCode> dict = getAreaCode();
		if(countryMap == null){
			init();
		}
		String area = countryMap.get(code);
		return area;
	}
	/**
	 * 输出输入流的内容
	 * 
	 * @param is
	 * @throws IOException
	 */
	private List<String> readContent(InputStream is) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(is,StandardCharsets.UTF_8));
		List<String> list = new ArrayList<String>();
		String line;
		while ((line = br.readLine()) != null) {
			list.add(line);
		}
		if (is != null) {
			is.close();
		}
		if (br != null) {
			br.close();
		}
		return list;
	}
	
}