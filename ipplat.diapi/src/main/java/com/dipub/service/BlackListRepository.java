
package com.dipub.service;


import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.dipub.domain.BlackList;

@CacheConfig(cacheNames = "blacklist")
public interface BlackListRepository extends PagingAndSortingRepository<BlackList,String>{

	@Cacheable
	BlackList findByIp(String ip);
}
