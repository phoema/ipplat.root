package com.dipub.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * 客户端IP黑名单
 * @author jiahh
 *
 */
@Entity
@Table(name = "T_Agent")
@Data // lombock
public class Agent implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String rid;
	//姓名
	private String name;
	//机构编码
	private String orgid;
	//机构名称
	private String orgname;
	// 代理所年审号 11001
	private String orgcode;

	private  String country;
	private  String province;
	private  String city;
	//资格证号：1108011
	private  String certid;
	//执业证号：1124008011.1 
	private  String occuid;
	//专业：机械
	private  String subject;
	//是否负责人
	private  boolean ismanage;
	//是否合伙人
	private  boolean ispartner;
	//性别
	private  int sex;
	// 代理量
	private int totalCount;
	
	
}
