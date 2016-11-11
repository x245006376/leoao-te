// JavaScript Document


var small_tools={
	//modal_layer蒙版---------------------------------------------------------------------------------------------------------------------------
	'modal_layer':function(){
		var modal=document.createElement('div');
		modal.id="black_maodal";
		modal.className="modal";
		document.body.appendChild(modal);
	},



	//auto_box点击按钮时,弹窗显示在页面居中位置-------------------------------------------------------------------------------------------------------------------
	'auto_box':function (box){
		var l=(document.documentElement.clientWidth-box.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-box.offsetHeight)/2;
		box.style.left=l+"px";
		box.style.top=t+"px";
	},



	//placeholder点击文本框,可以清空value,不点击,返回初始值------------------------------------------------------------------------------------------------------------
	'placeholder':function (name,text){
		name.value=text;
		name.onfocus=function(){
			if(this.value==text){
				this.value="";
			};
		};
		name.onblur=function(){
			if(this.value==""){
				this.value=text;
			};
		};
	},




	//documentReady代替window.onload------------------------------------------------------------------------------------------------------------
	// 用法documentReady(function(){
	// })
	'documentReady':function (fn){
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded', fn, false);
		}
		else{
			document.attachEvent('onreadystatechange', function (){//IE兼容
				if(document.readyState=='complete'){
					fn && fn();
				}
			});
		};
	},


	//getStyle读取样式------------------------------------------------------------------------------------------------------------

	'getStyle':function (obj,name){
		var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj,false)[name];
		if(name=='opacity'){
			value=Math.round(parseInt(value)*100);
		}else{
			value=parseInt(value);
		};
		return value;
	},
//---------轮播图---------------------------------------------
	'slidePic':function(id){
		var oSlide=document.getElementById(id);
		var oUl=oSlide.getElementsByTagName('ul')[0];
		var oLi=oUl.children;//找到所有的放图片的li
		var oBtn=oSlide.getElementsByClassName('but')[0];
		var but=oBtn.children;//找到所有的按钮
		var left=oSlide.getElementsByClassName('to_left')[0];//找到左按钮
		var right=oSlide.getElementsByClassName('to_right')[0];//找到右按钮
		var movepic_time="";
		var li_w=small_tools.getStyle(oLi[0],'width');
		//oUl.style.width=li_w*oLi.length+'px';

		var show_num=0;
		clearInterval(movepic_time)
		for(var i=0; i<but.length; i++){
			but[i].index=i;								
			but[i].onclick=function(){//给所有的按钮标上onclick事件		
				for(var j=0; j<but.length; j++){//找出所有的button
					but[j].className="";//将所有的按钮样式为无
				};
				this.className="color";//给当前按钮变为color样式
				show_num=this.index;
				widget_tools.move(oUl,'left',-li_w*show_num,1000);
				//console.log(show_num)
			};
		};
		left.onclick=function(){
			show_num--;
			if (show_num>=oLi.length-1) {
				show_num=oLi.length-1
			}else if(show_num<0){
				show_num=but.length-1;
			};
			widget_tools.move(oUl,'left',-li_w*show_num,1000);
			for(var j=0; j<but.length; j++){//找出所有的button
				but[j].className="";//将所有的按钮样式为无
			};
			but[show_num].className="color";//给当前按钮变为color样式
		};
		right.onclick=function(){
			show_num++;
			if (show_num>=oLi.length+1) {
				show_num=oLi.length+1;
			}else if(show_num>but.length-1){
					show_num=0;			
			};
			widget_tools.move(oUl,'left',-li_w*show_num,1000);
			for(var j=0; j<but.length; j++){//找出所有的button
				but[j].className="";//将所有的按钮样式为无
			};
			but[show_num].className="color";//给当前按钮变为color样式
		};
		function auto_run(){
			movepic_time=setInterval(function(){
				show_num++;
				for(var j=0; j<but.length; j++){//找出所有的button
					but[j].className="";//将所有的按钮样式为无
				};
				if(show_num>but.length-1){
					show_num=0;				
				};
				but[show_num].className="color";//给当前按钮变为color样式
				widget_tools.move(oUl,'left',-li_w*show_num,1000);
			},2000);
		};
		auto_run()
		oSlide.onmouseover=function(){
			clearInterval(movepic_time)
			widget_tools.move(left,'left',0,500);
			widget_tools.move(right,'left',li_w-40,500);			
		};
		oSlide.onmouseout=function(){
			auto_run()
			widget_tools.move(left,'left',-40,500);
			widget_tools.move(right,'left',li_w,500);
		};
	}
};






















