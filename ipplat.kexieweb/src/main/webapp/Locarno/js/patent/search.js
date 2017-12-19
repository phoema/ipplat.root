//智能检索及表达式检索提示信息
var bdsjsText = "请编写表达式进行检索。";
var znjsText = "请输入任意文本段落进行检索。";
//查看细缆信息
function viewDetail(count) {
    //alert(count);
    var page = $("#startPage").val();
    var limit = $("#limit").val();
    var record = (page - 1) * limit + count;
    //$("#recordCursor").val(record);


    //sr_拼一下那个显示不出来的form  detailSearch
    //0、拼接html下次再用之前要清空一下
    $('#detailSearch').html("");

    //1、获得这个显示不出来的form里面input隐藏域的值
    var strWhereN = $("input[name='strWhere']").val();
    var startN = $("input[name='start']").val();
    var recordCursorN = $("input[name='recordCursor']").val();
    var limitN = $("input[name='limit']").val();
    var optionN = $("input[name='option']").val();
    var iHitPointTypeN = $("input[name='iHitPointType']").val();
    var strSortMethodN = $("input[name='strSortMethod']").val();
    var strSourcesN = $("input[name='strSources']").val();
    var strSynonymousN = $("input[name='strSynonymous']").val();
    var yuyijsN = $("input[name='yuyijs']").val();
    var filterChannelN = $("input[name='filterChannel']").val();
//    alert("strWhereN" + strWhereN);
//    alert("startN" + startN);
//    alert("recordCursorN" + recordCursorN);
//    alert("limitN" + limitN);
//    alert("optionN" + optionN);
//    alert("iHitPointTypeN" + iHitPointTypeN);
//    alert("strSortMethodN" + strSortMethodN);
//    alert("strSourcesN" + strSourcesN);
//    alert("strSynonymousN" + strSynonymousN);
//    alert("yuyijsN" + yuyijsN);
//    alert("filterChannelN" + filterChannelN);
 
    //2、将这些值赋给母版页的那个from  detailSearch 
    var $v1 = $('<input id="strWhere" type="hidden" value="' + strWhereN + '" name="strWhere">');

    var $v2 = $('<input id="strSources" type="hidden" value="' + strSourcesN + '" name="strSources">');
    var $v3 = $('<input id="recordCursor" type="hidden" value="' + record + '" name="recordCursor">'); //注意这里的值是现成算的 并不是读的隐藏域的值
    var $v4 = $('<input type="hidden" value="' + limitN + '" name="limit">');
    var $v5 = $('<input type="hidden" value="' + optionN + '" name="option">');
    var $v6 = $('<input type="hidden" value="' + iHitPointTypeN + '" name="iHitPointType">');
    var $v7 = $('<input type="hidden" value="' + strSortMethodN + '" name="strSortMethod">');
    var $v8 = $('<input type="hidden" value="' + strSynonymousN + '" name="strSynonymous">');
    var $v9 = $('<input type="hidden" value="' + yuyijsN + '" name="yuyijs">');
    var $v10 = $('<input type="hidden" value="' + filterChannelN + '" name="filterChannel">');

    $('#detailSearch').append($v1);
    $('#detailSearch').append($v2);
    $('#detailSearch').append($v3);
    $('#detailSearch').append($v4);
    $('#detailSearch').append($v5);
    $('#detailSearch').append($v6);
    $('#detailSearch').append($v7);
    $('#detailSearch').append($v8);
    $('#detailSearch').append($v9);
    $('#detailSearch').append($v10);
 
    $("#detailSearch").submit();
}

//查看细缆信息
function viewDetailLeg(count, an) {
    var page = $("#startPage").val();
    var record = (page - 1) * 10 + count;
    $("#strWhere").val("申请号=(" + an + ")");
    $("#an").val(an);
    //$("#recordCursor").val(record);
    //alert($("#an").val());
    $("#detailSearch").submit();
}

//细缆翻页
function MoveTo(pageIndex) {
    //	alert(pageIndex);
    var current = $("#recordCursor").val();
    var totalCount = $("#paramCount").val();
    //	alert(parseInt(current));
    //alert(parseInt(pageIndex));
    var now = parseInt(current) + parseInt(pageIndex);
    //alert(now);
    if (now < 0) return;
    if (now >= totalCount) return;
    $("#recordCursor").val(now)
    $("#detailSearchForm").submit();
}

