package com.ipplat.process.solr.service;

import java.util.ArrayList;
import java.util.HashSet;

import junit.framework.Assert;
import lombok.extern.slf4j.Slf4j;

import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ipplat.process.domain.Agency;
import com.ipplat.process.domain.Agent;
import com.ipplat.process.service.AgencyRepository;
import com.ipplat.process.service.AgentRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@Slf4j

public class SolrPatentServiceTest {
	@Autowired
	private SolrPatentService solrPatentService;
	@Autowired
	private AgencyRepository agencyRepository;
	@Autowired
	private AgentRepository agentRepository;
	
	public SolrPatentServiceTest(){

	}
	/**
	 * 公开年度申请量
	 * @throws Exception
	 */
	@Test
	public void excute() throws Exception {
//		SolrDocumentList agencylist = solrPatentService.getAgencyList("city","北京");
//		SolrDocumentList agencylist = solrPatentService.getAgencyList("province","四川");
		SolrDocumentList agencylist = solrPatentService.getAgencyList("*","*");
		agencyRepository.deleteAll();
		agentRepository.deleteAll();
		for(int i=0; i<agencylist.getNumFound();i++){
			
			//			for(int i=0; i<1;i++){
			Agency agency = new Agency();
			SolrDocument doc = agencylist.get(i);
			System.out.println(doc.getFirstValue("title"));
//		params.setFields("rid","title","all_partner","web_site","orgid","orgcode","start_year","manager","address","phone");
			
			agency.setRid(DataConvert(doc.get("rid")));
			agency.setTitle(DataConvert(doc.getFirstValue("title")));
			agency.setWeb_site(DataConvert(doc.get("web_site")));
			agency.setOrgid(DataConvert(doc.get("orgid")));
			agency.setOrgcode(DataConvert(doc.get("orgcode")));
			agency.setStart_year(doc.get("start_year") == null ? 0 : Integer.parseInt(doc.get("start_year").toString()));
			agency.setManager(DataConvert(doc.get("manager")));
			agency.setAddress(DataConvert(doc.get("address")));
			agency.setCountry(DataConvert(doc.get("country")));
			agency.setProvince(DataConvert(doc.get("province")));
			agency.setCity(DataConvert(doc.get("city")));
			agency.setPhone(DataConvert(doc.get("phone")));
			agency.setTotalCount(doc.get("total_count") == null ? 0 : Integer.parseInt(doc.get("total_count").toString()));
			agency.setTotalclient(doc.get("total_client") == null ? 0 : Integer.parseInt(doc.get("total_client").toString()));
			agency.setTotalinno(doc.get("total_inno") == null ? 0 : Integer.parseInt(doc.get("total_inno").toString()));
			agency.setTotalinnoauth(doc.get("total_inno_auth") == null ? 0 : Integer.parseInt(doc.get("total_inno_auth").toString()));
			Object obj = doc.getFieldValue("all_partner");
			HashSet<String> all_partner = new HashSet<String>();
			if(obj != null) {
				ArrayList a = (ArrayList)obj;
				
				String[] array = (((ArrayList)obj).get(0).toString().split(";;"));
				for(String name : array){
				  
				  all_partner.add(name.split("=")[0]);
			  }
			}
			agencyRepository.save(agency);
			
			SolrDocumentList agentlist = solrPatentService.getAgentListByAgency(agency.getRid());
			for(int j=0; j<agentlist.getNumFound();j++){
				Agent agent = new Agent();
				//params.setFields("rid","name","org","certid","occuid","subject","country","province","city");
				SolrDocument agentdoc = agentlist.get(j);
				agent.setRid(DataConvert(agentdoc.get("rid")));
				agent.setName(DataConvert(agentdoc.getFirstValue("name")));
				agent.setCertid(DataConvert(agentdoc.get("certid")));
				agent.setOccuyear(DataConvert(agentdoc.get("occu_year")));
				agent.setCountry(DataConvert(agentdoc.get("country")));
				agent.setProvince(DataConvert(agentdoc.get("province")));
				agent.setCity(DataConvert(agentdoc.get("city")));
				agent.setOccuid(DataConvert(agentdoc.get("occuid")));
				agent.setSubject(DataConvert(agentdoc.getFirstValue("subject")));
				agent.setOrgname(DataConvert(agentdoc.get("org")));
				agent.setOrgid(agency.getOrgid());
				agent.setOrgcode(agency.getOrgcode());
				agent.setIsmanage(agent.getName().equals(agency.getManager()));
				agent.setIspartner(all_partner.contains(agent.getName()));
				agent.setAgencyid(agency.getRid());
				if(agentdoc.get("sex") == null){
					String sex = DataConvert(agentdoc.get("sex"));
				}
				agent.setSex(Integer.parseInt(agentdoc.get("sex").toString()));
				agent.setTotalCount(agentdoc.get("total_count") == null ? 0 : Integer.parseInt(agentdoc.get("total_count").toString()));
				agentRepository.save(agent);
				
			}
			System.out.println(doc.getFirstValue("title"));
		}


		long count = agencyRepository.count();
		Assert.assertTrue(true);
	}

	private String DataConvert(Object obj){
		String ret = null;
		if(obj != null){
			ret = String.valueOf(obj);
		}
		return ret;
	}
	
		
}

