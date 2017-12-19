
package com.ipplat.process.service;


import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.ipplat.process.domain.Agent;

public interface AgentRepository extends PagingAndSortingRepository<Agent,String>{

	List<Agent> findByOrgcode(String orgcode);
}
