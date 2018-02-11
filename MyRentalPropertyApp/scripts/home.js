
var jumboHeight = $('.jumbotron').outerHeight();

function parallax(){
	var scrolled = $(window).scrollTop();
	$('.jumbotron').css('height', (jumboHeight-(scrolled/6)) + 'px');
}

$(window).scroll(function(){
	parallax();
});

$('nav li').click(function(e){
	$('.active').removeClass('active');
	$(this).addClass('active');
});

$(document).ready(function(){
	$(".loginButton").click(function(){
		$("#myModal").modal();
	});
});