

$(".toggleButton").hover(function(){

	$(this).addClass("highlightedButton");

}, function() {

	$(this).removeClass("highlightedButton");

});

$(".toggleButton").click(function() {

	$(this).toggleClass("active");
	$(this).removeClass("highlightedButton");

});

$(".panel").height($(window).height() - $("#topBar").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

$("iframe").contents().find('html').html($("#htmlPanel").val()); 