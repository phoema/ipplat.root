package com.dipub.util;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

import net.bytebuddy.asm.Advice.This;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.stereotype.Component;

import com.dipub.web.api.CopyrightController;
import com.dipub.web.api.CseController;
import com.dipub.web.api.DecisionController;
import com.dipub.web.api.LawController;
import com.dipub.web.api.PatentController;
import com.dipub.web.api.StandardController;
import com.dipub.web.api.TradeMarkController;
import com.fasterxml.jackson.databind.ObjectMapper;



 
/**
 * 申请人区域代码
 * @author jiahh 2016年8月23日
 *
 */
@Component
@CacheConfig(cacheNames = "datainfo")
public class DataInfoCache{
	@Autowired
	PatentController patentController;
	@Autowired
	TradeMarkController tradeMarkController;
	@Autowired
	CopyrightController copyrightController;
	@Autowired
	StandardController standardController;
	@Autowired
	CseController cseController;
	@Autowired
	DecisionController decisionController;
	@Autowired
	LawController lawController;
	
	
    public HashMap weeklyRemind() throws Exception {
    	DataInfo pat_fmzl = this.pat_datainfo("CNA0");
    	DataInfo pat_fmsq = this.pat_datainfo("CNB0");
    	DataInfo pat_syxx = this.pat_datainfo("CNY0");
    	DataInfo pat_wgzl = this.pat_datainfo("CNS0");

    	HashMap hashmap = new HashMap();
    	hashmap.put("pat_fmzl", pat_fmzl);
    	hashmap.put("pat_fmsq", pat_fmsq);
    	hashmap.put("pat_syxx", pat_syxx);
    	hashmap.put("pat_wgzl", pat_wgzl);
    	hashmap.put("tra_cn", this.tra_datainfo("CN"));
    	hashmap.put("cr_work", this.work_datainfo());
    	hashmap.put("cr_soft", this.soft_datainfo())
    	;
    	hashmap.put("cse", this.cse_datainfo());
    	hashmap.put("decision", this.decision_datainfo());
    	hashmap.put("law", this.law_datainfo());
    	hashmap.put("standard", this.standard_datainfo());
  	
    	String[] dbs = DIUtils.OTHER_DB_DATA.split(",");
    	for( int i = 0; i< dbs.length; i++){
    		String db = dbs[i];
    		hashmap.put(db.replace("%", "").replace("00", ""), this.pat_datainfo(db));
    	}
    	
//    	{
//    		// 前俄罗斯特殊处理
//    		/**
//    		 * 赵鹏(7585659)  14:26:57
//				@长软-孙颖 
//				现在前苏联的数据SU开头的，在数据范围中有前苏联，在检索结果的筛选统计中，都归到俄罗斯库中了，这是如何处理的啊？
//				长软-孙颖(156645188)  14:32:36
//				筛选是用的PDB字段，数据加工是将前苏联和俄罗斯的数据的PDB都加工为RU了
//				赵鹏(7585659)  14:33:06
//				数据范围那儿是怎么统计的啊？
//				长软-孙颖(156645188)  14:33:05
//				我记得当时是有讨论过，特意要求数据这么加工的
//				数据范围是按pid统计的
//				pid里自带国别
//				这个数据我找数据组确认一下。
//    		 */
//	    	DataInfo pat_data = new DataInfo();
//	    	pat_data.setId("pat_su");
//	    	String responseString = patentController.expression("PID=PIDSU%", "RU%", "1", "1", "-PD", false);
//			// 对返回对象进行定制化操作
//			ObjectMapper objectMapper = new ObjectMapper();
//			LinkedHashMap ret = null;
//			ret = objectMapper.readValue(responseString,LinkedHashMap.class);
//			pat_data.setCount(Integer.parseInt(ret.get("total").toString()));
//			List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
//			pat_data.setPd_end(records.get(0).get("pd").toString().substring(0,10).replace("/", "."));
//			hashmap.put("SU", pat_data);
//    	}
    	System.out.println();
    	return hashmap;
    	
    }
    private DataInfo pat_datainfo(String pdb) throws Exception{
    	DataInfo pat_data = new DataInfo();
    	pat_data.setId("pat_" + pdb.toLowerCase());
    	String responseString = patentController.expression(null, pdb, "1", "1", "-PD", false);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		pat_data.setCount(Integer.parseInt(ret.get("total").toString()));
		List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
		pat_data.setPd_end(records.get(0).get("pd").toString().substring(0,10).replace("/", "."));
		
		return pat_data;

    }
    private DataInfo tra_datainfo(String pdb) throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("tra_" + pdb.toLowerCase());
    	// 注册日 RD 申请日FD
    	String responseString = tradeMarkController.expression(null, pdb, "1", "1", "-RD");
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		List<LinkedHashMap> records = (List<LinkedHashMap>)((LinkedHashMap)ret.get("context")).get("records");
		datainfo.setPd_end(records.get(0).get("rd").toString().substring(0,10).replace("/", "."));
		
		return datainfo;

    }
    private DataInfo soft_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("cr_soft");
   	// 注册日 RD 申请日FD
    	String responseString = copyrightController.expression(null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }
    private DataInfo work_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("cr_work");
   	// 注册日 RD 申请日FD
    	String responseString = copyrightController.workexpression(null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }
    private DataInfo standard_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("standard");
   	// 注册日 RD 申请日FD
    	String responseString = standardController.expression(null,null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }
    private DataInfo cse_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("cse");
   	// 注册日 RD 申请日FD
    	String responseString = cseController.expression(null,null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }
    private DataInfo decision_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("decision");
   	// 注册日 RD 申请日FD
    	String responseString = decisionController.expression(null,null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }
    private DataInfo law_datainfo() throws Exception{
    	DataInfo datainfo = new DataInfo();
    	datainfo.setId("law");
   	// 注册日 RD 申请日FD
    	String responseString = lawController.expression(null,null, "1", "1", null);
		// 对返回对象进行定制化操作
		ObjectMapper objectMapper = new ObjectMapper();
		LinkedHashMap ret = null;
		ret = objectMapper.readValue(responseString,LinkedHashMap.class);
		datainfo.setCount(Integer.parseInt(ret.get("total").toString()));
		
		return datainfo;

    }


}