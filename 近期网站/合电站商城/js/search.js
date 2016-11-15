/**
 * Created by Obey on 2016/8/23.
 */
$(document).ready(function(){
    var conTi= $('.searchContentTitle ul li');
    conTi.each(function(){
        $(this).click(function(){
            conTi.removeClass('ac');
            $(this).addClass('ac')
        })
    });
    function searchLineTab(id){
        var ul=document.getElementById(id);
        var li=ul.getElementsByTagName('li');

        for(var i=0;i<li.length;i++){
            li[i].onclick=function(){
                for(var j=0;j<li.length;j++){
                    li[j].className='';
                }
                this.className='ac';
            }
        }
    }
    searchLineTab('searchCom');
    searchLineTab('searchPin');
    searchLineTab('searchHard');
    searchLineTab('searchGraphics');
    searchLineTab('searchRatio');
    searchLineTab('searchMemory');
    searchLineTab('searchScreen');
    searchLineTab('searchWindows')
});
