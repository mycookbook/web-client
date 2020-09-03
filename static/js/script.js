/* eslint-disable */

$(function() {
	$('.ui.accordion').accordion({
		exclusive: false,
	});
	
	$('.ui.rating').rating({
		maxRating: 5,
		interactive: false,
	});
	
	$('.ui.rating.interactive').rating({
		interactive: true,
	});
	
	$('.sidebar')
	.sidebar({
		context: $('.pushable.content'),
		scrollLock: true,
	})
	.sidebar('setting', 'transition', 'push')
	.sidebar('setting', 'mobileTransition', 'push');
	
	$('.serving.card, .sidebar .close.button').click(function() {
		$('.sidebar').sidebar('toggle');
	});
	
	$(".rating").rating();
	
	$('.special.cards .image').dimmer({
		on: 'hover'
	});
	
	$('.nut_info').popup({
		on: 'hover'
	})
});
