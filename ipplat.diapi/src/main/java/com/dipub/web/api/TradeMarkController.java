package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.apache.http.client.ClientProtocolException;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.oauth.OauthConfig;
import com.dipub.util.AreaCode;
import com.dipub.util.AreaCodeCache;
import com.dipub.util.CountryCodeCache;
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

@RestController
@RequestMapping(value="/api/trademark",method={RequestMethod.POST,RequestMethod.GET})
public class TradeMarkController extends CommonController{
	
	private static String url_expression = "/api/patent/search/expression";

	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	
	@Autowired
	private OauthConfig oauthConfig;
	@Autowired
	AreaCodeCache areaCodeCache;
	@Autowired
	CountryCodeCache countryCodeCache;
	
	
//	@Autowired
//	private CloseableHttpClient httpclient;

	/**
	 * 表达式检索
	 * @param express=HNO=腾讯 AND TMDB=CN
	 * @param page 页码
	 * @param page_row 没有显示条数
	 * @param sort_column 排序字段
	 * @return 根据表达式检索到的专利的列表
	 * @throws Exception 
	 */
	@RequestMapping("/search/expression")
	public String expression(String express,String tmdb,String page,String page_row,String sort_column)  throws Exception{
		
		if(Strings.isNullOrEmpty(express)){
			//throw new DIPubException("缺失关键参数express");
		}

		if(Strings.isNullOrEmpty(tmdb)){
			tmdb = "CN";
		}
		if(Strings.isNullOrEmpty(page)){
			page = "1";
		}
		if(Strings.isNullOrEmpty(page_row)){
			page_row = "10";
		}
		if(Strings.isNullOrEmpty(sort_column)){
			sort_column = "+RD";
		}
		if(!DIUtils.isNumeric(page)){
			throw new DIPubException("页码不是数字");
		}
		if(Integer.parseInt(page) > 30){
			throw new DIPubException("最大只能浏览前30页数据");
		}
		if(Strings.isNullOrEmpty(express)){
			express = "TMDB=(" +tmdb + ")";
		}else{
			express = "(" + express + ") AND TMDB=(" +tmdb + ")";
		}
		

		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/trademark/search/expression")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("page", page)
				   .setParameter("sort_column", sort_column)
				   .setParameter("page_row", page_row)
				   
				   .buildQueryMessage();	

		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

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
	 * 商标检索结果统计
	 * 通过表达式的传递，系统为用户推送结果中包含能够统计出数量的字段。
	 * 其中包括， 当前权利状态(CS)、尼斯分类（NC）、申请人名称-原始（HNO）、商标类型（MK）、
	 * 指定颜色（MSC）、注册年（RY）、来源国（APA）、中国省区（CNR）、代理人名称-原始（ARO）、
	 * 专用权期限截止年（SREY）、申请年（FY）、驰名商标（WKM）
	 * @param express
	 * @param category
	 * @return 返回分类统计结果中能够统计出数量的字段。
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 * @throws DIPubException 
	 */
	@RequestMapping("/statistics")
	public String statistics(String express,String tmdb,String category)  throws OAuthSystemException, ClientProtocolException, IOException, DIPubException{
		
		int maxrecords = 5;
		if(Strings.isNullOrEmpty(express)){
			throw new DIPubException("缺失关键参数express");
		}
		if(Strings.isNullOrEmpty(tmdb)){
			tmdb = "CN";
		}
		if(Strings.isNullOrEmpty(express)){
			express = "HNO=腾讯 AND TMDB=CN";
		}
		if(Strings.isNullOrEmpty(category)){
			category = "NC;HNO;CS;RY;CNR;ARO";
		}
		express = "(" + express + ") AND TMDB=(" +tmdb + ")";
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/trademark/statistics")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("categoryColumn", category)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		ObjectMapper objectMapper = new ObjectMapper();
		// 接统计结果数量控制在最大maxrecord（10）
		// 如果是分类号字段，将小写改成大写
		LinkedHashMap ret = null;
		try{
			ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		}catch(Exception ex){
			return responseString;
		}
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
				if(infoList.size()>maxrecords){
					infoList = infoList.subList(0, maxrecords);
				}
				if(key.equals("ry")){
					for(LinkedHashMap info : infoList){
						if(info.get("value").toString().length() > 4){
							info.put("value", info.get("value").toString().substring(0, 4));
						}
					}
					infoList.sort(comparator);
				}
				if(infoList.size()>maxrecords){
					infoList = infoList.subList(0, maxrecords);
				}
				context.put(key, infoList);
			}
			
		}
		
