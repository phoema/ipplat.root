package com.dipub.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 检索历史
 * @author jiahh
 *
 */
@Entity
@Table(name = "t_search_his")
@Data // lombock
public class SearchHistory implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	private Long uid;
	//
	private String type;
	//
	@Lob
	private String query;
	// 
	@Column(length=1024)
	private String pdb;
	private Long count;
	

	// 创建时间
	@JsonFormat(pattern = "yyyy-MM-dd HH-mm-ss")
	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createtime = new Date();
	// 更新时间
	@JsonFormat(pattern = "yyyy-MM-dd HH-mm-ss")
	@Column(insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatetime = new Date();

	

	
}
