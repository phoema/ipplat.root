
package com.dipub.service;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.dipub.domain.Agency;
import com.dipub.domain.Agent;

public interface AgentRepository extends PagingAndSortingRepository<Agent,String>{

	List<Agent> findByOrgcode(String orgcode);
	Page<Agent> findByNameContainingIgnoreCase(String name,Pageable page);
	Page<Agent> findByOrgnameContainingIgnoreCase(String orgname,Pageable page);
}
