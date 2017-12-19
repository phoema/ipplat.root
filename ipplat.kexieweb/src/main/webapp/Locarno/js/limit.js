jQuery.fn.limit=function(){  
    var self = $("span[limit]");  
    self.each(function(){  
        var objString = jQuery.trim($(this).text());  
        var objLength = objString.length;  
        var num = $(this).attr("limit");  
        if(objLength > num){  
$(this).attr("title",objString);  
            objString = $(this).text(objString.substring(0,num) + "...");  
        }  
    })  
} 
$(function(){  
	$(document.body).limit();  
})