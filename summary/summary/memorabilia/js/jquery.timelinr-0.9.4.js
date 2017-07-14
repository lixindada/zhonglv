 var activeNum=0;
   (function($) {
        $.fn.extend({
            Scroll: function(opt, callback) {
				
                if (!opt) var opt = {};
                var _btnUp = $("#" + opt.up);
                var _btnDown = $("#" + opt.down);
                var _this = this.eq(0).find("ul:first");
                var lineH = _this.find("li:first").height();
                var line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10);
                var speed = opt.speed ? parseInt(opt.speed, 10) : 550;
                var m = line;
                var count = _this.find("li").length - opt.show;
                var upHeight = line * lineH;

                function scrollUp() {
					
					activeNum=activeNum-1;
					$("#dqlm-con li").eq(activeNum).addClass("second-fzlc-item-active").siblings().removeClass("second-fzlc-item-active");
                    if (!_this.is(":animated")) {
                        if (m > line) {
                            m -= line;
                            _this.animate({
                                marginTop: "+=" + upHeight + "px"
                            }, speed);
                        }
                    }
                }
                function scrollDown() {
					activeNum=activeNum+1;
					$("#dqlm-con li").eq(activeNum).addClass("second-fzlc-item-active").siblings().removeClass("second-fzlc-item-active");
                    if (!_this.is(":animated")) {
                        if (m < count) {
                            m += line;
                            _this.animate({
                                marginTop: "-=" + upHeight + "px"
                            }, speed);
                        }
                    }
                }
                _btnUp.bind("click", scrollUp);
                _btnDown.bind("click", scrollDown);
            }
        });
    })(jQuery);
    $(function() {
        $("#dqlm-con li:first").addClass("second-fzlc-item-active");
        $("#dqlm-con").Scroll({
            line: 1,
            speed: 500,
            up: "btn1",
            down: "btn2",
            show: 5
        });

		$("#dqlm-con").find("li").each(function(i) {
		$(this).hover(function() {
			//alert(i);
			$("#dqlm-con li").eq(activeNum).removeClass("second-fzlc-item-active");
			$(this).addClass("second-fzlc-item-active");
			activeNum = i;
		}, function() {
		})
	})
    });