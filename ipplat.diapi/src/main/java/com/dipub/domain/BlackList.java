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
@Table(name = "blacklist")
@Data // lombock
public class BlackList implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String ip;

	private Date createtime;
	private Date updatetime;

	
}
