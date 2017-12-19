/**
 * Created by Administrator on 15-1-23.
 */
(function($){
    var node;   //
    $.fn.capacityFixed = function(options) {
        var opts = $.extend({},$.fn.capacityFixed.deflunt,options);
        var FixedFun = function(element) {
            node = $(element);   //
            if(node.hasClass("patentSearOverview"))   //
            {
                opts.top=640;  //
            }
            var top = opts.top;
            element.css({
                "top":top
            });
            $(window).scroll(function() {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {

                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                }else {
                    element.css({
                        position: "absolute",
                        top: top
                    });
					
					//高亮导航回正
					$('#highlightTable').css("top", "0px");
                }
            });
            element.find(".close-ico").click(function(event){
                element.remove();
                event.preventDefault();
            })
        };
        return $(this).each(function() {
            FixedFun($(this));
        });
    };
    $.fn.capacityFixed.deflunt={
        right : 0,//相对于页面宽度的右边定位
        top:270
    };

})(jQuery);