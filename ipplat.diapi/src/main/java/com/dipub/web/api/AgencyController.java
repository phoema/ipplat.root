package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.io.IOException;
import java.util.List;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.client.ClientProtocolException;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.domain.Agency;
import com.dipub.oauth.OauthConfig;
import com.dipub.service.AgencyRepository;
import com.dipub.service.AgentRepository;
import com.dipub.util.ResultInfo;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.google.common.base.Strings;

@RestController
@Slf4j
@RequestMapping(value="/api/agency",method={RequestMethod.POST,RequestMethod.GET})
public class AgencyController extends CommonController{
	

	@Autowired
	private OauthConfig oauthConfig;
	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	// 创建HttpClient实例
	@Autowired
	AgencyRepository agencyRepository;
	// 创建HttpClient实例
	@Autowired
	AgentRepository agentRepository;

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
	@RequestMapping("/list2")
	public ResultInfo<List<Agency>> list2(String title,int page,int pagesize)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		Pageable pageable = new PageRequest(page,pagesize,Direction.DESC,"total_count");// page start 0
		List<Agency>  agencyList = null;
		Page<Agency> pageinfo = null;
		int count = 0;
		if(title == null){
			pageinfo = agencyRepository.findAll(pageable);
		}else{
			pageinfo = agencyRepository.findByTitleContainingIgnoreCase(title,pageable);
			
		}
		agencyList = pageinfo.getContent();
		count = pageinfo.getSize();

		ResultInfo<List<Agency>> result = new ResultInfo<List<Agency>>();
		result.ReturnValue = 1;
		result.context = agencyList;
		result.total = count;
		return result;
	}
	@RequestMapping("/list")
	public Page<Agency> list(String title,int page,int pagesize)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		Pageable pageable = new PageRequest(page,pagesize,Direction.DESC,"totalCount");// page start 0
		List<Agency>  agencyList = null;
		Page<Agency> pageinfo = null;
		int count = 0;
		if(title == null){
			pageinfo = agencyRepository.findAll(pageable);
		}else{
			pageinfo = agencyRepository.findByTitleContainingIgnoreCase(title,pageable);
			
		}
		return pageinfo;
	}


}
