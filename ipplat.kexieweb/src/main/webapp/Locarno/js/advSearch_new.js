$(document).ready(function () {

    //回车检索事件
    $("input[type=text]").keyup(function (event) {
        var curKey = event.keyCode;
        if (curKey == 13) {
            return checkSearchForm();
        }
    });

    //全选
    $("#allchannels").click(function () {
        var flag = $('#allchannels').is(':checked');
       
        if (flag == undefined||!flag) {
            $("#allchannels1").prop("checked", false);
            $("#allchannels2").prop("checked", false);
            $("#allchannels3").prop("checked", false);
            $("#DBCN input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
            $("#DBFR1 input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
            $("#DBFR2 input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
        }
        else { 
            $("#allchannels1").prop("checked", flag);
            $("#allchannels2").prop("checked", flag);
            $("#allchannels3").prop("checked", flag);
            $("#DBCN input[name='channelId']").each(function () {
                $(this).prop("checked", flag);
            });
            $("#DBFR1 input[name='channelId']").each(function () {
                $(this).prop("checked", flag);
            });
            $("#DBFR2 input[name='channelId']").each(function () {
                $(this).prop("checked",  flag);
            });
        }
    });
    //中文库全选
    $("#allchannels1").click(function () {
        var flag = $("#allchannels1").is(':checked');
        if (flag == undefined||!flag) { 
            $("#allchannels").prop("checked", false);
            $("#DBCN input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
        }
        else {
            $("#DBCN input[name='channelId']").each(function () {
                $(this).prop("checked", flag);
            });
        }

        //最总的那个checkbox的监控全选状态
        $("#allchannels").prop("checked", true); //先全选上
        $("#DBCN input[name='channelId']").each(function () {
            if (!$(this).is(':checked')) {
                $("#allchannels").prop("checked", false);
            }
        });
        $("#DBFR1 input[name='channelId']").each(function () {
            if (!$(this).is(':checked')) {
                $("#allchannels").prop("checked", false);
            }
        });


    });

    //最低文献量国家和地区库全选
    $("#allchannels2").click(function () {
        var flag = $("#allchannels2").is(':checked');
        if (flag == undefined||!flag) { 
            $("#allchannels").prop("checked", false);
            $("#DBFR1 input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
        }
        else {
            $("#DBFR1 input[name='channelId']").each(function () {
                $(this).prop("checked",  flag);
            });
        }

        //最总的那个checkbox的监控全选状态
        $("#allchannels").prop("checked", true); //先全选上
        $("#DBCN input[name='channelId']").each(function () {
            if (!$(this).is(':checked')) {
                $("#allchannels").prop("checked", false);
            }
        });
        $("#DBFR1 input[name='channelId']").each(function () {
            if (!$(this).is(':checked')) {
                $("#allchannels").prop("checked", false);
            }
        });

    });

    //最低文献量国家和地区库全选
    $("#allchannels3").click(function () {
        
        var flag = $("#allchannels3").is(':checked');
        if (flag == undefined||!flag) { 
            $("#allchannels").prop("checked", false);
            $("#DBFR2 input[name='channelId']").each(function () {
                $(this).prop("checked", false);
            });
        }
        else {
            $("#DBFR2 input[name='channelId']").each(function () {
                $(this).prop("checked", flag);
            });
        }
    });

    $("#fieldcode2name").bind("click", function () {
        openFieldnameHtml();
    });

    searchExpression(1, hisDatasPageSize);

    //生成表达式按钮点击事件
    $("#save_btn").click(function () {
        if (!checkAuthority()) {
            alert("该功能只有高级会员才能使用。");
            return false;
        }

        var strWhere = $("#txtComb").val();
        if (strWhere == '') {
            alert("检索条件不能为空。");
            return;
        }
        var strSources = "";
        $("input[name='channelId']").each(function () {
            if ($(this).is(':checked')) {
                strSources += $(this).val() + ",";
            }
        });
        if (strSources != "") {
            strSources = strSources.substring(0, strSources.length - 1);
        } else {
            alert("检索数据范围不能为空。");
            return;
        }
        //检测保存的表达式是否溢出
        var resp = ajaxCallBySync("/exp!saveExp.action");
        if (resp) {
            var success = eval('[' + resp + ']')[0].success;
            if (success) {
                $("body").mask("检索中，请稍等……");
                $.post("expert!save.action?rd=" + Math.random(),
						{ strWhere: strWhere,
						    strSources: strSources
						},
					function (json) {
					    if (json.message == 'success') {
					        //alert("成功生成表达式");
					        searchExpression(1, hisDatasPageSize);
					    } else {
					        alert(json.message);
					    }
					    $("body").unmask();
					});
            } else {
                alert(eval('[' + resp + ']')[0].msg);
            }
        }
    });


    //清除按钮点击事件
    $("#clear_btn").click(function () {
        $("#txtComb").val("");
        $(fieldShortName).each(function () {
            var idFlag = "#txt_" + this;
            $(idFlag).val("");
        });
    });

    /**
    * 表达式全选
    */
    $("#allExp").click(function () {
        var flag = $("#allExp").is(':checked');
        $("input[name='record']").each(function () {
            $(this).prop("checked", flag);
        });
    });

    $("#btn_export_exp").click(function () {
        exportExps();
    });
    $("#btn_delete_exp").click(function () {
        deleteExp();
    });
    $("#btn_and_exp").click(function () {
        comboExp('and');
    });
    $("#btn_or_exp").click(function () {
        comboExp('or');
    });
});


/**
 * 触发检索事件
 */
function checkSearchForm(){

        var channelNum = 0;
        var dbNames = "";
        $("input[name='channelId']").each(function () {
            if ($(this).is(':checked')) {
                channelNum++;
                dbNames += $(this).val() + ",";
            }
        });
   
		if(channelNum==0){
			layer.alert("检索的数据范围不能为空。");
            $(".xubox_layer").css({"top":"150px"});
			return;
        }

        var searchText = $("#txtComb").val();
		if(searchText==""){
			$("#islogicsearch").val('false');
			var i=0;
			$(fieldShortName).each(function(){
				var idFlag="#txt_"+this;
				var param=jQuery.trim($(idFlag).val());
				//var LegalStatus=$("#LegalStatus").val();
				if(param!=''){
					if(this=="A" || this=="C"){
						param = isAppendCN(param);
					}
					
					if(searchText==""){
						searchText=fieldName[i]+"=("+param+")";
					}else{
						var tempExp = "";
						
						tempExp = fieldName[i]+"=("+param+")";
						
						if(searchText.indexOf(tempExp)==-1){
							searchText+=" and " + tempExp;
						}
					}
					
				}
				i++;
			});
			
			searchText = jQuery.trim(searchText);
			if(searchText=="") {
				layer.alert("检索表达式不能为空。");
	            $(".xubox_layer").css({"top":"150px"});
				return;
			}
			
		}
		
		if($("#strWhere").val() != null && ($("#strWhere").val().length + 1) > 4000) {			
			layer.alert("非会员输入表达式长度不能超过4000！");
            $(".xubox_layer").css({"top":"150px"});
			return false;			
		}
        $("#strWhere").val(searchText);
        $("#strSources").val(dbNames);

//        alert("dbNames="+dbNames);
//        alert('searchText=' + searchText);
//        return;

		$("body").mask('检索中，请稍等……');
        $("#searchForm").submit();
		
}

/**
 * 将专拣检索表达式保存到我的表达式中
 * @param id
 */
function save(id){
	//$("body").mask("表达式保存中，请稍候……");
	$.getJSON('expert!saveMyExp.action?rd=' + Math.random(),
			{id:id},
			function(json){
				if(json.message=="success"){
					alert("保存完成。");
				}else{
					alert(json.message);
				}
				//$("body").unmask();
			});
}

/**
 * 将逻辑运算符加入到文本编辑区中
 * @param item
 */
function addItems(item){
	var field = document.getElementById("txtComb");
	insertAtCursor(field,item);
}

/**
 * 数据库全选取消事件
 * @param t
 */
function checkall(t){
	var tdDB="";
	switch(t){
	case 1: tdDB="#DBCN "; break;
	case 2: tdDB="#DBFR1 "; break;
	case 3: tdDB="#DBFR2 "; break;
	default:tdDB="";
	}
	//全选标识状态
	var flag = $("#allchannels" + t).is(':checked');
	$(tdDB + "input[name='channelId']").each(function(){
		$(this).prop("checked", flag);
	});
}

/**
 * 数据库反选
 */
function oppositeChannel(){
	$("input[name='channelId']").each(function(){
		var flag = $(this).is(':checked');
		$(this).prop("checked", !flag);
	});
}

/**
 * 由单个数据库的选定状态判断全选按钮是否被选中
 */
function checkInputStatus(t){
	var tdDB="";
	switch(t){
	case 1: tdDB="DBCN"; break;
	case 2: tdDB="DBFR1"; break;
	case 3: tdDB="DBFR2"; break;
	default:tdDB="searchDB";
	}
	var flag = true;
	$("#" + tdDB + " input[name='channelId']").each(function(){
		if(!$(this).is(':checked')){
			flag=false;
		}
	});
	if(t){
		$("#allchannels" + t).prop("checked",  flag);
}

//最总的那个checkbox的监控全选状态
$("#allchannels").prop("checked",  true); //先全选上
$("#DBCN input[name='channelId']").each(function () {
    if (!$(this).is(':checked')) {
       $("#allchannels").prop("checked", false);
    }
});
$("#DBFR1 input[name='channelId']").each(function () {    if (!$(this).is(':checked')) {        $("#allchannels").prop("checked", false);    }});



}

/**
 * 扩展逻辑运算符的展示与隐藏
 * 
 * @param cli
 * @param sh
 */
function slidDiv1(cli, sh) {
	$(cli).toggle(function() {
		$(sh).hide();
		$(cli).html("<font color='red'>>> </font>")
	}, function() {
		$(sh).show();
		$(cli).html("<font color='red'><< </font>")
	})
}

/**
 * 查询在专家检索表达式
 * @param pageNo	当前页码
 * @param pageSize	每页显示记录数量
 */
function searchExpression(pageNo,pageSize){
	$.getJSON('expert!expression.action?rd='+Math.random(),
			{pageNo:pageNo,
		 	 pageSize:pageSize},
			function(json){
			displayRecord(json.expPage.result);
			displayPageNo(json.expPage.totalCount,pageSize);
	});
}
/**
 * 翻页插件回调显示专家表达式记录
 * 与上者的区别在于此处不需要页码显示
 * @param pageNumber
 * @param size
 */
function turnPage(pageNumber,size){
	$.getJSON('expert!expression.action?rd='+Math.random(),
			{pageNo:pageNumber,
			 pageSize:size},
			function(json){
			displayRecord(json.expPage.result);
	});
}

/**
 * 检查表达式全选按钮的状态
 * 并修改是否被选中
 */
function allRecordCheck(){
	var flag = true;
	$("input[name='record']").each(function(){
		if(!$(this).is(':checked')){
			flag = false;
		}
	});
	$("#allExp").prop("checked", flag);
}

/**
 * 失效库检索
 */
function checkSX(){
	var f = $("#sxchannels").is(':checked');
	var sxArr = ["FMSX","XXSX","WGSX"];
	var yxArr = ["FMZL","SYXX","WGZL"];
	if(f){
		var chk = false;
		for(var i=0; i<3; i++){
			if($("#channel" + (i+1)).prop("checked", true)){
				$("#channel" + (i+1)).val(sxArr[i]);
				chk = true;
			} else {
				$("#channel" + (i+1)).val(yxArr[i]);
			}
		}
		if(!chk){
			alert("失效专利针对中国发明申请，中国实用新型，中国外观设计专利，<br/>请选择对应的专题库!");
			$("#sxchannels").prop("checked", false);
		}
	} else {
		for(var i=0; i<3; i++){
			$("#channel" + (i+1)).val(yxArr[i]);
		}
	}
}

/**
 * 想逻辑编辑区插曲代码表达式
 * @param obj
 */
function insertCodeExp(obj){
	var code = obj.getAttribute('code');
	var field = document.getElementById("txtComb");
	insertAtCursor(field,"@"+code);
}

/**
 * 显示专家检索表达式
 * @param result
 */
function displayRecord(result){
	if(result){
		var txt = "";
		$.each(result,function(idx,item){
			//名称中特殊字符转义处理
			var title = item.title;
			title = title.replaceAll('\'',"&apos;");
			title = title.replaceAll('\"',"&quot;");
			var searchTime = item.searchTime;
			var strSearchTime = searchTime.replaceAll("T"," ");
			txt+="<tr>"							+
				 "<td>" 						+
				 "<input type='checkbox' code='" + item.recordCode + "' name='record' onclick='allRecordCheck();' value='" + item.id + "'>" 	+
				 "&nbsp;<span style='cursor:pointer;' code='" + item.recordCode + "' title='将表达式编号添加到编辑区' onclick='insertCodeExp(this)'>@" + item.recordCode	+ "</span>"		+
				 "</td>"						+
				 "<td>" 						+
				 "<span style='cursor:pointer;' onclick='appendExp(\"" + item.id + "\")' title='将表达式添加到编辑区'>" + title	+ "</span>"					+
				 "</td>"						+
				 "<td>" 						+
				 "" + item.trsTablesName		+
				 "</td>"						+
				 "<td>" 						+
				 "" + item.hitCount				+
				 "</td>"						+
				 "<td>" 						+
				 "" + strSearchTime				+
				 "</td>"						+
				 "<td>" 						+
				 "<a href='javascript:exp(\"" + item.id + "\")'>重命名</a>&nbsp;"		+
				 "<a href='javascript:del(\"" + item.id + "\")'>删除</a>&nbsp;"		+
				 "<a href='expert!keySearch.action?key=" + item.id + "&rd=" + Math.random() + "'>检索</a>&nbsp;"		+
				 //"<a href='javascript:save(" + item.id + ")'>保存</a>&nbsp;"		+
				 //"<a href='javascript:exp(" + item.id + ")'>原始表达式</a>&nbsp;"		+
				 //"<div id=\"rename"+(idx+1)+"\"><a id=\"rename"+(idx+1)+"\" href='javascript:funRename(\"" + item.id + "\",\""+(idx+1)+"\")'>修改名称</a></div>&nbsp;"		+
//				 "<button title=\"検索式リネーム\" class=\"new_name\" id=\"rename"+(idx+1)+"\" onclick=\"funRename('"+item.id+"','"+(idx+1)+"')\"></button>"+
				 "</td>"						+
				 "</tr>";
				 
		});
		//alert(txt);
		if(txt!=""){
			$("#expData").html(txt);
		} else {
			$("#expData").html("");
		}
		
	}
}


/**
 * 查看专家表达式信息
 * @param id
 */
function view(id){
	$.getJSON("expert!expInfo.action?rd="+Math.random(),
			{key:id},
			function(json){
				if(json.expExpert){
					var inputTitle;
					var inputExp;
					var exp = json.expExpert.sourceExp;
					exp = exp.replaceAll('\'',"&apos;");
					exp = exp.replaceAll('\"',"&quot;");
					var title = json.expExpert.title;
					title = title.replaceAll('\'',"&apos;");
					title = title.replaceAll('\"',"&quot;");
					$.dialog({
						title:'查看表达式',
						lock:true,
						max:false,
						min:false,
						content:'<div style="height:150px;width:380px;text-align:left;">' + 
								'<table border="0" cellspacing="0" cellpadding="0" width="100%">' + 
//								'<tr>' +
//								'<td width="60" height="35" align="right">名称：' +
//								'</td>' +
//								'<td width="320">' + title + 
//								'</td>' +
//								'</tr>' +
								'<tr>' +
//								'<td width="60" align="right">表达式：' +
//								'</td>' +
								'<td width="320">' + exp + 
								'</td>' +
								'</tr>' +
								'</table>' +
								'</div>',
						init:function(){
							inputTitle = document.getElementById('winTitle');
							inputExp = document.getElementById('winExp');
						},
						cancel:function(){
//							alert(5678);
						},
						cancelVal:'確認'
					
					})
				}else{
					alert("検索式インフォメーションが取得できません");
				}
			});
}

function exp(id){
	$.getJSON("expert!expInfo.action?rd="+Math.random(),
			{key:id},
			function(json){
				if(json.expExpert && json.expExpert.sourceExp != "error"){
					var inputTitle;
					var inputExp;
					var exp = json.expExpert.sourceExp;
					exp = exp.replaceAll('\'',"&apos;");
					exp = exp.replaceAll('\"',"&quot;");
					var title = json.expExpert.title;
					title = title.replaceAll('\'',"&apos;");
					title = title.replaceAll('\"',"&quot;");
					$.dialog({
						title:'表达式信息',
						lock:true,
						max:false,
						min:false,
						content:'<div style="height:150px;width:380px;text-align:left;">' + 
								'<table border="0" cellspacing="0" cellpadding="0" width="100%">' + 
								'<tr>' +
								'<td width="60" height="35" align="right">名称：' +
								'</td>' +
								'<td width="320"><input id="winTitle" type="text" style="border:1px solid #CACACA;width:280px;height:26px;line-height:25px;" value="' + title + '"/>' +
								'</td>' +
								'</tr>' +
								'<tr>' +
								'<td width="60" align="right">检索式：' +
								'</td>' +
								'<td width="320"><textarea id="winExp" cols="" rows="" style="height:90px;width:280px;border:1px solid #CACACA;"  readonly>' + exp + '</textarea>' +
								'</td>' +
								'</tr>' +
								'</table>' +
								'</div>',
						init:function(){
							inputTitle = document.getElementById('winTitle');
							inputExp = document.getElementById('winExp');
						},
						ok:function(){
							edit(json.expExpert.id,inputTitle.value,inputExp.value);
							
							//cancel;
						},
						cancel:function(){
							
						}
					
					})
				}else{
					alert("获取表达式数据信息失败。");
				}
			});
}

/**
 * 编辑表达式
 * @param id
 * @param title
 * @param exp
 */
function edit(id,title,exp){
	$.getJSON("expert!update.action?rd="+Math.random(),
			{id:id,
			 title:title,
			 exp:exp
			},function(json){
				if(json.message=='success'){
					alert("修改完毕。");
					searchExpression(1,hisDatasPageSize);
				}else{
					alert(json.message);
				}
			});
}
/**
 * 将表达式添加到编辑区
 * @param id
 */
function appendExp(id){
	$.getJSON("expert!expInfo.action?rd="+Math.random(),
			{key:id},
			function(json){
				if(json.expExpert){
					insertField(json.expExpert.sourceExp);
				}else{
					alert("读取表达式失败。");
				}
			});
	
}

/**
 * 分页插件显示专家表达式分页信息
 * @param total		总记录数量
 * @param pageSize	每页显示记录数量
 */

function displayPageNo(total,pageSize){
	$('#expPage').pagination({
		total: total,
		pageList: [5,10,20,50],
		pageSize: pageSize,
		//翻页事件
		onSelectPage: function(pageNumber, size){
			$(this).pagination('loading');
			hisDatasPageSize = size;
			turnPage(pageNumber, size);
			$(this).pagination('loaded');
		}
	})
}

function del(id){
	if (!checkAuthority()) {
		alert("该功能只有高级会员能使用。");
		return;
	}
	
	$.getJSON("expert!refersStatus.action?rd=" + Math.random(),
			{id:id},function(json){
				var msg = "确定删除该表达式么？";
				if(json.message=='success'){
					msg = "该被其它表达式引用，删除表达式可能导致其它表达式不能正常使用";
				}
				$.dialog({
					title:'提醒',
					lock:true,
					min:false,
					max:false,
					icon:'prompt.gif',
					content:msg,
					ok:function(){
						deleteOne(id);
					},
					cancel:function(){
						
					}
				});
			});
}

/**
 * 删除专家检索表达式
 * @param id
 */
function deleteOne(id){
	$.getJSON('expert!delete.action?rd='+Math.random(),
			{key:id},
			function(json){
				if(json.message=="success"){
					alert("表达式删除成功。");
					searchExpression(1,hisDatasPageSize);
				}else{
					alert("表达式删除失败。");
				}
			});
}

/**
 * 组合表达式
 */
function comboExp(logic){
	
	if (!checkAuthority()) {
		alert("该功能只有高级会员能使用。");
		return false;
	}
	
	
	if(logic){
		var str = "";
		$("input[name='record']").each(function(){
			if($(this).is(':checked')){
				str += $(this).val() + ",";
			}
		});
		if(str!=""){
			str = str.substring(0,str.length-1);
			var arr = str.split(",");
			if(arr.length>1){
				$.getJSON("expert!comboExp.action?rd=" + Math.random(),
						{str:str,
						 opt:logic},
						 function(json){
							 if(json.message=="success"){
								 alert("检索表达式组合成功");
								 searchExpression(1,hisDatasPageSize);
							 }else{
								 alert(json.message);
							 }
						 });
			}else{
				alert("请选择至少两个表达式进行合并操作。");
			}
		}else{
			alert("请选择表达式进行合并。");
		}
	}else{
		
	}
}

/**
 * 删除表达式
 * 批量删除
 */
function deleteExp(){
	
	if (!checkAuthority()) {
		alert("该功能只有高级会员才能使用。");
		return false;
	}
	
	
	var str = "";
	var code = "";
	$("input[name='record']").each(function(){
		if($(this).is(':checked')){
			str += $(this).val() + ",";
			code +=$(this).attr("code") + ","
		}
	})
	if(str==""){
		alert("请选择要删除的表达式。");
	}else{
		str = str.substring(0,str.length-1);
		code = code.substring(0,code.length-1);
		$.getJSON("expert!refersStatus.action?rd=" + Math.random(),
			{code:code},function(json){
				var msg = '确定删除表达式？';
				if(json.message!='success'){
					msg = json.message;
				}
				$.dialog({
					title:'提醒',
					lock:true,
					min:false,
					max:false,
					icon:'prompt.gif',
					content:msg,
					ok:function(){
						deleteOne(str);
					},
					cancel:function(){
						
					}
				});
			});
	}
}

/**
 * 
 * @param txt
 */
function insertField(txt){
	var field = document.getElementById("txtComb");
	insertAtCursor(field,txt);
}

/**
 * 导出选定的表达式
 */
function exportExps(){
	
	if (!checkAuthority()) {
		alert("该功能只有高级会员才能使用。");
		return false;
	}
	
	var ids = "";
	$("input[name='record']").each(function(){
		if($(this).is(':checked')){
			ids+=$(this).val() + ",";
		}
	});
	if(ids==""){
		alert("请选择导出的表达式");
	}else{
		ids = ids.substring(0,ids.length-1);
		$("#hidRecords").val(ids);
		$("#exportForm").submit();
	}
	
}

//在光标处插入字符串
//myField    文本框对象
//myValue 要插入的值
function insertAtCursor(myField, myValue)
{
//IE support
if (document.selection)
{
   myField.focus();
   sel            = document.selection.createRange();
   sel.text    = myValue;
   sel.select();
}

//MOZILLA/NETSCAPE support
else if (myField.selectionStart || myField.selectionStart == '0')
{
   var startPos    = myField.selectionStart;
   var endPos        = myField.selectionEnd;
   // save scrollTop before insert
   var restoreTop    = myField.scrollTop;
   myField.value    = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
   if (restoreTop > 0)
   {
       // restore previous scrollTop
       myField.scrollTop = restoreTop;
   }
   myField.focus();
   myField.selectionStart    = startPos + myValue.length;
   myField.selectionEnd    = startPos + myValue.length;
} else {
   myField.value += myValue;
   myField.focus();
}
}

function setShowHit() {
	var showhint=$("#showhintBox").is(':checked');
	if (showhint) {
		$("#showhint").val(0);
	} else {
		$("#showhint").val(1);
	}
}

/**
 * 日期格式化
 */
Date.prototype.format = function(format){
    var o =
    {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format))
    format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
    if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

String.prototype.replaceAll = function(s1,s2){    
	return this.replace(new RegExp(s1,"gm"),s2);    
	}


//var fieldShortName=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];
//var fieldName = ["申请号","申请日","公开（公告）号","公开（公告）日","名称","摘要","主分类号","分类号","申请（专利权）人","发明（设计）人","优先权","地址","专利代理机构","代理人","国省代码","同族专利项","权利要求书","说明书","ss","法律状态"]

var fieldShortName=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"];
var fieldName = ["申请号","申请日","公开（公告）号","公开（公告）日","名称","摘要","主分类号","分类号","申请（专利权）人","发明（设计）人","优先权","地址","专利代理机构","代理人","国省代码","同族专利项","权利要求书","说明书","ss","法律状态","名称,摘要+","名称,摘要,权利要求书+","名称,摘要,权利要求书,说明书+"]

/**
 * 将表格内容出入到逻辑输入框内
 */
function insertItem(num){
	if($("#cli3").attr("class")=="bgss_more"){
		return;
	}
	var text = jQuery.trim($("#txt_"+fieldShortName[num]).val());
	if(text==""){
		alert("检索条件不能为空。");
		return;
	}else{
		if(num==0 || num==2){text=isAppendCN(text) + '%';}
		
		text=fieldName[num]+"=(" + text + ")";
		insertAtCursor($("#txtComb"), text);
	}
}

function _translate(){
	$.dialog({
		id : 'translate.jsp',
		title : ' ',
		max : false,
		min : false,
		width : 880,
		fixed : true,
		left : '50%',
		top : '50%',
		content : 'url:translate.jsp'
	});
	$.dialog({
		id : 'translate.jsp'
	}).title('');
}

function viewOtherCon(){
	openLhgdialogWin("viewOtherCon","其他国家和地区","windows/viewOtherCon.jsp");
}

function crossLanguageOnCheck() {
	var crossLanguage=$("#crossLanguagecheck").is(':checked');
	if (crossLanguage) {
		alert("跨语言检索功能正在维护中......");
		$("#crossLanguagecheck").prop("checked", false);
	}
}

function sxOnCheck() {
	var sxcheck=$("#sx").is(':checked');
	if (sxcheck) {
		var channelid ='';
		$("input[name='channelId']").each(function(){
			if($(this).is(':checked')){
				channelid += $(this).val() + ","; 
			}
		});
		if (channelid != '') {
			channelid = channelid.substring(0, channelid.length - 1);
			alert(channelid);
		}
	}
}


var pahelp = null;
function openPaHelp() {
	pahelp = $.dialog({
		id : 'pahelp',
		max : false,
		min : false,
		width : 680,
		height : 405,
		fixed : false,
		content : 'url:windows/subWindowCompanyCode2.jsp?placeValuesBeforeTB_=savedValues&TB_iframe=true&height=405&width=680&modal=true'
	});
}

function closePaHelp() {
	if (pahelp != null) {
		pahelp.close();
	}
}

var ipchelp = null;
function openIpcHelp(type) {
	ipchelp = $.dialog({
		id : 'ipchelp',
		max : false,
		min : false,
		width : 680,
		height : 405,
		fixed : false,
		content : 'url:windows/subWindowIPCAssort.jsp?textId='+type+'&placeValuesBeforeTB_=savedValues&TB_iframe=true&height=500&width=610&modal=true'
	});
}

function closePaIpcHelp() {
	if (ipchelp != null) {
		ipchelp.close();
	}
}