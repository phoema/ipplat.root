package com.dipub.web.api;

//import org.apache.shiro.authz.annotation.RequiresPermissions;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

import lombok.extern.slf4j.Slf4j;

import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.domain.SysUser;
import com.dipub.domain.WarningHistory;
import com.dipub.domain.WarningManage;
import com.dipub.oauth.OauthConfig;
import com.dipub.service.MailService;
import com.dipub.service.WarningHistoryRepository;
import com.dipub.service.WarningManageRepository;
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils.DateType;
import com.dipub.web.CommonController;
import com.dipub.web.HttpController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

@RestController
@Slf4j
@RequestMapping(value="/api/warning",method={RequestMethod.POST,RequestMethod.GET})
public class WarningController extends CommonController{
	

	@Autowired
	WarningHistoryRepository warningHistoryRepository;
	@Autowired
	WarningManageRepository warningManageRepository;
	@Autowired
	MailService mailService;

	/**.
	 * 预警消息列表
	 * @throws Exception 
	 */
	@RequestMapping("/list")
	public Page<WarningHistory> list(DateType type)  throws Exception{
		
		SysUser curuser = this.GetCurUser();
		Pageable pageable = new PageRequest(0,10);

		Page<WarningHistory> result = warningHistoryRepository.findByUidAndTypeOrderByCreatetimeDesc(curuser.getUid(), type.name(), pageable);
		return result;

	}
	/**.
	 * 预警消息保存
	 * @throws Exception 
	 */
	@RequestMapping("/save")
	public WarningManage save(WarningManage warning)  throws Exception{
		SysUser curuser = this.GetCurUser();
		Long count = warningManageRepository.countByUidAndType(curuser.getUid(), warning.getType());
		if(count >= 10){
			throw new DIPubException("预警信息不能超过10条");
		}
		warning.setUid(curuser.getUid());
		warning = warningManageRepository.save(warning);
		return warning;

	}
	/**.
	 * 预警消息删除
	 * @throws Exception 
	 */
	@RequestMapping("/delete")
	public void delete(Long id)  throws Exception{
		warningManageRepository.delete(id);
//		WarningManage warning = warningManageRepository.findOne(id);
//		SysUser curuser = this.GetCurUser();
//		if(warning != null && warning.getUid() == curuser.getUid()){
//			warningManageRepository.delete(id);
//		}
	}


	/***
	 * 定时预警
	 * @throws Exception 
	 */
	@RequestMapping("/test_start")
	public void warningstart() throws Exception {
		mailService.warning();

	}     

}
