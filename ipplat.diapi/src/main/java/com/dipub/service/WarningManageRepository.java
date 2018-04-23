package com.dipub.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.dipub.domain.WarningManage;
 
/**
 * 预警管理持久化类;
 * @author Jiahh
 * @version v.0.1
 */
public interface WarningManageRepository extends JpaRepository<WarningManage,Long>{
   
    /**通过type查找预警管理;*/
	public Page<WarningManage> findByType(String warntype,Pageable page);
	public Page<WarningManage> findByUidAndTypeOrderByCreatetimeDesc(Long uid,String type,Pageable page);
	public Long countByUidAndType(Long uid,String type);

 }