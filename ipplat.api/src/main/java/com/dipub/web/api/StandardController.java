package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.client.ClientProtocolException;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.http.HttpResult;
import com.dipub.oauth.OauthConfig;
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

/***
 * 标准相关API
 * @author jiahh 2018年3月15日
 *
 */
@RestController
@Slf4j
@RequestMapping(value="/api/standard",method={RequestMethod.POST,RequestMethod.GET})
public class StandardController extends CommonController{
	
	@Autowired
	private OauthConfig oauthConfig;
	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	

	/**.
	 * /api/patent/search/expression
	 * 表达式检索
	 * @param express 表达式
	 * @param pdb 专利库
	 * @param page 页码
	 * @param page_row 没有显示条数
	 * @param sort_column 排序字段
	 * @return 根据表达式检索到的专利的列表
	 * @throws Exception 
	 */
	@RequestMapping("/search/expression")
	public String expression(String express,String pdb,String page,String page_row,String sort_column)  throws Exception{
		
		String editexpress = express;
		if(Strings.isNullOrEmpty(editexpress))
		{
			// TODO exception
			editexpress = "";
		}
		if(Strings.isNullOrEmpty(page)){
			page = "1";
		}
		if(Strings.isNullOrEmpty(page_row)){
			page_row = "10";
		}
		if(Strings.isNullOrEmpty(sort_column) || sort_column.endsWith("RELEVANCE")){
			sort_column = "-RELEVANCE";
		}
		if(!DIUtils.isNumeric(page)){
			throw new DIPubException("页码不是数字");
		}
		if(Integer.parseInt(page) > 30){
			throw new DIPubException("最大只能浏览前30页数据");
		}

		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/standard/search/expression")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", editexpress)
				   .setParameter("page", page)
				   .setParameter("sort_column", sort_column)
				   .setParameter("page_row", page_row)
				   
				   .buildQueryMessage();	

