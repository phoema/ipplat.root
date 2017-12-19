
package com.dipub.service;


import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.dipub.domain.LogInfo;

public interface LogInfoRepository extends PagingAndSortingRepository<LogInfo,Long>{

	List<LogInfo> findByid(long id);
}
