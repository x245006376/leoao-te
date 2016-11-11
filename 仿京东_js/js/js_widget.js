// JavaScript Document


var widget_tools={
	//err_Box带延时的错误提示框 -------------------------------------------------------------------------------------------------------------------
	'err_Box':function (err_name,time){
		var oErr=document.createElement('div');
		oErr.id="oErr";
		oErr.className="err_Box";
		var html=
			'<div id="oArr" class="err_Box">'+err_name+'</div>'
		oErr.innerHTML=html;
		document.body.appendChild(oErr);
		auto_box(oErr);
		var timer="";
		function remove_err(){
			document.body.removeChild(oErr);
		};
		timer=setTimeout(function(){
			remove_err()
		},time);
		oErr.onmouseover=function(){
			clearTimeout(timer);
			widget_tools.drag(oErr);
		};
		oErr.onmouseout=function(){
			remove_err()
		};
	},




	//带蒙版,可拖拽的登录框------------------------------------------------------------------------------------------------------------------------------
	'logon_box':function (){
		widget_tools.modal_layer();
		var oDiv=document.createElement('div');
		oDiv.id="box";
		oDiv.className="logoing";
		var html=
			'<h4>用户登录</h4>'+
		    '<a id="closebtn" href="javascript:;" style="cursor:pointer">×</a>'+
		    '<p><label>用户名: <input type="text"><label></p>'+
		    '<p><label>密　码: <input type="password"><label></p>'+
		    '<p><button class="logonBtn" type="button">登录</button></p>'
		oDiv.innerHTML=html;
		document.body.appendChild(oDiv);
		var modal=document.getElementById('black_maodal');
		var closeBtn=document.getElementById('closebtn');
		var title=oDiv.getElementsByTagName('h4')[0];
		var input=document.getElementsByTagName('input');
		input[0].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
			var oEv=ev ||window.event;
			oEv.cancelBubble=true;
		};
		input[1].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
			var oEv=ev ||window.event;
			oEv.cancelBubble=true;
		}
		modal.style.display="block";//显示模态层
		widget_tools.auto_box(oDiv);//居中显示
		widget_tools.drag(oDiv,title);//可以拖拽
		//关闭弹框
		closeBtn.onclick=function(){
			document.body.removeChild(modal);
			document.body.removeChild(oDiv);
		};
	},




	//带标题的鼠标拖拽组件(盒子,标题)如果只输入一个数,则在整个box中任意位置拖动------------------------------------------------------------------------------
	'drag':function (box,title){
		var handle;
		title?handle=title:handle=box;
		//定义当鼠标点击时的函数
		handle.onmousedown=function(ev){
			var oEv=ev || window.event;
			//定义鼠标在box内X的位置
			var disX=oEv.clientX-box.offsetLeft;
			//定义鼠标在box内Y的位置
			var disY=oEv.clientY-box.offsetTop;
			//给屏幕的可视区宽度定义成b_width
			var b_width=document.documentElement.clientWidth;
			//给屏幕的可视区高度定义成b_height
			var b_height=document.documentElement.clientHeight;
			//定义鼠标移动时的函数
			document.onmousemove=function(ev){
				var oEv=ev || window.event;
				//定义box的X距离
				var left=oEv.clientX-disX;
				//定义box的Y距离
				var top=oEv.clientY-disY;
				//当box在左边缘时
				if(left<0){
					left=0;
				};
				//当box在上边缘时
				if(top<0){
					top=0;
				};
				//当box在右边缘时
				if(left>b_width-box.offsetWidth){
					left=b_width-box.offsetWidth;
				};
				//当box在下边缘时
				if(top>b_height-box.offsetHeight){
					top=b_height-box.offsetHeight;
				};
				box.style.left=left+"px";
				box.style.top=top+"px";
			};
			return false;
		};
		document.onmouseup=function(){
			document.onmousemove=null;
		};
	},


	//自动播放且能点击的选项卡----------------------------------------------------------------------------------------------------------------------------
	'auto_li':function (id,auto_play,tab_div,tab_li){
		//找到所有的li
		//点击区----------------------------------------
		var time="";
		for(var i=0; i<tab_li.length; i++){
			tab_li[i].index=i;
			tab_li[i].onmouseover=function(){
				for(var j=0; j<tab_li.length; j++){
					tab_li[j].className="";
					tab_div[j].style.display="none";
				}
				this.className="red";
				tab_div[this.index].style.display="block"
				num=this.index;
			};
		};
	/*自动播放区------------------------	*/
		if(auto_play){
			function auto_run(){
			time=setInterval(function(){
				function run(num){
					for(var j=0; j<tab_li.length; j++){
						tab_li[j].className="";
						tab_div[j].style.display="none";
					};
					tab_li[num].className="ac";
					tab_div[num].style.display="block"	
				};
				run(num);
				num++;
				if(num==4){
					num=0;
				};
			},1000);	
			};
			auto_run();
			id.onmouseover=function(){
				clearInterval(time);
			};
			id.onmouseout=function(){
				auto_run();
			};
		};
	},
