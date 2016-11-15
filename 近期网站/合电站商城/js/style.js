$(function () {
    $(".aside .nav-li").each(function (i) {
        $(".aside .nav-li").eq(i).click(function () {
            $(".aside .nav-li").removeClass("red-active");
            $(this).addClass("red-active");
            $(".section-list").eq(i).show().siblings().hide();
            switch (i) {
                case 2:
                    $(".change-img").hide();
                    break;
                case 3:
                    $(".change-img").hide();
                    break;
                case 4:
                    $(".change-img").hide();
                    break;
            }
        });

    });
    $(".subList").click(function () {
        var index = $(this).index();
        $(this).addClass("red-active").siblings().removeClass("red-active");
        $(".orderMain").eq(index).show().siblings().hide()
    });
    var toggle = true;
    $(".firLi").click(function () {
        if (toggle) {
            $(this).addClass("red-active");
            $(".menu-sub").show();
            $(".menu-sub li").click(function () {
                $(".menu-sub li").find("a").removeClass("red-active");
                $(this).find("a").addClass("red-active");
                var count = $(this).find("a").html();
                $(".firLi span").html(count);
            });

        } else {
            $(".menu-sub").hide();
        }
        toggle = !toggle;
    });
    $(".fivLi").click(function () {
        if (toggle) {
            $(this).addClass("red-active");
            $(".sub-state").show();
            $(".sub-state li").click(function () {
                $(".sub-state li").find("a").removeClass("red-active");
                $(this).find("a").addClass("red-active");
                var count = $(this).find("a").html();
                $(".fivLi span").html(count);
            });

        } else {
            $(".sub-state").hide();
        }
        toggle = !toggle;
    });
    $(".all-del").change(function () {
        if (this.checked) {
            $(".nav-list input").prop("checked", true);
            $(".all-del").prop("checked", true);
        } else {
            $(".nav-list input").prop("checked", false);
            $(".all-del").prop("checked", false);
        }

    });
    $(".delete-list").click(function () {
        $(".nav-list li").each(function () {
            if ($(".nav-list li").length > 0) {
                $(this).find("input").each(function () {
                    if ($(this).is(":checked")) {
                        $(this).parents("li").remove("li");
                        if ($(".nav-list li").length == 0) {
                            $(".collect-list").hide();
                            $(".shoucang").show();
                        }
                    }
                });
            }
        });
    });
    $(".closeBtn").click(function () {
        $(".reveal-modal").css("visibility","hidden");
        $(".reveal-modal-bg").css("display","none");
    });
    var step=1;
    $(".clickDone").click(function () {
        if($(this).html()=="下一步"&&step==1){
            $("#myModalee .main ul li:nth-child(2) img").attr("src","../../images/red02.jpg");
            step++;
        }else if($(this).html()=="下一步"&&step==2){
            $("#myModalee .main ul li:nth-child(3) img").attr("src","../../images/red03.jpg");
            $(this).html("完成");
        }else if($(this).html()=="完成"){
            step=1;
            $(".reveal-modal").css("visibility","hidden");
            $(".reveal-modal-bg").css("display","none");
            $("#myModalee .main ul li:nth-child(2) img").attr("src","../../images/gary002.jpg");
            $("#myModalee .main ul li:nth-child(3) img").attr("src","../../images/gary03.jpg");
            $(this).html("下一步");
        };
    })

});