//外观细缆查看大图
function viewMainImg(num) {
    var path = $("#thumbnailImage" + num).attr("src");
    var linkpath = path.replace("ThumbnailImage", "books");
    //viewbigpic(linkpath);
    //$("#linkpath").attr("href",linkpath);
    $("#mainImg").attr("src", linkpath);
}
//表格检索提交表单
function checkSearchForm() {
    if (validLogicInput()) {
        $(".content").mask('请稍候...');
        $("#searchForm").submit();
    } else {
        return false;
    }
}

//查看专利信息
function viewPatent(an) {
    $("#strPatentAn").val(an);
    $("#viewPatentForm").submit();
}

//查看专利信息
function viewPatentByPn(pn) {
    $("#strPatentPn").val(pn);
    $("#viewPatentByPnForm").submit();
}

function addItems(item) {
    var start = $("#textarea_start").val();
    var v = $("#txtComb").val();
    var v2 = v.substr(0, start) + item + v.substr(start, v.length);
    //设置光标位置
    start = (v.substr(0, start) + item).length;
    setTimeout(function () {
        $("#txtComb").val(v2);
        $("#txtComb").focus();
        //		$("#textarea_start").val(start);
    }, 0);
}
//专利分析
function analyse() {
    var count = $("#recordTotalCount").text();
    if (count > 5000) {
        alert('专利分析量大于50000不能进行分析');
        return;
    }
    $("#analyseForm").submit();
}

//实施许可合同备案
function checkContractForm() {
    if (!checkSession()) {
        var tmpHPage = document.location.href.split("/");
        var thisHPage = tmpHPage[tmpHPage.length - 1];
        openLoginWin(thisHPage);
        return false;
    }
    if (!checkAuthority()) {
        alert("您所在的权限组不能使用该功能！");
        return false;
    }


    String.prototype.trim = function () {
        // 用正则表达式将前后空格  
        // 用空字符串替代。  
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    var strWhere = "";
    //申请号
    var an = $("#strAnC").val();
    if (an != "") {
        an = an.trim().toLowerCase();
        if (an.length > 2 && an.substring(0, 2) != "cn") {
            an = "CN" + an;
        }
        strWhere = "申请号=(%" + an.replace("cn", "").replace("CN", "") + "%)";
    }
    //名称
    var ti = $("#strTiC").val();
    if (ti != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 名称=(" + ti + ")";
        } else {
            strWhere = "名称=(" + ti + ")";
        }
    }
    //IPC
    var ipc = $("#strIPCC").val();
    if (ipc != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 分类号=(" + ipc + ")";
        } else {
            strWhere = "分类号=(" + ipc + ")";
        }
    }

    //摘要
    var abs = $("#strAbsC").val();
    if (abs != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 摘要=(" + abs + ")";
        } else {
            strWhere = "摘要=(" + abs + ")";
        }
    }

    //主权项
    var cl = $("#strClC").val();
    if (cl != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 主权项=(" + cl + ")";
        } else {
            strWhere = "主权项=(" + cl + ")";
        }
    }

    //备案阶段
    //生效
    var effective = $("#effectiveC").attr("checked");
    //变更
    var change = $("#changeC").attr("checked");
    //注销
    var canceled = $("#canceledC").attr("checked");
    var str_2 = "";
    if (effective && change && canceled) {
        str_2 = "(备案阶段=(生效) or 备案阶段=(变更) or 备案阶段=(注销))";
    } else if (effective && change) {
        str_2 = "(备案阶段=(生效) or 备案阶段=(变更))";
    } else if (effective && canceled) {
        str_2 = "(备案阶段=(生效) or 备案阶段=(注销))";
    } else if (change && canceled) {
        str_2 = "(备案阶段=(变更) or 备案阶段=(注销))";
    } else if (effective) {
        str_2 = "备案阶段=(生效)";
    } else if (change) {
        str_2 = "备案阶段=(变更)";
    } else if (canceled) {
        str_2 = "备案阶段=(注销)";
    }

    if (strWhere != "") {
        if (str_2 == "") {
            strWhere = strWhere;
        } else {
            strWhere = strWhere + " and " + str_2;
        }
    } else {
        strWhere = str_2;
    }

    //让与人
    var grantor = $("#strGrantorC").val();
    if (grantor != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 让与人=(" + grantor + ")";
        } else {
            strWhere = "让与人=(" + grantor + ")";
        }
    }

    //受让人
    var assignee = $("#strAssigneeC").val();
    if (assignee != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 受让人=(" + assignee + ")";
        } else {
            strWhere = "受让人=(" + assignee + ")";
        }
    }

    //当前受让人
    var assigneeCurrent = $("#strAssigneeCurrentC").val();
    if (assigneeCurrent != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 当前受让人=(" + assigneeCurrent + ")";
        } else {
            strWhere = "当前受让人=(" + assigneeCurrent + ")";
        }
    }

    //许可种类
    var licensetype = $("#strLicensetypeC").val();
    if (licensetype != "") {
        var str = "";
        if (licensetype == "1") {
            str = "独占许可";
        } else if (licensetype == "2") {
            str = "排他许可";
        } else if (licensetype == "3") {
            str = "普通许可";
        } else if (licensetype == "4") {
            str = "分许可";
        } else if (licensetype == "5") {
            str = "交叉许可";
        }
        if (strWhere != "") {
            strWhere = strWhere + " and 许可种类=(" + str + ")";
        } else {
            strWhere = "许可种类=(" + str + ")";
        }
    }

    //合同备案号
    var recordNum = $("#strRecordNumC").val();
    if (recordNum != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 合同备案号=(" + recordNum + ")";
        } else {
            strWhere = "合同备案号=(" + recordNum + ")";
        }
    }

    //备案日
    var recorddate = $("#strRecorddateC").val();
    if (recorddate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 备案日=(" + recorddate + ")";
        } else {
            strWhere = "备案日=(" + recorddate + ")";
        }
    }

    //变更日
    var changedate = $("#strChangedateC").val();
    if (changedate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更日=(" + changedate + ")";
        } else {
            strWhere = "变更日=(" + changedate + ")";
        }
    }

    //解除日
    var relievedate = $("#strRelievedateC").val();
    if (relievedate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 解除日=(" + relievedate + ")";
        } else {
            strWhere = "解除日=(" + relievedate + ")";
        }
    }


    if (strWhere == "") {
        alert("检索条件不能为空");
        return false;
    } else {
        $("#strWhereC").val(strWhere);
        //$("#searchContract").submit();
    }

}

