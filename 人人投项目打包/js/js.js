/**
 * Created by hxsd on 2016/8/12.
 */
$(function (){
//新手指导里面的选项卡切换
    $("#newHand li").click(function (){
        var index=$(this).index();
        $(this).addClass("black").siblings().removeClass("black");
        $(".page:eq("+index+")").show().siblings().hide();
    });
//项目内容页面里面整体选项卡的切换
    $("#neirong li").click(function (){
        var index=$(this).index();
        $(this).addClass("bg").siblings().removeClass("bg");
        $(".yemian:eq("+index+")").show().siblings().hide();
    });
//融资动态页面里面的选项卡切换
    $(".neirong .dianji").click(function (){
        var index=$(this).index();
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".neirong .view:eq("+index+")").show().siblings().hide();
    });
//点击top里面的登录按钮跳出登录框
    $(".index .login:not('.dengluhou')").click(function (){
        $(".index .kuang").show();
    });
//点击登录框的立即登录按钮，登录框消失，top里面内容切换为indexhou的内容
    $(".index .now").click(function (){
        $(".index .page:eq(0)").hide();
        $(".index .page:eq(1)").show();
        $("body").addClass("indexhou");
        $(".index .kuang").hide();
    });
//点击弹出框的X，弹框消失
    $(".index .cha").click(function (){
        $(".index .kuang").hide();
    });
//点击会员中心，显示出下拉菜单
    $(".index .dengluhou").click(function (){
        $(".index .menu").show();
    });
});
