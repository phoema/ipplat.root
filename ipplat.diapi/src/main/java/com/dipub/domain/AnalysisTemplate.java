package com.dipub.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

/**
 * 分析模板
 * @author jiahh
 *
 */
@Entity
@Table(name = "t_analysis_temp")
@Data // lombock
public class AnalysisTemplate implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	private Long pid;
	private Long uid;
	//
	private String type;
	private String name;
	private String filter1;
	private String filter2;
	private String filter3;
	

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
