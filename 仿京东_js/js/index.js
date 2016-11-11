// JavaScript Document
window.onload=function(){
//------------------------------------------------左侧选项框-------------------------------------
	var nAv=document.getElementById('nav_all');
	var nAv_li=nAv.getElementsByTagName('li')
	var fLoat=document.getElementsByClassName('float');
	var close_time=""//鼠标离开列表选项
	var move_time=""//鼠标从内容框到列表选项上
	for(var i=0; i<nAv_li.length; i++){
		nAv_li[i].index=i;
		nAv_li[i].onmouseover=function(){
			clearTimeout(close_time);
			for(var j=0; j<nAv_li.length; j++){				
				nAv_li[j].className="";
				fLoat[j].style.display="none";
			};
			fLoat[this.index].style.display="block"
			this.className="color";
		};
		nAv_li[i].onmouseout=function(){			
			var _this=this		
			close_time=setTimeout(function(){				
				fLoat[_this.index].style.display="none";
				_this.className="";
			},200)
		};
		fLoat[i].onmouseover=function(){
			this.style.display="block";
			clearTimeout(close_time);
			clearTimeout(move_time);
		};
		fLoat[i].onmouseout=function(){
			this.style.display="none";
			move_time=setTimeout(function(){
				for(var j=0; j<nAv_li.length; j++){				
					nAv_li[j].className="";				
				};
			},100);		
		};
	};
// ----------------------------Banner图片轮播-----------------------------------------------------------------------------
small_tools.slidePic('slide');

//-------------------------------------楼层轮播--------------------------------------------

small_tools.slidePic('slide1');
small_tools.slidePic('slide2');
small_tools.slidePic('slide3');
small_tools.slidePic('slide4');
small_tools.slidePic('slide5');
small_tools.slidePic('slide6');
small_tools.slidePic('slide7');
small_tools.slidePic('slide8');
small_tools.slidePic('slide9');
small_tools.slidePic('slide10');
small_tools.slidePic('slide11');
small_tools.slidePic('slide12');
small_tools.slidePic('slide13');

//------------------------选项卡---------------------------------------------------

widget_tools.table('floor1','floor1_right2')
widget_tools.table('floor2','floor1_right2')
widget_tools.table('floor3','floor1_right3')
widget_tools.table('floor4','floor1_right3')
widget_tools.table('floor5','floor1_right3')
widget_tools.table('floor6','floor1_right2')
widget_tools.table('floor7','floor1_right2')
widget_tools.table('floor8','floor1_right2')
widget_tools.table('floor9','floor1_right2')
widget_tools.table('floor10','floor1_right2')
widget_tools.table('floor11','floor1_right3')

//侧边楼层数

	var tofloor=document.getElementById('tofloor');
	var to_floor=document.getElementsByClassName('to_floor')[0];
	var oLi=to_floor.children;
	var floorColor=document.getElementsByClassName('floor_color');
	var floor1=document.getElementById('floor1')
	var floor2=document.getElementById('floor2')
	var floor3=document.getElementById('floor3')
	//console.log(floorColor.length)
	window.onscroll=function(){
		var t=document.documentElement.scrollTop || document.body.scrollTop;
			if(t<=1600){
				tofloor.style.display="none";
			}else if (t>1600) {
				tofloor.style.display="block";
			};
		var inner=document.getElementsByClassName('inner')[0]
		console.log(tofloor.offsetWidth)
		to_floor.style.left=inner.offsetLeft-30+"px";
	};
	for (var i = 0; i < floorColor.length; i++){
		floorColor[i].index=i;
		floorColor[i].onmouseover=function(){
			for(var j = 0; j < oLi.length; j++){
				oLi[j].className="";
				oLi[this.index].className="color";
			};
		};
	};


}