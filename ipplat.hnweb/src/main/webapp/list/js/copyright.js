//过滤器
var angularApp;
if (typeof (angular) != "undefined" && angular != null) {
	angularApp = angular.module('patentApp', []);
	angularApp.filter('subTime', function() {
		return function(input) {
			if (input != null && input != "") {
				return input.substr(0, 10);
			} else {
				return "";
			}
		}

	});

	angularApp.filter('dateFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				// 20150408104240
				return input.substr(0, 4) + "." + input.substr(4, 2) + "." + input.substr(6, 2) + " " + input.substr(8, 2) + ":" + input.substr(10, 2);
			} else {
				return "";
			}
		}
	});

	angularApp.filter('numFilter', function() {
		return function(input) {
			if (input == "0") {
				return "";
			} else {
				return input;
			}
		}
	});

	angularApp.filter('filterTra', function() {
		return function(input) {
			if (input == "1") {
				return "近似检索";
			} else {
				return "";
			}
		}
	});
}


// 生成表达式和追加表达式
$(".generateExpress").click(function() {

	// 对应库
	var m_str = "";

	// 快捷
	var fe_str = getShortcutExpress();

	m_str = getFieldExpress(m_str);

	if (fe_str != null && fe_str != "" && m_str != null && m_str != "") {
		m_str += " AND " + fe_str;
	} else if (m_str == null || m_str == "") {
		m_str = fe_str;
	}

	// layer.alert('m_str***'+m_str);
	$("#expressCN").val(m_str);
});

$(".appendExpress").click(function() {

	var m_str = "";
	m_str = getFieldExpress(m_str);

	if (m_str == "") {
		return;
	}

	if ($("#expressCN").val() != null && $.trim($("#expressCN").val()) != "") {

		m_str = " AND " + m_str;
	}

	$("#expressCN").val($("#expressCN").val() + " " + m_str);
});

/* 生成表达式 然后跳转页面进行检索 */
$("#submitExpress").click(
		function() {
		 
			var url = "";
			var type=$('.tableOn').attr('id');
			if(type=='copyright_rz'){
				//软件著作的检索
				url = "crsoftlist.html";
			}else{
				//作品的检索
				url = "crworklist.html";
			}
			
			var m_str = "";
			// 快捷
			var fe_str = getShortcutExpress();
			m_str = getFieldExpress(m_str);

			if (fe_str != null && fe_str != "" && m_str != null && m_str != "") {
				m_str += " AND " + fe_str;
			} else if (m_str == null || m_str == "") {
				m_str = fe_str;
			}

			if(!m_str){
				$.fz_common.alert("错误", "请输入关键字，再进行检索");
				return;
			}else{
				
				//生成验证码
				var verifyCode = new GVerify("v_container"); 
				
			 	//设置验证码位置  
				  var ww = $(window).width();
		          var hh = $(window).height();    
		          var ws = $("#yzm").width();
		          var wh = $("#yzm").height(); 
		         
		          $('#yzmwrap').css({"z-index":"200"}); 
		          $("#yzm").css({ top: (hh - wh) / 2 + "px", left: (ww - ws) / 2 + "px" }).show();
		    	  $("#div_float_show").css("height", hh + "px").css("width", ww + "px").css({ top: "0px", left: "0px" }).show();
		    	  document.getElementById("my_button").onclick = function(){
		  			var yzmstr=$.trim($('#code_input').val());
		    		  var res = verifyCode.validate(yzmstr);
		  			if(res){
		  			// (申请号=(11) AND 名称=(333) );;中国实用新型,中国授权
		  				var urlfinal = url + "?ex="
		  						+ encodeURIComponent(m_str);
		  				window.open(urlfinal);  
		  				 $('#verifyCanvas').remove();
		  				 $('#code_input').val('');
		  			 $('#yzmwrap').css({"z-index":"-1"}); 
		   		  $("#div_float_show").hide();
		  			}else{
		  			if(yzmstr==''){
		  				$.fz_common.alert("错误","请输入验证码"); 
		  			} 
		  			else{
		  				$.fz_common.alert("错误","验证码错误"); 
		  			}
		  			}
		  		}
		    	  document.getElementById("cancle").onclick = function(){
		    		  $('#yzmwrap').css({"z-index":"-1"}); 
		    		  $("#div_float_show").hide();
		    		  $('#verifyCanvas').remove();
		    		 
		    		}
		    	  document.getElementById("keytipscancel").onclick = function(){
		    		  $('#yzmwrap').css({"z-index":"-1"}); 
		    		  $("#div_float_show").hide();
		    		  $('#verifyCanvas').remove();
		    		   
		    		}
				
			}
			 

		}); // click end

/* 回车检索 */
function keysearch(event) {
	event = event || window.event;
	var keyCode = event.keyCode;
	if (keyCode == 13) // 回车键的键值为13
		$('#submitExpress').click();
}
