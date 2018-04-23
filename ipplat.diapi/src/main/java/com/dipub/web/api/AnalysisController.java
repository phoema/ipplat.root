package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import lombok.extern.slf4j.Slf4j;

import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.oauth.OauthConfig;
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.google.common.base.Strings;

@RestController
@Slf4j
@RequestMapping(value="/api/show/analysis",method={RequestMethod.POST,RequestMethod.GET})
public class AnalysisController extends CommonController{
	
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
	 * /api/show/analysis/patent/customization
	 * 专利分析
	 * @param express 表达式
	 * @param pdb 专利库
	 * @param filter1  分析维度1
	 * @param filter2 分析维度2
	 * @param filter3 分析维度3
	 * ;ay	申请年;epry	最早优先权年;py	公开年;apo	申请人;ap1of	第一申请人;ap1cl	申请人类型;ino	发明人;
	 * ino1f	第一发明人;aso	专利权人;aspo	当前专利权人;as1o	第一专利权人;ascl	专利权人类型;cro	代理机构;
	 * agc	代理人;exo	主审员;ftko	全文关键词;clkwo	权利要求关键词;ipcs	IPC部;ipcc	IPC大类;ipcsc	IPC小类;
	 * ipcg	IPC大组;ipcsg	IPC小组;cpcs	CPC部;cpcc	CPC大类;cpcsc	CPC小类;cpcg	CPC大组;cpcsg	CPC小组;
	 * lc	洛迦诺分类;ac	受理国;ap1c	来源国;apppc	中国各省;eprc	最早优先权国;pdb	文献类型;law	法律文书;pdo	专利运营情况;
	 * pct	PCT标记;lssc	法律状态;lsbc	中国法律状态(二级);
	 * @return 根据表达式检索到的专利进行分析
	 * @throws Exception 
	 */
	@RequestMapping("/patent/customization")
	public String patent(String express,String pdb,String name,String filter1,String filter2,String filter3)  throws Exception{
		
		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0," + DIUtils.OTHER_DB;
		}
		pdb = pdb.replace("DBOTHER", DIUtils.OTHER_DB);
		if(Strings.isNullOrEmpty(express) && Strings.isNullOrEmpty(pdb)){
			throw new DIPubException("无表达式");
		}
		else if(!Strings.isNullOrEmpty(express) && Strings.isNullOrEmpty(pdb)){
			;
		}
		else if(Strings.isNullOrEmpty(express) && !Strings.isNullOrEmpty(pdb)){
			express = "PDB=(" +pdb + ")";
		}
		else{
			express = "(" + express + ") AND PDB=(" +pdb + ")";
		}

		if(Strings.isNullOrEmpty(pdb)){
			pdb = "CNA0,CNY0,CNS0,CNB0," + DIUtils.OTHER_DB;
		}
		String apiurl="api/show/analysis/customization";

		return this.analysis(apiurl, express, name, filter1, filter2, filter3);

	}
	/**.
	 * /api/show/analysis/trademark/customization
	 * 商标分析
	 * @param express 表达式
	 * @param tmdb 商标库库
	 * @param filter1  分析维度1
	 * @param filter2 分析维度2
	 * @param filter3 分析维度3
	 * ;fy	申请年;ry	注册年;srey	专用权期限截止年;nc	尼斯分类;mk	商标类型;msc	指定颜色;wkm	驰名商标;hno	申请人名称;aro	代理人名称;cs	当前权利状态;cnr	中国省区;apa	来源国;
	 * @return 根据表达式检索到的数据进行分析
	 * @throws Exception 
	 */
	@RequestMapping("/trademark/customization")
	public String trademark(String express,String tmdb,String name,String filter1,String filter2,String filter3)  throws Exception{
		
		if(Strings.isNullOrEmpty(express) && Strings.isNullOrEmpty(tmdb)){
			throw new DIPubException("无表达式");
		}
		else if(!Strings.isNullOrEmpty(express) && Strings.isNullOrEmpty(tmdb)){
			;
		}
		else if(Strings.isNullOrEmpty(express) && !Strings.isNullOrEmpty(tmdb)){
			express = "TMDB=(" +tmdb + ")";
		}
		else{
			express = "(" + express + ") AND TMDB=(" +tmdb + ")";
		}
		String apiurl="api/show/analysis/trademark/customization";

		return this.analysis(apiurl, express, name, filter1, filter2, filter3);
	}
	
	private String analysis(String apiurl,String express,String name,String filter1,String filter2,String filter3) throws Exception{
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + apiurl)
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", express)
				   .setParameter("filter1", filter1)
				   .setParameter("filter2", filter2)
				   .setParameter("filter3", filter3)
				   
				   .buildQueryMessage();	

//		HttpResult result = httpClientService.doPost(oltu_request.getLocationUri());
//		String responseString = httpClientService.doGet(oltu_request.getLocationUri());

		return oltu_request.getLocationUri();
	}

}
