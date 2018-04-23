package com.dipub.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dipub.domain.SearchHistory;
 
/**
 * 检索历史持久化类;
 * @author Jiahh
 * @version v.0.1
 */
public interface SearchHistoryRepository extends JpaRepository<SearchHistory,Long>{
   
    /**通过type查找检索履历;*/
    public Page<SearchHistory> findByType(String type,Pageable page);
	public Page<SearchHistory> findByUidAndTypeOrderByCreatetimeDesc(Long uid,String type,Pageable page);

 }