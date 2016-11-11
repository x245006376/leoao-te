$(function () {
    var proTab=$("#pro-tabs li");
    proTab.click(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".pro-page").eq(index).show().siblings().hide();
    });
    $(".pro-page").eq(0).show().siblings().hide();
    $(".to-1-2").click(function () {
        proTab.eq(1).trigger("click")
    });
    $(".to-1-1").click(function () {
        proTab.eq(0).trigger("click")
    });
    $(".to-1-3").click(function () {
        proTab.eq(2).trigger("click")
    });
    $(".re-1-2").click(function () {
        $(".step-2").show().siblings().hide();
    });
    $(".re-1-1").click(function () {
        $(".step-1").show().siblings().hide();
    });
    $(".re-1-3").click(function () {
        $(".step-3").show().siblings().hide();
    });
});
