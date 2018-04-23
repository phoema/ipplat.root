package com.dipub.util;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;



 
/**
 * 数据范围
 * @author jiahh 2017年3月14日
 *
 */
@Data
@JsonInclude(Include.NON_NULL) 
public class DataInfo{
	//
	private String id;
//	//类型
//	private String type;
//	//库
//	private String pdb;
//	//著录
//	private boolean bib;
//	//摘要附图
//	private boolean abst;
//	//全文PDF
//	private boolean pdf;
//	//全文XML
//	private boolean xml;
//	//法律状态
//	private boolean flzt;
//	//引证
//	private boolean cite;
//	//同族
//	private boolean family;
//	//更新频率
//	private String update;
	//公开日开始
	private String pd_start;
	//公开日截止
	private String pd_end;
	//数据量
	private int count;

}