package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.domain.SearchHistory;
import com.dipub.domain.SysUser;
import com.dipub.service.SearchHistoryRepository;
import com.dipub.util.DIUtils.DateType;
import com.dipub.web.CommonController;

@RestController
@Slf4j
@RequestMapping(value="/api/searchhistory",method={RequestMethod.POST,RequestMethod.GET})
public class SearchHistoryController extends CommonController{
	

	@Autowired
	SearchHistoryRepository searchHistoryRepository;

	/**.
	 * 预警消息列表
	 * @throws Exception 
	 */
	@RequestMapping("/list")
	public Page<SearchHistory> list(DateType type)  throws Exception{
		
		SysUser curuser = this.GetCurUser();
		Pageable pageable = new PageRequest(0,100);

		Page<SearchHistory> result = searchHistoryRepository.findByUidAndTypeOrderByCreatetimeDesc(curuser.getUid(), type.name(), pageable);
		return result;

	}

}
