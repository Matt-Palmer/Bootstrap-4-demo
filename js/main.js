$(document).ready( function(){
	$('#home-content-nav').on('click', 'li', function(){
		$('#home-content-nav li a.active').removeClass('active');
		$(this).addClass('active');
	});
});