		return objectMapper.writeValueAsString(ret);
	}
	/**
	 * 商标详情
	 * @param id
	 * @return 返回商标的详细信息
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/detail/china")
	public String detail(String id)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(id)){
			id = "TIDCN2014012242CN00001389382240FCG22MS72016CE6";
		}

		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/trademark/detail/china")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("id", id)
				   
				   .buildQueryMessage();	
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
			if(ret.get("context")!= null && ((LinkedHashMap)ret.get("context")).get("records") != null){
				List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
				LinkedHashMap trade = records.get(0);
				// 加工：类似群号tradeMark.ncs 服务列表tradeMark.cnncs
				String split = ";";
				List<LinkedHashMap> list = new ArrayList<LinkedHashMap>();
				LinkedHashSet<String> set = new LinkedHashSet<String>();
				String listcn = "";
				if(trade.get("cnServiceLists") != null){
					list = (List<LinkedHashMap>)trade.get("cnServiceLists")	;
				}else if (trade.get("usServiceLists") != null){
					list = (List<LinkedHashMap>)trade.get("usServiceLists")	;
					split = "<br>";
				}
					//类似群号
				for(LinkedHashMap map : list){
					
					listcn+=map.get("gso") + split;
					if(map.get("ncs") != null && !set.contains(map.get("ncs"))){
						set.add(map.get("ncs").toString());	
					}
				}
				if(listcn.length() > 0) listcn = listcn.substring(0, listcn.length()-1);
				((LinkedHashMap)trade.get("tradeMark")).put("cnncs", listcn);
				//服务列表
				Iterator<String> iterator = set.iterator();
				String ncs = "";
				while(iterator.hasNext()){
					ncs+=iterator.next() + ";";
				}
				if(ncs.length() > 0) ncs = ncs.substring(0, ncs.length()-1);
				((LinkedHashMap)trade.get("tradeMark")).put("ncs", ncs);
				
				// 申请人区域代码
				if(trade.get("applicants") != null){
					List<LinkedHashMap> applicants = (ArrayList<LinkedHashMap>)trade.get("applicants");
					LinkedHashMap applicant = applicants.get(0);
					if(applicant.get("hnac") != null){
						AreaCode areaCode = areaCodeCache.findByCode(applicant.get("hnac").toString());
						if(areaCode != null){
							String address = areaCode.getProvince() + areaCode.getCity() + areaCode.getCounty() + " " + areaCode.getAreacode();
							applicant.put("hnac",address);
						}else{
							String country = countryCodeCache.findByCode(applicant.get("hnac").toString());
							if(country != null) 
								applicant.put("hnac",country + " " + applicant.get("hnac").toString());
						}
						
					}
				}
					//商标类型
				trade.remove("cnServiceLists");
				trade.remove("usServiceLists");
			}
			responseString = objectMapper.writeValueAsString(ret);
		}

		return responseString;
	}
	/**
	 * 商标流程
	 * 当用户使用TID相关能够精确检索处一条商标数据时，系统将退送出该商标的流程，其流程包括：状态、日期、流程描述。
	 * @param id
	 * @return 返回商标流程信息
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/detail/procedure")
	public String procedure(String id)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(id)){
			id = "TIDCN2014012242CN00001389382240FCG22MS72016CE6";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/trademark/detail/procedure")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("id", id)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		return responseString;
	}
	/**
	 * api/trademark/related
	 * 商标相关数据
	 * 当用户使用TID相关能够精确检索处一条商标数据时，系统将推送出该专利的相关数据，
	 * 包括专利、商标、期刊、标准、复审无效、裁判文书、法律法规。将相关类型的相关内容提供出来
	 * @param id
	 * @return 返回商标相关数据的结果
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/related")
	public String related(String id)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(id)){
			id = "TIDCN2014012242CN00001389382240FCG22MS72016CE6";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/trademark/related")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("id", id)
				   
				   .buildQueryMessage();	
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
			if(ret.get("context")!= null && ((LinkedHashMap)ret.get("context")).get("records") != null){
				List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
				if(records.size() > 0){
					//records.get(0).removeIf(w->w.containsKey("ise"));
					// 去除冗余字段
					records.get(0).remove("ise");//期刊
					records.get(0).remove("std");//标准
					records.get(0).remove("dec");//判例
					
				}

			}
			responseString = objectMapper.writeValueAsString(ret);
		}

		return responseString;
	}

}
