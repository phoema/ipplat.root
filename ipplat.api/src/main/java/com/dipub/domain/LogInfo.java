package com.dipub.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**
 * 用户配送地址信息
 * @author jiahh
 *
 */
@Entity
@Table(name = "loginfo")
@Getter @Setter // lombock
public class LogInfo implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;

	private String ip;//浏览器IP

	private Long accessTime;// 访问时间
	private String userAgent;//浏览器信息
	private String accessMethod;//访问方法
	private String accessArgs;//访问方法参数
	
	
}
