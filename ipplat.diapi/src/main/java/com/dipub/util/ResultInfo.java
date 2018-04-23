package com.dipub.util;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;



 
/**
 * 申请人区域代码
 * @author jiahh 2016年8月23日
 *
 */
@JsonInclude(Include.NON_NULL) 
public class ResultInfo<T>{
	//错误代码
	public String errorCode;
	//错误说明
	public String errorDesc;
	//每页记录数
	public Integer page_row;
	//页码
	public Integer page;
	//总计
	public Integer total;
	//排序字段
	public String sort_column;
	//综合内容
	public T context;
	//总计
	public int ReturnValue;

}