'table':function (id,floor){
	var Floor=document.getElementById(id)
	var selectUl=Floor.getElementsByClassName('select')[0];
	var oLi=selectUl.getElementsByTagName('li')
	var tab_div=Floor.getElementsByClassName(floor);
	for(var i=0; i<oLi.length; i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			for(var j=0; j<oLi.length; j++){
				oLi[j].className="";
				tab_div[j].style.display="none";
			}
			this.className="red";
			tab_div[this.index].style.display="block";
		};
	};
},






	//move设定时间让物体移动------------------------------------------------------------------------------------------------------------
	//move(obj,运动模式,结束位置,(可以毫秒数,可以写spend值,不写则按照一秒来运动))
	'move':function (obj,moveMode,end,stopTime){
		var speed={ //预定义 predefine
			veryslow:	5000,
			slow:		2000,
			normal:		1000,
			fast:		700,
			veryfast:	300
		};					
		//如果输入预定速度的字符串，就进行转换
		if(stopTime){
			if(typeof stopTime=='string'){
				stopTime=speed[stopTime];
			};
		}else{
			stopTime=speed.normal;
		}	
		var start=small_tools.getStyle(obj,moveMode);//设定初始位置
		var dis=end-start;//移动距离为结束距离减去初始距离
		var count=parseInt(stopTime/30);//将要设定的时间除以30毫秒,每30毫秒走一份;
		var i=0;//设定计数器
		clearInterval(obj.time);
		obj.time=setInterval(function(){
			i++;
			//var step_dis=start+dis/count*i;//移动的距离为,初始位置,加上,移动距离除以总份数,乘以份数,累加
			var a=1-i/count;//a的值会越来越小
			var step_dis=start+dis*(1-a*a*a);
			if (moveMode=="opacity") {//判断透明度
				obj.style.opacity=step_dis/100;
				obj.style.filter='alpha(opacity:'+step_dis+')';//ie兼容
			} else {
				obj.style[moveMode]=step_dis+'px';
			}					
			if(i==count){//当走到设定的份数时,清空计时器;
				clearInterval(obj.time);
			};
		},30)
	},





	//move_all设定多种因素让物体移动------------------------------------------------------------------------------------------------------------
	//move(oDiv,{"width":300,"height":300,"left":300,"top":300,"opacity":50},"slow",function(){
	// 	move(oDiv,{"width":100,"height":100,"left":100,"top":100,"opacity":80},"normal",function(){
	// 		move(oDiv,{"width":400,"height":400,"left":400,"top":400,"opacity":30},"veryslow")
	// 	})
	// });
	'move_all':function (obj,modeJson,stopTime,callback){
		function getStyle(obj,name){
			var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj,false)[name];
			if(name=='opacity'){
				value=Math.round(parseInt(value)*100);
			}else{
				value=parseInt(value);
			};
			return value;
		};
		var speed={ //预定义 predefine
			veryslow:	5000,
			slow:		2000,
			normal:		1000,
			fast:		700,
			veryfast:	300
		};					
		//如果输入预定速度的字符串，就进行转换
		if(stopTime){
			if(typeof stopTime=='string'){
				stopTime=speed[stopTime];
			};
		}else{
			stopTime=speed.normal;
		};
		var start={};
		var dis={};
		for(var key in modeJson){
			start[key]=getStyle(obj,key);
			dis[key]=modeJson[key]-start[key];
		}
		// var start=getStyle(obj,moveMode);//设定初始位置
		// var dis=end-start;//移动距离为结束距离减去初始距离
		var count=parseInt(stopTime/30);//将要设定的时间除以30毫秒,每30毫秒走一份;
		var i=0;//设定计数器
		clearInterval(obj.time);
		obj.time=setInterval(function(){
			i++;
			//var step_dis=start+dis/count*i;//移动的距离为,初始位置,加上,移动距离除以总份数,乘以份数,累加
			for(var key in modeJson){
				var a=1-i/count;//a的值会越来越小
				var step_dis=start[key]+dis[key]*(1-a*a*a);
				if (key=="opacity") {//判断透明度
					obj.style.opacity=step_dis/100;
					obj.style.filter='alpha(opacity:'+step_dis+')';//ie兼容
				} else {
					obj.style[key]=step_dis+'px';
				};
			};										
			if(i==count){//当走到设定的份数时,清空计时器;
				clearInterval(obj.time);
				callback && callback()
			};
		},30)
	},




	//图片放大--------------------------------------------------
	'zoomIn':function (smallBox,span,bigBox){
		var smallBox=document.getElementById('smallBox');
		var oSpan=smallBox.getElementsByTagName(span)[0];
		var bigBox=document.getElementById('bigBox');
		var moveImg=bigBox.getElementsByTagName('img')
		var pic_smallBox=document.getElementsByClassName('pic_smallBox')[0];
		var picImg=smallBox.getElementsByTagName('img')
		var smallUl=document.getElementById('pic_small_ul')
		var small_Pic=smallUl.getElementsByTagName('li')
		var main=document.getElementById('main');
		for(var i=0; i<small_Pic.length; i++){
			small_Pic[i].index=i;
			small_Pic[i].onmouseover=function(){
				for(var j=0; j<small_Pic.length; j++){
					small_Pic[j].className="";
					picImg[j].style.display="none";
					moveImg[j].style.display="none";
				}
				this.className="red";
				picImg[this.index].style.display="block"
				moveImg[this.index].style.display="block"
			};
		};		
		smallBox.onmousemove=function(ev){
			for (var i = 0; i < moveImg.length; i++) {						
				var movePic=moveImg[i];	
				var oEv=ev || window.event;
				var l=oEv.pageX-main.offsetLeft-oSpan.offsetWidth/2-pic_smallBox.offsetLeft
				var t=oEv.pageY-main.offsetTop-oSpan.offsetHeight/2-pic_smallBox.offsetTop
				console.log(pic_smallBox.offsetTop)
				if (l<0) {l=0};
				if (t<0) {t=0};
				if (l>smallBox.offsetWidth-oSpan.offsetWidth) {l=smallBox.offsetWidth-oSpan.offsetWidth};
				if (t>smallBox.offsetHeight-oSpan.offsetHeight) {t=smallBox.offsetHeight-oSpan.offsetHeight};
				oSpan.style.left=l+"px";
				oSpan.style.top=t+"px";
				var rateX=l/(smallBox.offsetWidth-oSpan.offsetWidth);
				var rateY=t/(smallBox.offsetHeight-oSpan.offsetHeight);
				movePic.style.left=-(movePic.offsetWidth-bigBox.offsetWidth)*rateX+"px";
				movePic.style.top=-(movePic.offsetHeight-bigBox.offsetHeight)*rateY+"px";
			};
		};
		document.onmouseout=function(ev){
			document.onmousemove=null;
		};
		smallBox.onmouseover=function(){
			oSpan.style.display=bigBox.style.display="block";
		};
		smallBox.onmouseout=function(){
			oSpan.style.display=bigBox.style.display="none";
		};
	}
}