//质押保全
function checkPledgeForm() {
    if (!checkSession()) {
        var tmpHPage = document.location.href.split("/");
        var thisHPage = tmpHPage[tmpHPage.length - 1];
        openLoginWin(thisHPage);
        return false;
    }

    if (!checkAuthority()) {
        alert("您所在的权限组不能使用该功能！");
        return false;
    }


    String.prototype.trim = function () {
        // 用正则表达式将前后空格  
        // 用空字符串替代。  
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    var strWhere = "";
    //申请号
    var an = $("#strAnL").val();
    if (an != "") {
        an = an.trim().toLowerCase();
        if (an.length > 2 && an.substring(0, 2) != "cn") {
            an = "CN" + an;
        }
        strWhere = "申请号=(%" + an.replace("cn", "").replace("CN", "") + "%)";
    }
    //名称
    var ti = $("#strTiL").val();
    if (ti != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 名称=(" + ti + ")";
        } else {
            strWhere = "名称=(" + ti + ")";
        }
    }
    //IPC
    var ipc = $("#strIPCL").val();
    if (ipc != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 分类号=(" + ipc + ")";
        } else {
            strWhere = "分类号=(" + ipc + ")";
        }
    }

    //摘要
    var abs = $("#strAbsL").val();
    if (abs != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 摘要=(" + abs + ")";
        } else {
            strWhere = "摘要=(" + abs + ")";
        }
    }

    //主权项
    var cl = $("#strClL").val();
    if (cl != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 主权项=(" + cl + ")";
        } else {
            strWhere = "主权项=(" + cl + ")";
        }
    }


    //质押保全类型
    //质押
    var pledge = $("#pledgeL").attr("checked");
    //保全
    var preservation = $("#preservationL").attr("checked");

    var str_1 = "";
    if (pledge && preservation) {
        str_1 = " (类型=(质押) or 类型=(保全))";
    } else if (pledge) {
        str_1 = "类型=(质押)";
    } else if (preservation) {
        str_1 = "类型=(保全)";
    }

    if (strWhere != "") {
        if (str_1 == "") {
            strWhere = strWhere;
        } else {
            strWhere = strWhere + " and " + str_1;
        }
    } else {
        strWhere = str_1;
    }

    //生效日
    var effecdate = $("#strEffecdateL").val();
    if (effecdate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 生效日=(" + effecdate + ")";
        } else {
            strWhere = "生效日=(" + effecdate + ")";
        }
    }

    //变更日
    var changedate = $("#strChangedateL").val();
    if (changedate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更日=(" + changedate + ")";
        } else {
            strWhere = "变更日=(" + changedate + ")";
        }
    }

    //解除日
    var relievedate = $("#strRelievedateL").val();
    if (relievedate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 解除日=(" + relievedate + ")";
        } else {
            strWhere = "解除日=(" + relievedate + ")";
        }
    }

    //合同状态
    //生效
    var effective = $("#effectiveL").attr("checked");
    //变更
    var change = $("#changeL").attr("checked");
    //注销
    var canceled = $("#canceledL").attr("checked");
    var str_2 = "";
    if (effective && change && canceled) {
        str_2 = "(合同状态=(生效) or 合同状态=(变更) or 合同状态=(注销))";
    } else if (effective && change) {
        str_2 = "(合同状态=(生效) or 合同状态=(变更))";
    } else if (effective && canceled) {
        str_2 = "(合同状态=(生效) or 合同状态=(注销))";
    } else if (change && canceled) {
        str_2 = "(合同状态=(变更) or 合同状态=(注销))";
    } else if (effective) {
        str_2 = "合同状态=(生效)";
    } else if (change) {
        str_2 = "合同状态=(变更)";
    } else if (canceled) {
        str_2 = "合同状态=(注销)";
    }

    if (strWhere != "") {
        if (str_2 == "") {
            strWhere = strWhere;
        } else {
            strWhere = strWhere + " and " + str_2;
        }
    } else {
        strWhere = str_2;
    }

    //合同登记号
    var contractNum = $("#strContractNumL").val();
    if (contractNum != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 合同登记号=(" + contractNum + ")";
        } else {
            strWhere = "合同登记号=(" + contractNum + ")";
        }
    }

    //出质人
    var pledgor = $("#strPledgorL").val();
    if (pledgor != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 出质人=(" + pledgor + ")";
        } else {
            strWhere = "出质人=(" + pledgor + ")";
        }
    }

    //质权人
    var pledgee = $("#strPledgeeL").val();
    if (pledgee != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 质权人=(" + pledgee + ")";
        } else {
            strWhere = "质权人=(" + pledgee + ")";
        }
    }

    //当前质权人
    var pledgeeCurrent = $("#strPledgeeCurrentL").val();
    if (pledgeeCurrent != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 当前质权人=(" + pledgeeCurrent + ")";
        } else {
            strWhere = "当前质权人=(" + pledgeeCurrent + ")";
        }
    }

    if (strWhere == "") {
        alert("检索条件不能为空");
        return false;
    } else {
        //alert(strWhere);
        $("#strWhereL").val(strWhere);
        //$("#searchPledge").submit();
    }

}


