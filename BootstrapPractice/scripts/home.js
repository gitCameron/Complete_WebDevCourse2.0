
var jumboHeight = $('.jumbotron').outerHeight();

function parallax(){
	var scrolled = $(window).scrollTop();
	$('.jumbotron').css('height', (jumboHeight-(scrolled/4)) + 'px');
}

$(window).scroll(function(){
	parallax();
});

$('nav li').click(function(e){
	$('.active').removeClass('active');
	$(this).addClass('active');
});