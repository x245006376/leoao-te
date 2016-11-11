
window.onload = function(){
	init();
}

function init(){
	$('#introList li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
}
















