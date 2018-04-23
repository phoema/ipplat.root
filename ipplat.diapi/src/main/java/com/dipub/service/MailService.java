
package com.dipub.service;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

import javax.mail.internet.MimeMessage;

import lombok.extern.slf4j.Slf4j;

import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.dipub.domain.WarningHistory;
import com.dipub.domain.WarningManage;
import com.dipub.oauth.OauthConfig;
import com.dipub.util.DIPubException;
import com.dipub.util.DIUtils.DateType;
import com.dipub.web.HttpController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

@Slf4j
@Service
public class  MailService {

	@Autowired
	WarningHistoryRepository warningHistoryRepository;
	@Autowired
	WarningManageRepository warningManageRepository;
	@Autowired
	com.dipub.http.HttpClientService httpClientService;
	@Autowired
	OauthConfig oauthConfig;

	@Autowired 
    JavaMailSender mailSender; //自动注入的Bean
    @Value("${spring.mail.username}")
    private String Sender; //读取配置文件中的参数

    @Value("${spring.mail.warnsubject}")
    private String subject;
    @Value("${spring.mail.warnfooter}")
    private String footer;
    public void sendSimpleMail(String to, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(Sender);
        message.setTo(to);
        message.setSubject(this.subject);
        content += footer;
        message.setText(content);

        try {
            mailSender.send(message);
            log.info("简单邮件已经发送。");
        } catch (Exception e) {
            log.error("发送简单邮件时发生异常！", e);
        }

    }
    public void sendHtmlMail(String to, String content) {
        MimeMessage message = null;
        try {
            message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(Sender);
            helper.setTo(to);
            helper.setSubject(this.subject);
            content += footer;

//            StringBuffer sb = new StringBuffer();
//            sb.append("<h1>大标题-h1</h1>")
//                    .append("<p style='color:#F00'>红色字</p>")
//                    .append("<p style='text-align:right'>右对齐</p>");
            helper.setText(content, true);
        } catch (Exception e) {
            log.error("发送简单邮件时发生异常！", e);
        }
        mailSender.send(message);
    }
    

    // 预警程序执行
	public void warning() throws Exception{
		SimpleDateFormat myFmt=new SimpleDateFormat("yyyyMMddHHmmss");    
		Date maxDate = new Date();
		String max = myFmt.format(maxDate);
		List<WarningManage> list = warningManageRepository.findAll();
		for(int i = 0; i<list.size(); i++){
			WarningManage warning = list.get(i);
			Date minDate = warning.getWarnend();
			if(minDate == null){
				minDate= warning.getCreatetime();
			}
			String min = myFmt.format(minDate);
			// TODO del
			//min = "20180309144645";
			String query = "(" + warning.getQuery() + ") AND TIMESTAMP > " + min +" AND TIMESTAMP<" + max; 
			long val = 0;
			if(DateType.DECISION.name().equals(warning.getType())){
				val = this.getcount("/api/decision/search/expression", query);
			}
			else if(DateType.CSE.name().equals(warning.getType())){
				val = this.getcount("/api/cse/search/expression", query);
			}
			if(val > 0 ){
				// 更新预警信息
				warning.setCount(val);
				warning.setWarnstart(minDate);
				warning.setWarnend(maxDate);
				warning.setUpdatetime(maxDate);
				warningManageRepository.save(warning);
			}
			{
				// 写履历
				WarningHistory history = new WarningHistory();
				history.setWarnid(warning.getId());
				history.setWarnname(warning.getName());
				history.setQuery(warning.getQuery());
				history.setPdb(warning.getPdb());
				history.setUid(warning.getUid());
				history.setEmail(warning.getEmail());
				history.setType(warning.getType());
				warningHistoryRepository.save(history);
			}
			// 发邮件
			if(val > 0 || warning.isSendmail()){
				String strFmt = "您好：<br>您所设置的“%s”预警，%s。";
				String parm1 = warning.getName();
				String parm2 = "";
				if(val > 0) parm2 = "有增量信息，请前往平台查看";
				else parm2 = "无增量信息";
				
				String content = String.format(strFmt, parm1,parm2);
				this.sendHtmlMail(warning.getEmail(), content);

			}

		}

	}
	/***
	 * 获取预警期间的数据量变化
	 * @param url
	 * @param query
	 * @return
	 * @throws Exception
	 */
	private long getcount(String url,String query) throws Exception{
		long val = 0;
		OAuthClientRequest oltu_request = OAuthClientRequest
				   .authorizationLocation(oauthConfig.getResourceUrl() + url)
				   .setClientId(oauthConfig.getClientId())
				   .setScope(oauthConfig.getScope())
				   .setParameter("access_token", HttpController.oauthParams.getAccessToken())
				   .setParameter("express", query)
				   .setParameter("page", "1")
				   .setParameter("sort_column", null)
				   .setParameter("page_row", "1")
				   .buildQueryMessage();	

//		HttpResult result = httpClientService.doPost(oltu_request.getLocationUri());
		String responseString = httpClientService.doGet(oltu_request.getLocationUri());
		{
			// 对返回对象进行定制化操作
			ObjectMapper objectMapper = new ObjectMapper();
			LinkedHashMap ret = objectMapper.readValue(responseString,LinkedHashMap.class);
			if(!"000000".equals(ret.get("errorCode"))){
				throw new DIPubException(responseString);
			}
			if(ret.containsKey("total")&& !Strings.isNullOrEmpty(ret.get("total").toString()))
				val = Long.parseLong(ret.get("total").toString());
			
			return val;
		}
	}  
}
