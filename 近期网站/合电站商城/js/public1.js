/**
 * Created by hxsd on 2016/8/24.
 */
/*头部展示分类产品*/
$(document).ready(function(){
    var cate=$(".header .category");
    cate.data("flag",true);/*控制显示三角和产品类别菜单*/
    cate.bind("click",function(){
        if(cate.data("flag")){/*第一次点击,三角方向改变，显示产品菜单*/
            $(this).find("img").attr("src","../../images/downTriangle.png");
            $(".header .popCategory").css("display","block");
        }else{
            $(this).find("img").attr("src","../../images/upTriangle.png");
            $(".header .popCategory").css("display","none");
        }
        cate.data("flag",!cate.data("flag"));
    });


    /*显示分类弹窗*/
    var popCategoryNav=$(".popCategory>ul a");
    var popCategoryInfo=$(".popCategory .categoryInfo");


    popCategoryNav.bind("mouseover",function(){
        (function(){
            for(var i=0;i<popCategoryNav.length;i++){
                popCategoryNav.eq(i).removeClass("navActive");
                popCategoryInfo.css("display","none");
            }
        })();
        $(this).addClass("navActive");
        popCategoryInfo.css("display","block");
        popCategoryInfo.data("currentNav",$(this));
        popCategoryInfo.find("a").eq(0).html($(this).html().substr(0,$(this).html().length-17));
        $(this).find("img").attr("src","../../images/home_whitesanjiao.png");
        popCategoryInfo.bind("mouseover",function(){
            $(this).css("display","block");
            $(this).data("currentNav").addClass("navActive");
            $(this).data("currentNav").find("img").attr("src","../../images/home_whitesanjiao.png");
        });
    });
    popCategoryNav.bind("mouseout",function(){
        (function(){
            for(var i=0;i<popCategoryNav.length;i++){
                popCategoryNav.eq(i).removeClass("navActive");
                popCategoryInfo.css("display","none");
                popCategoryInfo.data("currentNav").find("img").attr("src","../../images/home_sanjiao.png");
            }
        })();
    });
    popCategoryInfo.bind("mouseout",function(){
        $(this).css("display","none");
        $(this).data("currentNav").removeClass("navActive");
        $(this).data("currentNav").find("img").attr("src","../../images/home_sanjiao.png");
    });
});
