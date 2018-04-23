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

import lombok.Data;

import com.dipub.util.DIUtils.DateType;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 预警管理
 * @author jiahh
 *
 */
@Entity
@Table(name = "t_warning")
@Data // lombock
public class WarningManage implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private Long uid;
	private String type;
	private String query;
	private String pdb;
	private Long count;
	private String email;
	private boolean sendmail;
	

	// 创建时间
	@JsonFormat(pattern = "yyyy-MM-dd HH-mm-ss")
	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createtime = new Date();
	// 更新时间
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatetime = new Date();
	// 预警时间
	@JsonFormat(pattern = "yyyyMMddHHmmss")
	@Column(insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date warnstart;
	// 预警时间
	@JsonFormat(pattern = "yyyyMMddHHmmss")
	@Column(insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date warnend;

	

	
}
