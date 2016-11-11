/**
 * Created by zhi on 2016/7/24.
 */
$(function(){
//            ------头部样式
    //$(".head h5 a").find("a:first").css(b);
    var goods=[
        {shop:"纤巧百媚时尚鞋坊",seller:"纤巧百媚",name:"日韩流行风时尚公主靴子",integral:5,price:100,number:1},
        {shop:"香港我的美丽日记",seller:"clol2015",name:"香奈儿炫亮魅力唇膏3.5g",integral:12,price:200,number:1},
        {shop:"实体经营",seller:"交换机店铺",name:"蝶妆海析蓝轻盈粉底液10#（象牙白）",integral:3,price:300,number:1},
        {shop:"红豆豆的小屋",seller:"toto豆豆",name:"相宜促销专供 最好用的LilyBell化妆棉",integral:6,price:12,number:2}
    ];
    var tab="";
    tab+="<table>";
    tab+="<tr><th><input type='checkbox'>全选</th><th>店铺宝贝</th><th>获积分</th><th>单价（元）</th><th>数量</th><th>小计（元）</th><th>操作</th></tr>";
    for(var i=0;i<goods.length;i++){
        tab+="<tr><td  colspan='7'><span>店铺：</span><a>"+goods[i].shop+"</a><span>卖家：</span><a>"+goods[i].seller+"</a><img src='images/taobao_relation.jpg'/></td></tr>";
        tab+="<tr class='goods'>" +
            "<td><input type='checkbox' checked='checked'></td>" +
            "<td><img src='images/taobao_cart_0"+(i+1)+".jpg'><span>"+goods[i].name+"</span></td>" +
            "<td>"+goods[i].integral*goods[i].number+"</td>" +
            "<td>"+goods[i].price+"</td>" +
            "<td class='numTd'><a  class='add'>+</a><span>"+goods[i].number+"</span><a class='reduce'>-</a></td>" +
            "<td>"+goods[i].price*goods[i].number+"</td>" +
            "<td><a>删除</a></td>" +
            "</tr>";
    }
    tab+="</table>";
    //tab+="<tr><td  colspan='6'>总价</td></tr>";
    $("#goods_tab").html(tab);
    // console.log($("#goods_tab").html);
    var table=$("#goods_tab table");
    var evenTr=table.find("tr:even");
    var oddTr= table.find("tr:odd");
    table.find("tr:even").attr("class","tab_even");
    table.find(".numTd a").addClass("buttonA");
    table.find("tr:odd").attr("class","tab_odd");
    table.find("tr:first").attr("class","tab_head");
// ---------------------------加减按钮-----
    table.find(".add").click(function(){
        $(this).next().html(function(index,txt){
            $(this).html(parseInt(txt)+1)
        })
    });
    table.find(".reduce").click(function(){
        $(this).prev().html(function(index,txt){
            if(parseInt(txt)>1){
                $(this).html(parseInt(txt)-1)
            }
        })
    });
//---------------------end-------------------
    var rows=table.find("tr");
    $("#buy").click(function(){
        var checked=table.find("input:checkbox:checked");
        var row=checked.parent().parent();
        row.css("background","red");
    });
    $("#eidt").click(function(){
        table.find(".boy").remove(".boy");
        table.find("tr:first").append("<th class='boy'></th>");
        table.find("tr:gt(0):not(:last())").append("<td class='boy'><input type='button' value='delete' ></td>");
        table.find("tr:last()").append("<td class='boy'></td>");
        table.find("input:button[value='delete']").click(function(){
            $(this).parent().parent().remove()
        });

        // alert(rows.length);
    });
//            ----商品删除按钮--------
    var deletes=$(".tab_even").find("td:last a");
    deletes.css({"back-ground":"red","color":'#f60'});
    deletes.click(function(){
        $(this).parent().parent().prev().remove();
        $(this).parent().parent().remove();
    });
    //---删除所选---
    var even_Tr=table.find("tr:even");
    $(".total_tab").find("input").click(function(){
        var check=table.find("input:checkbox").prop("checked");
        if(check) {
            $(this).parent().parent().remove();
        }
    });
    //---全选按钮---
    table.find("input:checkbox").eq(0).change(function(){
       if(table.find("input:checkbox").gt(0).prop("checked")){
           table.find("input:checkbox").gt(0).prop("checked");
       }
    });
//            ---end--------------

//----------------算价钱函数------------------------
    function pay(){
        var evenTr=table.find("tr:even");
        var total=0;
        var goods_ig=0;
        for(var i=1;i<evenTr.length;i++){
            var check=evenTr.eq(i).find("input:checkbox").prop("checked");
            if(check){
                console.log($(this).parent().parent().find(".numTd span").eq(i));
                total+=goods[i-1].price*goods[i-1].number;
                goods_ig+=goods[i-1].integral*goods[i-1].number;
            }
        }
        //evenTr.last().find("td:first()").text("总价为:"+total);
        alert(total);
        $(".total_tab span").css({"color":"#f60","font-size":"24px"});
        $(".total_tab .p1 span").html(total);
        $(".total_tab .p2 span").html(goods_ig);
    }
    $("#conp").click(function(){
        pay();
    });
    table.find("input:checkbox").change(function(){
        pay();
        // $("#buy").click();
    });
    table.find("tr：even").hover(function(){
        $(this).addClass("hover")
    },function(){
        $(this).removeClass("hover")
    });
    $(".total_tab img").click(function(){
        pay();
    });

});
