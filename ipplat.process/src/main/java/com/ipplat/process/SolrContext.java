package com.ipplat.process;

import javax.annotation.Resource;

import lombok.Data;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.solr.repository.config.EnableSolrRepositories;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "spring.data.solr")  
@Configuration
@EnableSolrRepositories(basePackages={"com.ipplat.process.solr"}, multicoreSupport=true)
@Data
public class SolrContext {

	static final String SOLR_HOST = "spring.data.solr.host";
	public String solr;
	public String host;
	@Resource private Environment environment;
	
	@Bean
	public SolrClient solrServer() {
		//return new HttpSolrClient.Builder(host + "").build();
		return new HttpSolrClient(host);
	}
	@Bean
	public SolrClient solrClient() {
		host = environment.getProperty(SOLR_HOST);
		System.out.println(host);
		//return new HttpSolrClient.Builder(host + "").build();
		return new HttpSolrClient(host);
	}
	@Bean
	public SolrClient solrClient_Agent() {
		System.out.println(host);
		return new HttpSolrClient(host + "/agent2");
		//return new HttpSolrClient(host + "/patent0.12");
	}
	@Bean
	public SolrClient solrClient_Agency() {
		System.out.println(host);
		String mapper  = environment.getProperty("spring.http.converters.preferred-json-mapper");
		return new HttpSolrClient(host + "/agency2");
	}
	@Bean
	public SolrClient test() {
		String mapper  = environment.getProperty("spring.http.converters.preferred-json-mapper");

		return new HttpSolrClient(host + "/agency2");
	}
	

}