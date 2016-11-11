$(function () {
    //弹窗
    $(".edit-single").click(function () {
        $(".black-modul").show();
        $(".alertBox").show();
        $(".one-menu:eq(0)").addClass("active").siblings().removeClass("active");
    });
    $(".alertBox .confirm-btn").click(function () {
        $(".black-modul").hide();
        $(".alertBox").hide();
        $(".mainBot-right02").show().siblings().hide();
    });
    $(".cancel").click(function () {
        $(".black-modul").hide();
        $(".alertBox").hide();
    });
    $(".one-menu").bind("click", function (event) {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.one-menu-cont:eq(' + index + ')').show().siblings().hide();
        $('.other-count:eq(' + index + ')').show().siblings().hide();
        /*switch 判断sub列表开关*/
        switch (index) {
            case 1:
                $(this).find('ul').show();
                $(this).siblings().find('ul').hide();
                break;
            case 3:
                $(this).find('ul').show();
                $(this).siblings().find('ul').hide();
                break;
            default:
                $(this).siblings().find('ul').hide();
                break;
        }
        event.stopPropagation();
    });

    /*submenu click 事件*/
    $('.sub-menuul-top .sub-menu').bind("click", function (event) {
        $(this).addClass('bg-active').siblings().removeClass('bg-active');
        var index = $(this).index();
        $(".one-menu-cont").hide();
        $('.sub-count:eq(' + index + ')').show().siblings().hide();
        $('.sub-other-count:eq(' + index + ')').show().siblings().hide();
        event.stopPropagation();
    });
    $('.sub-menuul-bot .sub-menu').bind("click", function (event) {
        $(this).addClass('bg-active').siblings().removeClass('bg-active');
        var index = $(this).index();
        $(".one-menu-cont").hide();
        $('.sub-count-bot:eq(' + index + ')').show().siblings().hide();
        event.stopPropagation();
    });
    //message-manager页面
    $(".mess-li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.set-left-count:eq(' + index + ')').show().siblings().hide();
    });
    $(".right-set-li").click(function () {
        $(this).addClass('main-right-nav ul border-active').siblings().removeClass('main-right-nav ul border-active');
        var index = $(this).index();
        $('.right-count-set:eq(' + index + ')').show().siblings().hide();
    });


});



