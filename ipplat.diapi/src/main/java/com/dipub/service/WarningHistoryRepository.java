package com.dipub.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dipub.domain.WarningHistory;
 
/**
 * 预警消息持久化类;
 * @author Jiahh
 * @version v.0.1
 */
public interface WarningHistoryRepository extends JpaRepository<WarningHistory,Long>{
   
    /**通过type查找预警消息;*/
	   public Page<WarningHistory> findByType(String type,Pageable page);
	   public Page<WarningHistory> findByUidAndTypeOrderByCreatetimeDesc(Long uid,String type,Pageable page);

 }