		HttpResult result = httpClientService.doPost(oltu_request.getLocationUri());
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());
		{
			// 对返回对象进行定制化操作
			ObjectMapper objectMapper = new ObjectMapper();
			LinkedHashMap ret = null;
			try{
				ret = objectMapper.readValue(responseString,LinkedHashMap.class);
			}catch(Exception ex){
				return responseString;
			}
			if(!"000000".equals(ret.get("errorCode"))){
				return responseString;
			}
			if(ret.get("context")!= null && !Strings.isNullOrEmpty(ret.get("context").toString()) && ((LinkedHashMap)ret.get("context")).get("records") != null){
				List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
				for(LinkedHashMap map : records){
					// 去除冗余字段
					map.remove("abse");
					map.remove("absc");
					map.remove("tie");
					map.remove("tic");
					map.remove("age");
					map.remove("agc");
					map.remove("ine");
					map.remove("inc");
					map.remove("apc");
					map.remove("ape");
					map.remove("claoHTML");
					map.remove("desoHTML");
				}
				
			}
			

			responseString = objectMapper.writeValueAsString(ret);
		}
		return responseString;
	}
	// 统计用，默认统计为案count倒序，特殊字段如ay使用此方法案value倒序
	Comparator<LinkedHashMap> comparator = new Comparator<LinkedHashMap>(){
		   public int compare(LinkedHashMap s1, LinkedHashMap s2) {
		      //按（value）年份倒序
			   return(s2.get("value").toString().compareTo(s1.get("value").toString()));
		   }
	};
	/**
	 * 专利检索结果统计
	 * 通过表达式的传递，系统为用户推送结果中包含能够统计出数量的字段。其中包括，
	 * 专利类型（PDT）、中国当前权利状态（LSBCN：格式-在审_公开）、中国当前权利状态中文（LSSCN：格式-在审）、国外当前权利状态（LSBFO）、
	 * IPC、申请年（AY）、公布年（PY）、专利权人（ASO）、发明人（INO）、最早优先权年（EPRY）、CPC（CPC）、
	 * 洛迦诺（LC）、申请人（APO）、申请人类型（APCL）、专利权人类型（ASCL）、代理机构（CRO）、代理人（AGO）、
	 * 审查员（EXO）、关键词（FTKO）、受理国（AC）、来源国（AP1A）、中国省份（APPPC）、同族国别（SFCL）、
	 * PCT专利（PCT）、分案申请（DP）、复审决定（PRES）、无效专利（PINS）、法院判决（PLI）、专利转让（TS）、
	 * 专利许可（LS）、专利质押（PS）、最早优先权（EPRNO）。最多十个。（前20得统计结果）
	 * @param express
	 * @param pdb
	 * @param category LSSCN;PDB;IPCSC;AY;APO;INO
	 * @param lengthmap "{\"pdb\":\"10\"}"
	 * @return 返回分类统计结果中能够统计出数量的字段。
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/statistics")
	public String statistics(String express,String pdb ,String category ,String lengthmap)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		int maxrecords = 5;
		if(Strings.isNullOrEmpty(express)){

		}
		if(Strings.isNullOrEmpty(category)){
			category = "GBT;QT";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/stanard/statistics")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("categoryColumn", category)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());
		
		responseString = convert_statistics(responseString , lengthmap);

		return responseString;
	}
	private String convert_statistics(String responseString,String lengthmap) throws JsonParseException, JsonMappingException, IOException{
		ObjectMapper objectMapper = new ObjectMapper();
		HashMap<String,String> map = null;
		if(lengthmap != null){
				map = objectMapper.readValue(lengthmap, HashMap.class);
		}
		int maxrecords = 5;
		// 接统计结果数量控制在最大maxrecord（10）
		// 如果是分类号字段，将小写改成大写
		LinkedHashMap ret = null;
		try{
			ret = objectMapper.readValue(responseString,LinkedHashMap.class);
			if(!"000000".equals(ret.get("errorCode"))){
				return responseString;
			}
			if(ret.get("context") != null ){
				LinkedHashMap context = (LinkedHashMap<String, List<LinkedHashMap>>)ret.get("context");
				Set set = context.keySet();
				Iterator iterator = context.keySet().iterator();
				while(iterator.hasNext()){
					String key = (String)iterator.next();
					List<LinkedHashMap> infoList = (ArrayList<LinkedHashMap>)context.get(key);
					if(key.equals("crd")){
						for(LinkedHashMap info : infoList){
							if(info.get("value").toString().length() > 4){
								info.put("value", info.get("value").toString().substring(0, 4));
							}
							//info.value = info.value.toUpperCase();
						}
						infoList.sort(comparator);
					}
					if(map != null && map.containsKey(key)){
						int length = Integer.parseInt(map.get(key));
						if(length > 0)
							infoList = infoList.subList(0, Integer.parseInt(map.get(key)));
					}
					else if(infoList.size()>maxrecords){
						infoList = infoList.subList(0, maxrecords);
					}
	
					context.put(key, infoList);
				}
				
			}
			responseString = objectMapper.writeValueAsString(ret);
		}catch(Exception e){
			log.error(e.getMessage());;
		}
		return responseString;
	}
	/**
	 * /api/patent/detail/catalog
	 * 专利详情
	 * @param pid
	 * @param pno
	 * @return 返回专利的详细信息
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/detail")
	public String detail(String id)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(id)){
			id = "SIDCN19841296C020E7476F6B3596C0FCA12B8SM014D69";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/stanard/detail")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("id", id)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		responseString = convert_detail(responseString);

		return responseString;
	}
	/**
	 * 转换专利详情格式
	 * @param responseString
	 * @return
	 */
	private String convert_detail(String responseString){
		try{
			// 对返回对象进行定制化操作
			ObjectMapper objectMapper = new ObjectMapper();
			LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
			if(ret.get("context")!= null && ((LinkedHashMap)ret.get("context")).get("records") != null){
				List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
				LinkedHashMap patent = records.get(0);
				if(patent.containsKey("caseTrademark")){
					List<LinkedHashMap> caset = (List<LinkedHashMap>)(patent.get("caseTrademark"));
					for(LinkedHashMap t : caset){
						t.remove("gs");
					}
				}
				// 去除冗余字段
				patent.remove("fimalyObjList");
				patent.remove("feePaymentInformations");
				patent.remove("cits");
				//patent.remove("imgArray");
				
				
			}
			responseString = objectMapper.writeValueAsString(ret);
		}catch(Exception e){
			log.error(e.getMessage());
		}
		return responseString;
	}


}
