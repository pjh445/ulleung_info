$(document).ready(function(){
	$('#info a').hover(
		function(){
			$(this).addClass('act');
		} ,
		function(){
			$(this).removeClass('act');
		}
	);
});//끝부분