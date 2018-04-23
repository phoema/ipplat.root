
package com.dipub.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.dipub.domain.Agency;

public interface AgencyRepository extends PagingAndSortingRepository<Agency,String>{

	Agency findByRid(String rid);
//	@Query("Select * from T_Agency c where c.title like %:title%")
	//List<Agency> findByTitleContainingIgnoreCase(String title,Pageable page);
	Page<Agency> findByTitleContainingIgnoreCase(String title,Pageable page);
	int countByTitleContainingIgnoreCase(String title);

}
