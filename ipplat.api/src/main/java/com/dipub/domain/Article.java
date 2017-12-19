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

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 文章资讯信息
 * @author jiahh
 *
 */
@Entity
@Table(name = "article")
@Getter @Setter @ToString// lombock
public class Article implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	private int type; // 
	// 作者
	@Column(name="author")
	private String author;
	
	@Column(name="title")
	private String title;
	
	@Lob  	@Column(name="detail",length=20000)
	private String detail;
	// 浏览次数
	private long browser;
	//是否置顶
	private int istop;
	//封面图片url
	private String topimage;
	//附件
	private String attachment;
	//来源
	private String source;
	// 连接
	private String link;


	// 创建时间
	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createtime = new Date();
	// 更新时间
	@Column(insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatetime = new Date();
	

}