//权力转移
function checkPowerForm() {
    if (!checkSession()) {
        var tmpHPage = document.location.href.split("/");
        var thisHPage = tmpHPage[tmpHPage.length - 1];
        openLoginWin(thisHPage);
        return false;
    }

    if (!checkAuthority()) {
        alert("您所在的权限组不能使用该功能！");
        return false;
    }


    String.prototype.trim = function () {
        // 用正则表达式将前后空格  
        // 用空字符串替代。  
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    var strWhere = "";
    //申请号
    var an = $("#strAnP").val();
    if (an != "") {
        an = an.trim().toLowerCase();
        if (an.length > 2 && an.substring(0, 2) != "cn") {
            an = "CN" + an;
        }
        strWhere = "申请号=(%" + an.replace("cn", "").replace("CN", "") + "%)";
    }

    //alert(strWhere);
    //名称
    var ti = $("#strTiP").val();
    if (ti != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 名称=(" + ti + ")";
        } else {
            strWhere = "名称=(" + ti + ")";
        }
    }
    //IPC
    var ipc = $("#strIPCP").val();
    if (ipc != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 分类号=(" + ipc + ")";
        } else {
            strWhere = "分类号=(" + ipc + ")";
        }
    }

    //摘要
    var abs = $("#strAbsP").val();
    if (abs != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 摘要=(" + abs + ")";
        } else {
            strWhere = "摘要=(" + abs + ")";
        }
    }

    //主权项
    var cl = $("#strClP").val();
    if (cl != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 主权项=(" + cl + ")";
        } else {
            strWhere = "主权项=(" + cl + ")";
        }
    }
    //alert(strWhere);
    //转移类型
    //申请权的转移
    var appright = $("#apprightP").attr("checked");
    //专利权的转移
    var patentright = $("#patentrightP").attr("checked");
    var str_1 = "";
    if (appright && patentright) {
        str_1 = "(转移类型=(申请权) or 转移类型=(专利权))";
    } else if (appright) {
        str_1 = "转移类型=(申请权)";
    } else if (patentright) {
        str_1 = "转移类型=(专利权)";
    }
    if (strWhere != "") {
        if (str_1 == "") {
            strWhere = strWhere;
        } else {
            strWhere = strWhere + " and " + str_1;
        }
    } else {
        strWhere = str_1;
    }
    //alert(strWhere);

    //法律状态公告日
    //var legdate=$("#strLegDateP").val();
    //if(legdate!=""){
    //	if(strWhere!=""){
    //		strWhere=strWhere+" and 法律状态公告日=("+legdate+")";
    //	}else{
    //		strWhere="法律状态公告日=("+legdate+")";
    //	}
    //}

    //区域变更前地址
    var areabefor = $("#strAreaBeforP").val();
    if (areabefor != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更前地址=(" + areabefor + ")";
        } else {
            strWhere = "变更前地址=(" + areabefor + ")";
        }
    }

    //区域变更后地址
    var areaafter = $("#strAreaAfterP").val();
    if (areaafter != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更后地址=(" + areaafter + ")";
        } else {
            strWhere = "变更后地址=(" + areaafter + ")";
        }
    }

    //区域当前地址
    var areacurrent = $("#strAreaCurrentP").val();
    if (areacurrent != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 当前地址=(" + areacurrent + ")";
        } else {
            strWhere = "当前地址=" + areacurrent + ")";
        }
    }

    //变更前权利人
    var changebefor = $("#strChangeBeforP").val();
    if (changebefor != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更前权利人=(" + changebefor + ")";
        } else {
            strWhere = "变更前权利人=(" + changebefor + ")";
        }
    }

    //变更后权利人
    var changeafter = $("#strChangeAfterP").val();
    if (changeafter != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 变更后权利人=(" + changeafter + ")";
        } else {
            strWhere = "变更后权利人=(" + changeafter + ")";
        }
    }

    //当前权利人
    var current = $("#strCurrentP").val();
    if (current != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 当前权利人=(" + current + ")";
        } else {
            strWhere = "当前权利人=(" + current + ")";
        }
    }

    //生效日
    var effecdate = $("#strEffecdateP").val();
    if (effecdate != "") {
        if (strWhere != "") {
            strWhere = strWhere + " and 生效日=(" + effecdate + ")";
        } else {
            strWhere = "生效日=(" + effecdate + ")";
        }
    }
    //alert(strWhere);
    if (strWhere == "") {
        alert("检索条件不能为空");
        return false;
    } else {
        $("#strWhereP").val(strWhere);
        //$("#searchPower").submit();
    }
}

