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

@RestController
@Slf4j
@RequestMapping(value="/api/patent",method={RequestMethod.POST,RequestMethod.GET})
public class PatentController extends CommonController{
	
	private static String url_expression = "/api/patent/search/expression";
//	private final String Other_DB = "AM00,AP00,AR00,AT00,AUA0,AUB0,AUOT,AUS0,BA00,BE00,BG00,BR00,BY00,CAA0,CAB0,CAOT,CH0T,CHA0,CHB0,CHOT,CL00,CO00,CR00,CS00,CU00,CY00,CZ00,DDA0,DDB0,DDY0,DEA0,DEB0,DES0,DEY0,DK00,DO00,DZ00,EA00,EC00,EE00,EG00,EPA0,EPB0,ES00,FI00,FRA0,FRB0,FROT,FRY0,GBA0,GBB0,GBOT,GC00,GE00,GR00,GT00,HKA0,HKB0,HKS0,HN00,HR00,HU00,ID00,IE00,IL00,IN00,IS00,IT00,JO00,JPA0,JPB0,JPOT,JPS0,JPU0,JPY0,KE00,KG00,KRA0,KRB0,KRS0,KRU0,KRY0,KZ00,LT00,LU00,LV00,MA00,MC00,MD00,ME00,MN00,MOA0,MOB0,MOD0,MOS0,MOU0,MOY0,MT00,MW00,MX00,MY00,NI00,NL00,NO00,NZ00,OA00,PA00,PE00,PH00,PL00,PT00,RO00,RS00,RUA0,RUB0,RUS0,RUY0,SE00,SG00,SI00,SK00,SM00,SV00,TH00,TJ00,TN00,TR00,TT00,TWA0,TWB0,TWOT,TWS0,TWY0,UA00,USA0,USB0,USS0,UY00,UZ00,VN00,WOA0,YU00,ZA00,ZM00,ZW00";
	//private final String Other_DB = "";

