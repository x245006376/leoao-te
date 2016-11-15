/**
 * Created by hxsd on 2016/8/23.
 */
/****** receiptPop ******/


$(function(){

    //发票类型选择
    $("input[class='checkbox']").click(function(){
        if($("input[class='checkbox']").prop("checked")){
            $(this).prev().removeClass("newChockBoxNoBg");
            $(this).prev().addClass("newChockBoxBg")
        }else{
            $(this).prev().removeClass("newChockBoxBg");
            $(this).prev().addClass("newChockBoxNoBg")
        }
        console.log($(this).prev())
    });

    $("#valueReceipt").click(function(){
        $(this).removeClass("receiptTypeBtn grayBg fl darkFont");
        $(this).addClass("receiptTypeBtn redBg fl whiteFont");
        $("#normalReceipt").addClass("receiptTypeBtn grayBg fl darkFont");
        $("#valueReceiptInfo").css({display:"block"});
        $("#normalReceiptInfo").css({display:"none"})
    });
    $("#normalReceipt").click(function(){
        $(this).removeClass("receiptTypeBtn grayBg fl darkFont");
        $(this).addClass("receiptTypeBtn redBg fl whiteFont");
        $("#valueReceipt").addClass("receiptTypeBtn grayBg fl darkFont");
        $("#valueReceiptInfo").css({display:"none"});
        $("#normalReceiptInfo").css({display:"block"})
    });
//关闭弹窗
    $(".closeBtn").click(function(){
        $(".pop").addClass("hide")
    });
//打开和关闭地区选择弹窗
    $(".areaSelectBtn").click(function(){
        $(".areaInfo").removeClass("hide");
        $(".areaInfo").addClass("show")
    });

    $(".closeAreaSelect").click(function(){
        $(".areaInfo").addClass("hide")
    });
//选择省、市、区
    var selectProvinces=$(".selectProvinces"),selectCities=$(".selectCities"),selectAreas=$(".selectAreas");
    var addressInfoProvinces=$(".addressInfoProvinces");
    var addressInfoCities=$(".addressInfoCities");
    var addressInfoAreas=$(".addressInfoAreas");
    selectProvinces.click(function(){
        $(this).css({border:"2px #ed5d5d solid","border-bottom":"2px #fff solid"});
        selectCities.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        selectAreas.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        addressInfoProvinces.removeClass("hide");
        addressInfoProvinces.addClass("show");
        addressInfoCities.removeClass("show");
        addressInfoCities.addClass("hide");
        addressInfoAreas.removeClass("show");
        addressInfoAreas.addClass("hide")
    });
    selectCities.click(function(){
        $(this).css({border:"2px #ed5d5d solid","border-bottom":"2px #fff solid"});
        selectProvinces.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        selectAreas.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        addressInfoCities.removeClass("hide");
        addressInfoCities.addClass("show");
        addressInfoProvinces.removeClass("show");
        addressInfoProvinces.addClass("hide");
        addressInfoAreas.removeClass("show");
        addressInfoAreas.addClass("hide")
    });
    selectAreas.click(function(){
        $(this).css({border:"2px #ed5d5d solid","border-bottom":"2px #fff solid"});
        selectProvinces.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        selectCities.css({border:"2px #e5e5e5 solid","border-bottom":"2px #ed5d5d solid"});
        addressInfoAreas.removeClass("hide");
        addressInfoAreas.addClass("show");
        addressInfoProvinces.removeClass("show");
        addressInfoProvinces.addClass("hide");
        addressInfoCities.removeClass("show");
        addressInfoCities.addClass("hide")
    });
})
//复选框样式







