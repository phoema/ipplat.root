package com.dipub.util;



 
/**
 * 申请人区域代码
 * @author jiahh 2016年8月23日
 *
 */
public class AreaCode{
	//省
	private String province;
	//市
	private String city;
	//县区
	private String county;
	//代码
	private String areacode;

	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public String getAreacode() {
		return areacode;
	}
	public void setAreacode(String areacode) {
		this.areacode = areacode;
	}
}