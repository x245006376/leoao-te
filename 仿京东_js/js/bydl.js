
window.onload=function(){
	//table
//数字加减-------------------------------
	var showNumber=document.getElementById('number');
	var show=showNumber.getElementsByClassName('number_inner')[0];
	var up=showNumber.getElementsByTagName('button')[0];
	var down=showNumber.getElementsByTagName('button')[1];
	up.onclick=function(){
		num=parseInt(show.innerHTML);
		num=num+1;
		show.innerHTML=num;
		if(show.innerHTML>10){
			alert('你好有钱啊')	
		};
	};
	down.onclick=function(){
		num=parseInt(show.innerHTML);
		num=num-1;
		show.innerHTML=num;
		if(show.innerHTML<1){
			show.innerHTML=1	
		};
	};


//框选--------------------------------------
	function Region(Reg){
		var oLi=Reg.getElementsByTagName('li');
		for(var i=0; i<oLi.length; i++){
			oLi[i].index=i
			oLi[i].onclick=function(){
				for(var j=0; j<oLi.length; j++){
					oLi[j].className=""
				};
				oLi[this.index].className="color";
			};
		};
	};
	Region(document.getElementsByClassName('select1')[0])
	Region(document.getElementsByClassName('select1')[1])
	Region(document.getElementsByClassName('select1')[2])







//底部TAB区域
	var table_title=document.getElementById('table_title')
	var oLi=table_title.getElementsByTagName('li')
	var tab_big=document.getElementsByClassName('table_all')
	widget_tools.auto_li(false,false,tab_big,oLi)



//放大区域
	widget_tools.zoomIn(smallBox,'span',bigBox)

};