//查询法律状态
function checkLegalForm() {
    String.prototype.trim = function () {
        // 用正则表达式将前后空格  
        // 用空字符串替代。  
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }


    var strWhere = "";
    var an = $("#strAn").val();
    if (an != "") {
        an = an.trim().toLowerCase();
        if (an.length > 2 && an.substring(0, 2) != "cn") {
            an = "CN" + an;
        }
        strWhere = "申请号=(" + an + "%)";
    }
    var pd = $("#strPd").val();
    if (pd != "") {
        /*var pattern = /^[0-9]{2,4}[.-]?[0-9]{0,2}[.-]?[0-9]{0,2}$/
        var r = pd.match(pattern); 
        if(r==null){alert('日期格式错误');return false;}*/
        if (strWhere != "") {
            strWhere += " and 法律状态公告日=(" + pd + ")";
        } else {
            strWhere = "法律状态公告日=(" + pd + ")";
        }
    }
    var statusInfo = $("#strStatus").val();
    if (statusInfo != "") {
        if (strWhere != "") {
            strWhere += " and 法律状态=(" + statusInfo + ")";
        } else {
            strWhere = "法律状态=(" + statusInfo + ")";
        }
    }
    var info = $("#strStatusinfo").val();
    if (info != "") {
        if (strWhere != "") {
            strWhere += " and 法律状态信息=(" + info + ")";
        } else {
            strWhere = "法律状态信息=(" + info + ")";
        }
    }

    if (strWhere == "") {
        alert("检索条件不能为空");
        return false;
    } else {
        $("#strWhere").val(strWhere);
        //$("#searchLegal").submit();
    }
}