	@Autowired
	private OauthConfig oauthConfig;
	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	
	@Autowired
	CopyrightController copyrightController;
	@Autowired
	TradeMarkController tradeMarkController;

//	@Autowired
//	private CloseableHttpClient httpclient;

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
	public String expression(String express,String pdb,String page,String page_row,String sort_column,Boolean union_search)  throws Exception{
		
		String editexpress = express;
		if(Strings.isNullOrEmpty(editexpress))
		{
			// TODO exception
			editexpress = "";
		}
		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0," + DIUtils.OTHER_DB;
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
		pdb = pdb.replace("DBOTHER", DIUtils.OTHER_DB);
		if(Strings.isNullOrEmpty(editexpress)){
			editexpress =" PDB=(" +pdb + ")";
		}else{
			editexpress = "(" + editexpress + ") AND PDB=(" +pdb + ")";
		}
		if(!DIUtils.isNumeric(page)){
			throw new DIPubException("页码不是数字");
		}
		if(Integer.parseInt(page) > 30){
			throw new DIPubException("最大只能浏览前30页数据");
		}

		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/search/expression")
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
			
			if(union_search != null && union_search){
				if(Strings.isNullOrEmpty(express)){
					// TODO throw excepiton
					express = "AN,AD,PN,PD,APO,INO,TIO,ABSO+=计算机";
				}
				//express AN,AD,PN,PD,APO,INO,TIO,ABSO+=计算机
				int index = express.indexOf("+=");
				if(index < 0) throw new DIPubException("检索式不符合联合检索规则");
				String keyword = express.substring(index);
				//2）、商标参与检索项目：注册号,注册日期,申请号,申请日期,商标名称,申请人；
				// RN,RD,SN,FD,MN,HN
				String trade_express = "RN,RD,SN,FD,MN,HN" + keyword;
				//软件著作权参与检索项目：登记号,分类号,首次发表日期,登记日期,著作权人国籍,软件全称,软件简称；
				String soft_express = "RN,CTN,PDF,RD,SWP,SWFN,SWSN" + keyword;
				//作品版权参与检索项目：登记号,登记日期,作品名称,著作权人,作者,发布日期,首次发表日期,创作完成日期。
				String work_express = "RN,RD,ANM,OWNER,AUTHOR,PD,FPD,FD" + keyword;
				String softretstr = copyrightController.expression(soft_express, "1", "0", null);
				String workretstr = copyrightController.workexpression(work_express, "1", "0", null);
				String traderetstr = tradeMarkController.expression(trade_express, null, "1", "0", null);
				LinkedHashMap softret = objectMapper.readValue(softretstr,LinkedHashMap.class);
				LinkedHashMap workret = objectMapper.readValue(workretstr,LinkedHashMap.class);
				LinkedHashMap traderet = objectMapper.readValue(traderetstr,LinkedHashMap.class);
				
				ret.put("soft_total", softret.get("total"));
				ret.put("work_total", workret.get("total"));
				ret.put("trade_total", traderet.get("total"));
				
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
			express = "PD=2011 AND TIO=计算机 AND PDB=CNA0";
		}
		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0," + DIUtils.OTHER_DB;
		}
		pdb = pdb.replace("DBOTHER", DIUtils.OTHER_DB);
		express = "(" + express + ") AND PDB=(" +pdb + ")";
		if(Strings.isNullOrEmpty(category)){
			category = "LSSCN;PDB;IPCSC;AY;APO;INO";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/statistics")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("categoryColumn", category)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());
		
		responseString = convert_statistics(responseString , lengthmap);
//		ObjectMapper objectMapper = new ObjectMapper();
//		// 接统计结果数量控制在最大maxrecord（10）
//		// 如果是分类号字段，将小写改成大写
//		LinkedHashMap ret = null;
//		try{
//			ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//		}catch(Exception ex){
//			return responseString;
//		}
//		if(!"000000".equals(ret.get("errorCode"))){
//			return responseString;
//		}
//		if(ret.get("context") != null ){
//			LinkedHashMap context = (LinkedHashMap<String, List<LinkedHashMap>>)ret.get("context");
//			Set set = context.keySet();
//			Iterator iterator = context.keySet().iterator();
//			while(iterator.hasNext()){
//				String key = (String)iterator.next();
//				List<LinkedHashMap> infoList = (ArrayList<LinkedHashMap>)context.get(key);
//				if(key.equals("ipcc") || key.equals("ipcsc") ){
//					for(LinkedHashMap info : infoList){
//						info.put("value", info.get("value").toString().toUpperCase());
//						//info.value = info.value.toUpperCase();
//					}
//				}
//				if(key.equals("ay")){
//					for(LinkedHashMap info : infoList){
//						if(info.get("value").toString().length() > 4){
//							info.put("value", info.get("value").toString().substring(0, 4));
//						}
//						//info.value = info.value.toUpperCase();
//					}
//					infoList.sort(comparator);
//				}
//				if(infoList.size()>maxrecords){
//					infoList = infoList.subList(0, maxrecords);
//				}
//
//				context.put(key, infoList);
//			}
//			
//		}
//		
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
					if(key.equals("ipcc") || key.equals("ipcsc") ){
						for(LinkedHashMap info : infoList){
							info.put("value", info.get("value").toString().toUpperCase());
							//info.value = info.value.toUpperCase();
						}
					}
					if(key.equals("ay")){
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
	@RequestMapping("/detail/catalog")
	public String detail(String pid,String pno)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(pid)){
			pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		}
		if(Strings.isNullOrEmpty(pno)){
			pno = "CN102236702A";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/detail/catalog")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("pid", pid)
				   .setParameter("pno", pno)
				   .setParameter("lang", "o")
				   
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
				// 去除冗余字段
				patent.remove("fimalyObjList");
				patent.remove("feePaymentInformations");
				patent.remove("cits");
				//patent.remove("imgArray");
				
				LinkedHashMap catalogPatent = (LinkedHashMap)patent.get("catalogPatent");
				//分案原申请
				catalogPatent.put("dppa", catalogPatent.get("dppano") + " " + catalogPatent.get("dppad") );
				//国际申请
				catalogPatent.put("pcta", catalogPatent.get("pctao") + " " + catalogPatent.get("pctad") );
				//国际公布
				catalogPatent.put("pctp", catalogPatent.get("pctpo") + " " + catalogPatent.get("pctpd") );
				
			}
			responseString = objectMapper.writeValueAsString(ret);
		}catch(Exception e){
			log.error(e.getMessage());
		}
		return responseString;
	}

	/**
	 * 专利法律状态信息
	 * @param pid 专利数据主键id
	 * @return 返回专利的法律状态信息
	 * ilsad:公告日 ilssc:法律状态 ilsic:法律状态信息
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/detail/law")
	public String law(String pid) throws OAuthSystemException, ClientProtocolException, IOException{
		if(Strings.isNullOrEmpty(pid)){
			pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/detail/law")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("pid", pid)
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		responseString = convert_law(responseString);
		return responseString;
		
	}
	/**
	 * 转换专利法律状态格式
	 * @param responseString
	 * @return
	 */
	private String convert_law(String responseString){
		try{
			// 对返回对象进行定制化操作
			ObjectMapper objectMapper = new ObjectMapper();
			LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
			if(ret.get("context")!= null && !"".equals(ret.get("context").toString()) && ((LinkedHashMap)ret.get("context")).get("records") != null){
				List<List<LinkedHashMap>> records = (List<List<LinkedHashMap>>)((LinkedHashMap)ret.get("context")).get("records");
				for(LinkedHashMap map : records.get(0)){
					Object ilsse = map.get("ilsse");
					Object ilssc = map.get("ilssc");
					Object ilsie = map.get("ilsie");
					Object ilsic = map.get("ilsic");
					if(ilsse != null && ilssc == null){
						map.put("ilssc", ilsse);
					}
					if(ilsie != null && ilsic == null){
						map.put("ilsic", ilsie);
					}
					
				}
				
			}
			responseString = objectMapper.writeValueAsString(ret);
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		return responseString;
		
	}
	/**
	 * 专利PDF
	 * 通过该接口可为用户提供专利的PDF下载，为离线浏览做出便利的接口。
	 * @param pid
	 * @param pns
	 * @return 返回一个PDF文件的URL
	 * @throws Exception 
	 */
	@RequestMapping("/download")
	public String download(String pid,String pns)  throws Exception{
		
		if(Strings.isNullOrEmpty(pid)){
			pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
			throw new DIPubException("缺失关键参数pid");
		}
		if(Strings.isNullOrEmpty(pns)){
			pns = "CN102236702A";
			throw new DIPubException("缺失关键参数pns");
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/download")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("pid", pid)
				   .setParameter("pns", pns)
				   
				   .buildQueryMessage();	
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		return responseString;
	}
	/**
	 * api/patent/related
	 * 专利相关数据
	 * 当用户使用PID相关能够精确检索处一条专利数据时，
	 * 系统将推送出该专利的相关数据，包括专利、商标、期刊、标准、复审无效、裁判文书、法律法规。将相关类型的相关内容提供出来。
	 * @param pid
	 * @return 返回专利相关数据的结果
	 * @throws OAuthSystemException
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/related")
	public String related(String pid)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		if(Strings.isNullOrEmpty(pid)){
			pid = "PIDCNA020111109000000001022360FCB17UJTR016E63";
		}
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + "/api/patent/related")
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("pid", pid)
				   
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
//					records.get(0).remove("std");//标准
//					records.get(0).remove("dec");//判例
					
				}

			}
			responseString = objectMapper.writeValueAsString(ret);
		}

		return responseString;
	}

	@RequestMapping("/引证检索/expression")
	public String todo(String express,String pdb,String page,String page_row,String sort_column)  throws Exception{
		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0";
		}
		return this.expression(express, pdb, page, page_row, sort_column, false);
	}
	@RequestMapping("/lawsearch/expression")
	public String lawsearch(String express,String pdb,String page,String page_row,String sort_column)  throws Exception{
		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0";
		}
		return this.expression(express, pdb, page, page_row, sort_column, false);
	}
	@RequestMapping("/tranfersearch/expression")
	public String tranfersearch(String express,String pdb,String page,String page_row,String sort_column)  throws Exception{
		return this.expression(express, pdb, page, page_row, sort_column, false);
	}
}
