package com.ipplat.process.solr.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import lombok.extern.slf4j.Slf4j;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.FieldStatsInfo;
import org.apache.solr.client.solrj.response.PivotField;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.util.NamedList;
import org.springframework.beans.factory.annotation.Autowired;
/*
 * Copyright 2012-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import org.springframework.stereotype.Service;

import com.google.common.base.Strings;

@Service
@Slf4j
public class SolrPatentService {

	@Autowired
	private SolrClient solrClient_Agent;
	@Autowired
	private SolrClient solrClient_Agency;

	//最早公开日 最晚公开日 专利数量
	public SolrDocumentList getAgencyList(String filed,String value) throws SolrServerException, IOException{
	
		String query = filed + ":" + value;
		SolrQuery params= new SolrQuery(query);
		params.setFields("rid","title","all_partner","web_site","orgid","orgcode","start_year","manager","address","phone","total_count","total_inno_auth","total_inno","total_client","country","province","city");
		params.setRows(3000);
		
		//params.addStatsFieldFacets("claim_count", "ptype");
		QueryResponse response = solrClient_Agency.query(params);
		
		SolrDocumentList list = response.getResults();
		

		return list;
	}
	//最早公开日 最晚公开日 专利数量
	public SolrDocumentList getAgentListByAgency(String agencyid) throws SolrServerException, IOException{
	
		String query = "agencyid:" + agencyid;
		SolrQuery params= new SolrQuery(query);
		params.setFields("rid","name","org","certid","occuid","occu_year","subject","country","province","city","sex","total_count");
		params.setRows(1000);
		
		//params.addStatsFieldFacets("claim_count", "ptype");
		QueryResponse response = solrClient_Agent.query(params);
		
		SolrDocumentList list = response.getResults();
		
		return list;
	}
	
		
	/*********字段统计 end***********/
}