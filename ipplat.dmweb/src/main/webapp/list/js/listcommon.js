//左侧统计数单行span
function getLeftTemp(key,value,count,value_o,selected){
	if(!value_o) value_o = value;
	var reg=new RegExp("\"","g"); //创建正则RegExp对象   
	value_o = value_o.replace(reg,"&quot;") ;

	var clickstr = " onclick='leftsearch(this)' class='height30 cursorPointer secondMenu' ";
	if(selected){
		clickstr =  " class=\" leftTopSelect height30 cursorPointer secondMenu\" ";
	}
	//$(nodeSpan).parent().addClass("leftTopSelect");
	var template = 	"";
	template+='<div u="0" utxt="'+value+'"' + clickstr +' style="white-space:nowrap; overflow: hidden;" title="'+value+'('+count+')">';
	template+='<span class="searOverviewLeftContentSpan1" attrname="'+value_o+'">'+value+'</span>';
	template+='<span>(</span><span class="fontWeightBold">'+count+'</span><span>)</span></div>';

	return template;

}

function bulidLeft(e,list_obj,func){
	var template = 	"";

	var selectedArray = [];
	var reg=new RegExp("'","g"); //创建正则RegExp对象   
	// 所有分类统计按钮的查询项 
	$("#categorySelectButton div span:first-child").each(function(index, domEle) {

		var express = $(this).text();
		if(!!express){
			var array = express.split("=");
			selectedArray[array[0]+array[1].replace(reg,"")] = true;
		}
	});
	if(!!list_obj){
		for(var i=0;i<list_obj.length;i++){
			var key = $(e).attr("v");
			var value = list_obj[i].value;
			var count = list_obj[i].count;
			var value_o = "";
			if(key == "PDB"){
				value_o = value.toUpperCase();
				value = PDB[value_o];
				
			}
			if (key == "LSSCN" && value == "不确定或不影响") {
				continue;
			}
			if(!value_o) value_o = value;
			var selected = false;
			// 判断是否选中
			if(selectedArray[key+value_o]){
				selected = true;
			}
			template += getLeftTemp(key,value,count,value_o,selected);
		}
	}
	$(e).html(template);
}

// 分类筛选表达式
function getCategorySelectExpress() {

	var express = "";

	// 分类统计按钮的查询项
	$("#categorySelectButton div span:first-child").each(function(index, domEle) {

		express += $(this).text()
		if (index != ($("#categorySelectButton div span:first-child").size() - 1)) {
			express += " AND ";

		}

	});

	if (express != "") {
		express = " AND ( " + express + " ) ";
	}

	return express;

}

/*点击左侧   进行筛选查询*/
function leftsearch(e,idname){  
	if($(e).attr('u')==0){
		$(e).attr('u','1');
	}else{
		return;
	}
	//触发左边栏统计或者上方重新检索后，关联数据条不再显示。
	$("#span-relation").hide();
	var orgstr=$('#categorySelectButton').html(); //已有的筛选项
	//var leftstr=$(e).attr('title').split('(')[0];
	// jia 解决实际检索内容包含小括号的情况
	var pstr=$(e).parent().prev().find('span').text(); 
	pstr_v=$(e).parent().attr("v"); 
	pstr_vstr=$(e).parent().attr("vstr"); 
	var child = $(e).children().get(0);
	var leftstr_vstr = child.innerHTML;
	var leftstr_v = $(child).attr("attrname");
	
	var str='<div class="displayInline marginLeft10 marginTop8 marginBottom4">';
	str+='<span class="floatLeft song fontSize12 backWhite displayNone">';
	str+=pstr_v+'=\''+leftstr_v+'\'</span>';
	str+='<span class="floatLeft fontSize12 backWhite categorySelectCNStr">';
	str+=pstr_vstr+'='+leftstr_vstr+'</span>';
	str+='<input class="btnGrayColse divImg buttonNobgBd floatLeft cursorPointer" onclick="selectDel(this)" type="button"></div>';

	str=orgstr+str;
	$('#categorySelectButton').html(str);
	
	$(".searOverviewLeftContentS1").html('<div class="height30 cursorPointer secondMenu" style="white-space:nowrap; overflow: hidden;"><span class="searOverviewLeftContentSpan1" >正在加载......</span></div>');

	getlist(1);
	initleft();
 
}

//jia 去掉无效参数
function selectDel(e){  
	$(e).parent().remove(); 

	$(".searOverviewLeftContentS1").html('<div class="height30 cursorPointer secondMenu" style="white-space:nowrap; overflow: hidden;"><span class="searOverviewLeftContentSpan1" >正在加载......</span></div>');

    getlist(1); 
    initleft();
}