//检索表格条件解析
function validLogicInput() {
    var fieldShortName = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
    var fieldName = ["申请号", "申请日", "公开（公告）号", "公开（公告）日", "名称", "摘要", "主分类号", "分类号", "申请（专利权）人", "发明（设计）人", "优先权", "地址", "专利代理机构", "代理人", "国省代码", "同族专利项", "权利要求书", "说明书", "ss"]
    var i = 0;
    var searchCond = "";
    var channelCnt = 0;
    $("input[name='channelId']").each(function () {
        if ($(this).attr("checked") == true) {
            channelCnt++;
        }
    });
    if (channelCnt == 0) {
        alert('检索频道不能为空');
        return false;
    }
    var logicText = $("#txtComb").val();
    if (logicText != "") {
        searchCond = "(" + logicText + ")";
    }
    $(fieldShortName).each(function () {
        var idFlag = "#txt_" + this;
        var param = jQuery.trim($(idFlag).val());
        if (param != '') {
            if (this == "A" || this == "C") {
                param = isAppendCN(param);
            }
            if (searchCond == "") {
                searchCond = fieldName[i] + "=(" + param + ")";
            } else {
                var tempExp = fieldName[i] + "=(" + param + ")";
                if (searchCond.indexOf(tempExp) == -1) {
                    searchCond += " and " + tempExp;
                }
            }

        }
        //		if(this=='S' && param!=''){
        //			$("#yuyijs").val(1);
        //		}
        i++;
    });
    if (searchCond == '') {
        alert("请输入检索条件")
        return false;
    } else {
        searchCond = $.trim(searchCond);
        var leftF = 0;
        var rightF = 0;
        for (var i = 0; i < searchCond.length; i++) {
            var k = searchCond.charAt(i);
            if (k == "(") {
                leftF = leftF + 1;
            } else if (k == ")") {
                rightF = rightF + 1;
            }
        }
        if (leftF != rightF) {
            alert("表达式括号不匹配，请仔细检查表达式！");
            return false;
        }
        //alert(searchCond);
        $("#strWhere").val(searchCond);
        return true;
    }

}

/**
* 将表格内容出入到逻辑输入框内
*/
function insertItem(num) {
    if ($("#cli3").attr("class") == "bgss_more") {
        return;
    }
    var fieldShortName = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
    var fieldName = ["申请号", "申请日", "公开（公告）号", "公开（公告）日", "名称", "摘要", "主分类号", "分类号", "申请（专利权）人", "发明（设计）人", "优先权", "地址", "专利代理机构", "代理人", "国省代码", "同族专利项", "权利要求书", "说明书", "ss"]
    var text = jQuery.trim($("#txt_" + fieldShortName[num]).val());
    if (text == "") {
        alert("请输入检索内容");
        return;
    } else {
        if (num == 0 || num == 2) { text = isAppendCN(text) + '%'; }
        text = fieldName[num] + "=(" + text + ")";
        //alert(text);
        var start = $("#textarea_start").val();
        var v = $("#txtComb").val();
        var v2 = v.substr(0, start) + " " + text + " " + v.substr(start, v.length);
        //设置光标位置
        start = (v.substr(0, start) + item).length;
        setTimeout(function () {
            $("#txtComb").val(v2);
            $("#txtComb").focus();
            //			$("#textarea_start").val(start);
        }, 0);
    }
}


