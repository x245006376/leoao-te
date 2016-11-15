/**
 * Created by hxsd on 2016/8/24.
 */
function hxsd_add(){//tab盒子的id，  autoplay：true false
    var deAmount=document.getElementsByClassName("deAmount")[0];
    var content=document.getElementById("deNum");
    var deAdd=deAmount.getElementsByClassName("deAdd")[0];
    var deSubtract=deAmount.getElementsByClassName("deSubtract")[0];





    //加减
    var num =content.innerHTML;
    deAdd.onclick=function(){
        num++;
        content.innerHTML=num;
    };
    deSubtract.onclick=function(){
        num--;
        if(num<10){
            num=10
        }
        content.innerHTML=num;
    };


    var oTab=document.getElementById("deBottomRightTop");
    var aLi=oTab.getElementsByTagName("li");
    var oContent=document.getElementById("deBottomRightContent");
    var aDiv=oContent.getElementsByClassName("deNone");




    //选项卡
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aDiv[i].style.display="none";
            }
            this.className='deBottomRightClick';
            aDiv[this.index].style.display="block";


        };
    }

    //商品图片选项卡
    var deMiddlePic=document.getElementsByClassName("deMiddlePic")[0];
    var deMiddleImg=deMiddlePic.getElementsByTagName("img");
    var deMiddleLeft=document.getElementsByClassName("deMiddleLeft")[0];
    var deMiddleLeftLi=deMiddleLeft.getElementsByTagName("li");

    for(var i=0;i<deMiddleLeftLi.length;i++){
        deMiddleLeftLi[i].index=i;
        deMiddleLeftLi[i].onclick=function(){
            for(var i=0;i<deMiddleLeftLi.length;i++){
                deMiddleLeftLi[i].className='';
                deMiddleImg[i].style.display="none";
            }
            this.className='deRed';
            deMiddleImg[this.index].style.display="block";


        };
    }


}