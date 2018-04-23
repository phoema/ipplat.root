package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
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
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

@RestController
@RequestMapping(value="/api/copyright",method={RequestMethod.POST,RequestMethod.GET})
public class CopyrightController extends CommonController{
	
	//private static String url_expression = "/api/copyright/search/expression";
	//private static String url = "http://111.198.99.247:8085/restzhiliao/";
	@Autowired
	private OauthConfig oauthConfig;
	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
//	@Autowired
//	private CloseableHttpClient httpclient;

	/**.
	 * /api/copyright/soft/search/expression
	 * 表达式检索
	 * @param express 表达式
	 * @param page 页码
	 * @param page_row 每页显示条数
	 * @param sort_column 排序字段
	 * @return 根据表达式检索到的软著的列表
	 * @throws Exception 
	 * @throws SolrServerException 
	 */
	@RequestMapping("/soft/search/expression")
	public String expression(String express,String page,String page_row,String sort_column)  throws Exception{
		if(Strings.isNullOrEmpty(express))
		{
			// TODO exception
			//express = "首次发表年=2012";
		}
		if(Strings.isNullOrEmpty(page)){
			page = "1";
		}
		if(Strings.isNullOrEmpty(page_row)){
			page_row = "10";
		}
		if(Strings.isNullOrEmpty(sort_column)){
			sort_column = "+RY";
		}
		
		if(!DIUtils.isNumeric(page)){
			throw new DIPubException("页码不是数字");
		}
//		苏冉(2764111080)  14:58:11
//		软著和作品  不做300个数量的 限制 是不？@赵鹏 
//		赵鹏(7585659)  15:10:04
//		软著和作品没有限制
//
//		if(Integer.parseInt(page) > 30){
//			throw new DIPubException("最大只能浏览前30页数据");
//		}
		int start = (Integer.parseInt(page)-1)*Integer.parseInt(page_row) ;
		OAuthClientRequest oltu_request = OAuthClientRequest
//				   .authorizationLocation(oauthConfig.getResourceUrlcr() + "/copyright/softsearch")
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/copyrightrzw/search/expression")
				   .setClientId(HttpController.oauthParams.getClientId())
				   .setScope(HttpController.oauthParams.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("page", page)
				   .setParameter("sort_column", sort_column)
				   .setParameter("page_row", page_row)
				   
				   .buildQueryMessage();	

		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

//		
//		{
//			//TODO 使用restzhiliao应用获取的结果转换为开放接口格式 
//			LinkedHashMap result = new LinkedHashMap();
//			ObjectMapper objectMapper = new ObjectMapper();
//			LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//			result.put("errorCode", "000000");
//			result.put("errorDesc", "");
//			result.put("page_row", page_row);
//			result.put("page", page);
//			result.put("total", ret.get("total")==null?"":ret.get("total"));
//			result.put("sort_column", sort_column);
//			LinkedHashMap records = new LinkedHashMap();
//			records.put("records", ret.get("records"));
//			result.put("context", records);
//			responseString = objectMapper.writeValueAsString(result);
//			
//		}
		//{ "errorCode" : "000000", "errorDesc" : "", "page_row" : "10", "page" : "1", "total" : "1513", "sort_column" : "", "context" : {"records":

		return responseString;
	}
	/**.
	 * /api/copyright/work/search/expression
	 * 表达式检索
	 * @param express 表达式
	 * @param page 页码
	 * @param page_row 每页显示条数
	 * @param sort_column 排序字段
	 * @return 根据表达式检索到的作品的列表
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 * @throws DIPubException 
	 */
	@RequestMapping("/work/search/expression")
	public String workexpression(String express,String page,String page_row,String sort_column)  throws OAuthSystemException, ClientProtocolException, IOException, DIPubException{
		if(Strings.isNullOrEmpty(express))
		{
			// TODO exception
			//express = "首次发表年=2012";
		}
		if(Strings.isNullOrEmpty(page)){
			page = "1";
		}
		if(Strings.isNullOrEmpty(page_row)){
			page_row = "10";
		}
		if(Strings.isNullOrEmpty(sort_column)){
			sort_column = "+RY";
		}
		
		if(!DIUtils.isNumeric(page)){
			throw new DIPubException("页码不是数字");
		}
//		苏冉(2764111080)  14:58:11
//		软著和作品  不做300个数量的 限制 是不？@赵鹏 
//		赵鹏(7585659)  15:10:04
//		软著和作品没有限制
//
//		if(Integer.parseInt(page) > 30){
//			throw new DIPubException("最大只能浏览前30页数据");
//		}
		int start = (Integer.parseInt(page)-1)*Integer.parseInt(page_row);
		OAuthClientRequest oltu_request = OAuthClientRequest
//				   .authorizationLocation(oauthConfig.getResourceUrlcr() + "/copyright/worksearch")
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/copyrightrzp/search/expression")
				   .setClientId(HttpController.oauthParams.getClientId())
				   .setScope(HttpController.oauthParams.getScope())
//				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("page", page)
				   .setParameter("sort_column", sort_column)
				   .setParameter("page_row", page_row)
				   
				   .buildQueryMessage();	

//		// 创建HttpClient实例
//		HttpClient httpclient = new DefaultHttpClient();
//        // 创建Get方法实例     
//        HttpGet httpgets = new HttpGet(oltu_request.getLocationUri());    
//        //
//        HttpResponse response = httpclient.execute(httpgets);
//
//		String responseString = EntityUtils.toString(response.getEntity());
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

//		
//		{
//			//TODO 使用restzhiliao应用获取的结果转换为开放接口格式 
//			LinkedHashMap result = new LinkedHashMap();
//			ObjectMapper objectMapper = new ObjectMapper();
//			LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//			result.put("errorCode", "000000");
//			result.put("errorDesc", "");
//			result.put("page_row", page_row);
//			result.put("page", page);
//			result.put("total", ret.get("total")==null?"":ret.get("total"));
//			result.put("sort_column", sort_column);
//			LinkedHashMap records = new LinkedHashMap();
//			records.put("records", ret.get("records"));
//			result.put("context", records);
//			responseString = objectMapper.writeValueAsString(result);
//			
//		}

		return responseString;
	}
	// 统计用，默认统计为案count倒序，特殊字段如ay使用此方法案value倒序
	private Comparator<LinkedHashMap> comparator = new Comparator<LinkedHashMap>(){
		   public int compare(LinkedHashMap s1, LinkedHashMap s2) {
		      //按（value）年份倒序
			   return(s2.get("value").toString().compareTo(s1.get("value").toString()));
		   }
	};
	/**
	 * 软著检索结果统计
	 * @param express
	 * @param category 分类号 CTN;首次发表年 PYF;登记年 RY;著作权人及国籍 SWP
	 * @return 返回分类统计结果中能够统计出数量的字段。
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/soft/statistics")
	public String statistics(String express,String category)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		int maxrecords = 5;
		if(Strings.isNullOrEmpty(express)){
			express = "首次发表年>2012";
		}
		if(Strings.isNullOrEmpty(category)){
			category = "CTN;PYF;RY;SWP";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   //.authorizationLocation(oauthConfig.getResourceUrlcr() + "/copyright/softcategory")
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/copyrightrzw/statistics")
				   .setClientId(HttpController.oauthParams.getClientId())
				   .setScope(HttpController.oauthParams.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("categoryColumn", category)
//				   .setParameter("categorynum", "20")
				   
				   .buildQueryMessage();	
//		// 创建HttpClient实例
//		HttpClient httpclient = new DefaultHttpClient();
//        // 创建Get方法实例     
//        HttpGet httpgets = new HttpGet(oltu_request.getLocationUri());    
//        //
//        HttpResponse response = httpclient.execute(httpgets);
//
//		String responseString = EntityUtils.toString(response.getEntity());
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		ObjectMapper objectMapper = new ObjectMapper();
		// 接统计结果数量控制在最大maxrecord（10）
		// 如果是分类号字段，将小写改成大写
		LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//		
//		{
//			//TODO 使用restzhiliao应用获取的结果转换为开放接口格式 
//			LinkedHashMap result = new LinkedHashMap();
//			Set set = ret.keySet();
//			Iterator iterator = ret.keySet().iterator();
//			LinkedHashMap<String, List<LinkedHashMap>> context = new LinkedHashMap<String, List<LinkedHashMap>>();
//			while(iterator.hasNext()){
//				String key = (String)iterator.next();
//				LinkedHashMap hashmap = (LinkedHashMap )ret.get(key);
//				if(hashmap == null) continue;
//				Iterator iterator2 = hashmap.keySet().iterator();
//				List<LinkedHashMap> infoList = new ArrayList<LinkedHashMap>();
//				while(iterator2.hasNext()){
//					String key2 = (String)iterator2.next();
//					LinkedHashMap newmap = new LinkedHashMap();
//					newmap.put("value", key2);
//					newmap.put("count", hashmap.get(key2));
//					infoList.add(newmap);
//				}
//				context.put(key, infoList);
//
//			}
//			result.put("errorCode", "000000");
//			result.put("errorDesc", "");
//			result.put("context", context);
//			ret = result;
//		}
//
//		
		if(ret.get("context") != null ){
			LinkedHashMap context = (LinkedHashMap<String, List<LinkedHashMap>>)ret.get("context");
			Set set = context.keySet();
			Iterator iterator = context.keySet().iterator();
			while(iterator.hasNext()){
				String key = (String)iterator.next();
				List<LinkedHashMap> infoList = (ArrayList<LinkedHashMap>)context.get(key);
				if(infoList == null) continue;
				if(key.toUpperCase().equals("PYF")||key.toUpperCase().equals("RY")){
					for(LinkedHashMap info : infoList){
						if(info.get("value").toString().length() > 4){
							info.put("value", info.get("value").toString().substring(0, 4));
						}
						//info.value = info.value.toUpperCase();
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
		//return responseString;
	}
	/**
	 * 作品检索结果统计
	 * @param express
	 * @param category 首次发表年 FPY;登记年 RY;创作完成年 FY;作品类别 TYPE;著作权人 OWNER
	 * @return 返回分类统计结果中能够统计出数量的字段。
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/work/statistics")
	public String workstatistics(String express,String category)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		int maxrecords = 5;
		if(Strings.isNullOrEmpty(express)){
			express = "首次发表年>2012";
		}
		if(Strings.isNullOrEmpty(category)){
			category = "FPY;RY;FY;TYPE;OWNER";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
//				   .authorizationLocation(oauthConfig.getResourceUrlcr() + "/copyright/workcategory")
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/copyrightrzp/statistics")
				   .setClientId(HttpController.oauthParams.getClientId())
				   .setScope(HttpController.oauthParams.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("categoryColumn", category)
//				   .setParameter("categorynum", "20")
				   .buildQueryMessage();	
//		// 创建HttpClient实例
//		HttpClient httpclient = new DefaultHttpClient();
//        // 创建Get方法实例     
//        HttpGet httpgets = new HttpGet(oltu_request.getLocationUri());    
//        //
//        HttpResponse response = httpclient.execute(httpgets);
//
//		String responseString = EntityUtils.toString(response.getEntity());
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		ObjectMapper objectMapper = new ObjectMapper();
		// 接统计结果数量控制在最大maxrecord（10）
		// 如果是分类号字段，将小写改成大写
		LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//		
//		{
//			//TODO 使用restzhiliao应用获取的结果转换为开放接口格式 
//			LinkedHashMap result = new LinkedHashMap();
//			Set set = ret.keySet();
//			Iterator iterator = ret.keySet().iterator();
//			LinkedHashMap<String, List<LinkedHashMap>> context = new LinkedHashMap<String, List<LinkedHashMap>>();
//			while(iterator.hasNext()){
//				String key = (String)iterator.next();
//				LinkedHashMap hashmap = (LinkedHashMap )ret.get(key);
//				if(hashmap == null) continue;
//				Iterator iterator2 = hashmap.keySet().iterator();
//				List<LinkedHashMap> infoList = new ArrayList<LinkedHashMap>();
//				while(iterator2.hasNext()){
//					String key2 = (String)iterator2.next();
//					LinkedHashMap newmap = new LinkedHashMap();
//					newmap.put("value", key2);
//					newmap.put("count", hashmap.get(key2));
//					infoList.add(newmap);
//				}
//				context.put(key, infoList);
//
//
//			}
//			result.put("errorCode", "000000");
//			result.put("errorDesc", "");
//			result.put("context", context);
//			ret = result;
//		}
//
		if(ret.get("context") != null ){
			LinkedHashMap context = (LinkedHashMap<String, List<LinkedHashMap>>)ret.get("context");
			Set set = context.keySet();
			Iterator iterator = context.keySet().iterator();
			while(iterator.hasNext()){
				String key = (String)iterator.next();
				List<LinkedHashMap> infoList = (ArrayList<LinkedHashMap>)context.get(key);
				if(infoList == null) continue;
				if(key.toUpperCase().equals("FPY")||key.toUpperCase().equals("RY")||key.toUpperCase().equals("FY")){
					for(LinkedHashMap info : infoList){
						if(info.get("value").toString().length() > 4){
							info.put("value", info.get("value").toString().substring(0, 4));
						}
						//info.value = info.value.toUpperCase();
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
//		return responseString;
	}

}