//频道号的全选与取消
function checkall() {
    if ($("#allchannels").attr("checked") == true) {
        $("input[name='channelId']").each(function () {
            $(this).attr("checked", true);
        });
    } else {
        $("input[name='channelId']").each(function () {
            $(this).attr("checked", false);
        });
    }
}

//国内国外数据库可检索字段的判定
function checkInputStatus() {
}

/**
* @param {} s1 被替换的字符串
* @param {} s2 替换为
* @return {}
*/
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

function delHis(ele, id) {
    if (confirm("确定删除此历史表达式？")) {
        var url = "/searchhis!delHis.action";
        var returnText = ajaxCallBySync(url, "id=" + id);
        if (returnText != "") {
            var array = eval("[" + returnText + "]");
            if (array[0].success) {
                alert(array[0].msg);
            }
            else {
                alert(array[0].msg);
            }
        }
        else {
            alert("删除失败，请检查网络！");
        }
        //刷新页面
        window.location.reload();
    }
}
function preHisPage(cindex) {
    if (cindex > 1) {
        $("#expressionList").empty();
        createHisTableByPages(hisDatas, --curHisDatasPages);
    }
}
function nextHisPage(cindex) {
    if (cindex < (hisDatas.length / 5)) {
        $("#expressionList").empty();
        createHisTableByPages(hisDatas, ++curHisDatasPages);
    }
}

function useExp(uuid) {
    $.getJSON('searchhis!findById.action?rd=' + Math.random(), {
        id: uuid
    }, function (json) {
        if (json.searchHis) {
            var v = $("#txtComb").val();
            $("#txtComb").val(v + "(" + json.searchHis.trsExp + ")");
        }
    });
}
function createHisTableByPages(array, index) {
    var pages = (array && array.length > 0) ? Math.floor((array.length - 1) / 5) + 1 : 1;
    if (pages > 1 && index > 1) {
        $("#his_up_btn").attr("class", "up_btn_b");
    } else {
        $("#his_up_btn").attr("class", "up_btn");
    }
    if (index < pages) {
        $("#his_down_btn").attr("class", "down_btn_b");
    } else {
        $("#his_down_btn").attr("class", "down_btn");
    }
    for (var i = (index - 1) * 5, j = 0; i < array.length && i < index * 5; i++, j++) {
        var tbl = document.getElementById("expressionList");
        var row = tbl.insertRow(j);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var tmpTitle = array[i].disExp + "";
        if (tmpTitle) {
            if (tmpTitle.length > 20) {
                tmpTitle = tmpTitle.substr(0, 20) + "...";
            }
        }
        cell0.innerHTML = "<td title=\"" + array[i].disExp + "\"><a href='javascript:noAction()' onclick='useExp(\"" + array[i].uuid + "\")'>" + tmpTitle + "</a></td>";
        //cell1.innerHTML = "<td><button  id='renameHis"+i+"' class=\"new_name\" onclick=\"reNameHis('renameHis"+i+"','"+array[i].uuid+"')\">  </button></td>";
        cell1.innerHTML = "<td>&nbsp;</td>";
        cell2.innerHTML = "<td><input type=\"button\" title='浏览专利' id='viewHis" + i + "' onclick='window.open(\"search!searchByHisId.action?id=" + array[i].uuid + "\")' class=\"views\" ></td>";
        cell3.innerHTML = "<td>&nbsp;</td>";
        cell0.style.width = "250px";
    }
}
/**
function _checkBQ(){
if($("#preservationL").attr("checked")==true){
$("#effectiveL").attr("disabled","disabled");
$("#strChangedateL").attr("disabled","disabled");
$("#strContractNumL").attr("disabled","disabled");
$("#strPledgorL").attr("disabled","disabled");
$("#strPledgeeL").attr("disabled","disabled");
$("#strPledgeeCurrentL").attr("disabled","disabled");
		
}
}
**/
$(document).ready(function () {
    /**
    $(document).keydown(function(event){  
    if(event.keyCode==13){ 
    //checkSearchForm(); 
    return false;
    }  
    }); **/

    $("#txtComb").select(function () {
        $("#textarea_start").val($("#txtComb").selection().start);
    })
    $("#txtComb").click(function () {
        $("#textarea_start").val($("#txtComb").selection().start);
    })
    $("#txtComb").focus(function () {
        $("#textarea_start").val($("#txtComb").selection().start);
    })
});