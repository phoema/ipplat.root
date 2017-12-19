
package com.ipplat.process.service;


import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.ipplat.process.domain.Agency;

public interface AgencyRepository extends PagingAndSortingRepository<Agency,String>{

	@Cacheable
	Agency findByRid(String rid);
}
