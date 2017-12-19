package com.ipplat.process.domain;

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
@Table(name = "T_Agency")
@Data // lombock
public class Agency implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String rid;
	//机构名称
	private String title;
	//机构编码
	private String orgid;
	// 代理所年审号 11001
	private String orgcode;
	// 代理所成立年
	private int start_year;
	// 代理量
	private int totalCount;
	//负责人
	private String manager;
	//机构地址
	private String address;
	//官方网址
	private String web_site;
	//联系电话
	private String phone;
	//发明授权量
	private int totalinnoauth;
	//发明申请量
	private int totalinno;
	//代理客户数量
	private int totalclient;
	//国别
	private String country;
	//省份
	private String province;
	//城市
	private String city;
	

	
}
