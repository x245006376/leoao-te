/**
 * Created by hxsd on 2016/8/10.
 */
    //1,发生事件的对象
    //2,事件的类型
    //3.产生的影响
window.onload=function(){
    var nav_li=getId("nav").getElementsByTagName("li");
    var con_page=getId("content").getElementsByClassName("page");

    for(var i=0;i<nav_li.length;i++){
        nav_li[i].index=i;
        nav_li[i].onclick=function(){
            //导航区域的变色

            for(var j=0;j<nav_li.length;j++){
                nav_li[j].className="";
                con_page[j].className="page";
            }
            this.className="on";
            //内容区域的替换
            con_page[this.index].className="page active";
        }

    }

}
function getId(id){
    return typeof id==="string"?document.getElementById(id):id;
}
