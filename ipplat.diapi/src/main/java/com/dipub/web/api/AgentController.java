package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.io.IOException;
import java.util.List;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.client.ClientProtocolException;
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
import com.dipub.domain.Agent;
import com.dipub.oauth.OauthConfig;
import com.dipub.service.AgencyRepository;
import com.dipub.service.AgentRepository;
import com.dipub.util.ResultInfo;
import com.dipub.web.CommonController;

@RestController
@Slf4j
@RequestMapping(value="/api/agent",method={RequestMethod.POST,RequestMethod.GET})
public class AgentController extends CommonController{
	@Autowired
	private OauthConfig oauthConfig;
	// 创建HttpClient实例
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
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
	public ResultInfo<List<Agent>> list2(String column,String value, int page,int pagesize)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		Pageable pageable = new PageRequest(page,pagesize,Direction.DESC,"total_count");// page start 0
		List<Agent>  list = null;
		Page<Agent> pageinfo = null;
		int count = 0;
		if(value == null){
			pageinfo = agentRepository.findAll(pageable);
		}
		else if("name".equals(column)){
			pageinfo = agentRepository.findByNameContainingIgnoreCase(value, pageable);
		}else if("orgname".equals(column)){
			pageinfo = agentRepository.findByOrgnameContainingIgnoreCase(value, pageable);
		}
		list = pageinfo.getContent();
		count = pageinfo.getTotalPages();

		ResultInfo<List<Agent>> result = new ResultInfo<List<Agent>>();
		result.ReturnValue = 1;
		result.context = list;
		result.total = count;
		return result;
	}
	@RequestMapping("/list")
	public Page<Agent> list(String column,String value, int page,int pagesize)  throws OAuthSystemException, ClientProtocolException, IOException{
		
		Pageable pageable = new PageRequest(page,pagesize,Direction.DESC,"totalCount");// page start 0
		List<Agent>  list = null;
		Page<Agent> pageinfo = null;
		int count = 0;
		if(value == null){
			pageinfo = agentRepository.findAll(pageable);
		}
		else if("name".equals(column)){
			pageinfo = agentRepository.findByNameContainingIgnoreCase(value, pageable);
		}else if("orgname".equals(column)){
			pageinfo = agentRepository.findByOrgnameContainingIgnoreCase(value, pageable);
		}
		return pageinfo;
	}

}
