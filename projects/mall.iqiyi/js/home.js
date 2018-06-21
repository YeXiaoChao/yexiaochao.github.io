$(document).ready(function () {
    //默认搜索框值
    var searchValue = $(".search_txt").val();
    var hideValue = $("input[name='keyword']").val();
    if (searchValue == "") {
        $(".search_txt").val(hideValue);
    }
    $(".search_txt").focus(function () {
        if ($(".search_txt").val() == hideValue) {
            $(".search_txt").val("");
        }
    }).blur(function () {
        if ($(".search_txt").val() == "") {
            $(".search_txt").val(hideValue);
        }
    });
    //定时收回大的广告位
    setTimeout(function () {
        $(".big_topBanner").animate({ height: '60px' }, function () {
            $(".big_topBanner").hide();
            $(".small_topBanner").css({ "height": "60px" });
            $(".topbanner_fold").removeClass("topbanner_unfold");
            $(".topbanner_fold").html("展开");
        });
    }, 3000);
    //展开和收起大的广告位
    $(".topbanner_fold").click(function () {
        if ($(".big_topBanner").css('display') == 'block') {
            $(".big_topBanner").animate({ height: '60px' }, function () {
                $(".big_topBanner").hide();
                $(".small_topBanner").css({ "height": "60px" });
                $(".topbanner_fold").removeClass("topbanner_unfold");
                $(".topbanner_fold").html("展开");
            });
        } else {
            $(".small_topBanner").css({ "height": "0px" });
            $(".topbanner_fold").addClass("topbanner_unfold");
            $(".topbanner_fold").html("收起");
            $(".big_topBanner").show();
            $(".big_topBanner").animate({ height: '400px' });
        }
    });
    //鼠标指针浮动和离开元素上的事件
    $(".watch_link").mouseover(function () {
        $(".topNav_watchBox").removeClass("dn");
        $(".topNav_watch").addClass("topNav_watch-hover");
    }).mouseout(function () {
        $(".topNav_watchBox").addClass("dn");
        $(".topNav_watch").removeClass("topNav_watch-hover");
    });
    //定时循环显示 头部右边的广告位
    var headerPro = setInterval("headerProFunc()", 2000);
    $(".header-right").mouseover(function () {
        clearInterval(headerPro);
    }).mouseout(function () {
        headerPro = setInterval("headerProFunc()", 2000);
    });
    $(".header-right .arrow-left").click(function () {
        headerProFunc();
    });
    $(".header-right .arrow-right").click(function () {
        headerProFunc();
    });

    $(".actRule").click(function () {
        $("#OVERLAYBOX").show();
        $("#POPBOX").show();
    });
    $(".modPup_close").click(function () {
        hidePOPBOX();
    });
    $(".modPup_btn .btn-y").click(function () {
        hidePOPBOX();
    });
    //动态广告位
    var newFocusPro = setInterval("newFocusNextFunc()", 5000);
    $(".new-focus-li").mouseover(function () {
        clearInterval(newFocusPro);
    }).mouseout(function () {
        newFocusPro = setInterval("newFocusNextFunc()", 5000);
    });
    $(".new-trigger-dot").on("click", function () {
        var index = $(this).index();
        $(".new-trigger-dot").removeClass("active");
        $(this).addClass("active");
        $(".new-focus-li-show").removeClass("new-focus-li-show").addClass("new-focus-li-hide").fadeOut();
        $(".new-focus-li").eq(index).removeClass("new-focus-li-hide").addClass("new-focus-li-show").fadeIn();
    });
    $(".new-focus-prev").on("click", function () {
        newFocusPrevFunc()
    });
    $(".new-focus-next").on("click", function () {
        newFocusNextFunc();
    });
});

var headerProFunc = function () {
    if ($(".header-pro li.active").css('display') == 'block') {
        $(".header-pro li.active").hide();
        $(".header-pro li.active").next().show();
    } else {
        $(".header-pro li.active").next().hide();
        $(".header-pro li.active").show();
    }
}
var hidePOPBOX = function () {
    $("#OVERLAYBOX").hide();
    $("#POPBOX").hide();
}

var triggerIndex = 0;
var newFocusNextFunc = function () {
    var triggerLength = $(".new-focus-li").length;
    triggerIndex++;
    if (triggerIndex == triggerLength) {
        triggerIndex = 0;
    }
    $(".new-trigger-dot").removeClass("active");
    $(".new-trigger-dot").eq(triggerIndex).addClass("active");
    $(".new-focus-li-show").removeClass("new-focus-li-show").addClass("new-focus-li-hide").fadeOut();
    $(".new-focus-li").eq(triggerIndex).removeClass("new-focus-li-hide").addClass("new-focus-li-show").fadeIn();
}
var newFocusPrevFunc = function () {
    var triggerLength = $(".new-focus-li").length;
    if (triggerIndex == 0) {
        triggerIndex = triggerLength;
    }
    triggerIndex--;
    $(".new-trigger-dot").removeClass("active");
    $(".new-trigger-dot").eq(triggerIndex).addClass("active");
    $(".new-focus-li-show").removeClass("new-focus-li-show").addClass("new-focus-li-hide").fadeOut();
    $(".new-focus-li").eq(triggerIndex).removeClass("new-focus-li-hide").addClass("new-focus-li-show").fadeIn();
}