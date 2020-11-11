/* eslint-disable */

$(function() {
	if (Boolean(readCookie('read-cookie-policy'))) {
		$('.cookie.nag').hide()
	} else {
		$('.cookie.nag').show()
	}

	$('#cookie-dismiss').click(function() {
		document.cookie = "read-cookie-policy=true"
		$('.cookie.nag').hide()
	});

	$('.nutr_info').popup({});

	$('#addRecipeButtonTitleText').popup({
		title: 'Know a nice little tweak to this recipe? Make it your own, click to add it!'
	});

	$('#viewRecipeSubmissionsTitleText').popup({
		title: 'Click to view submissions'
	});

	$('.ui.rating').rating();
	
	$('.url.example .ui.embed').embed();

	$('.item').click(function() {
		$('.results').hide();
	})

	$('.ui.embed').embed();

	$('.ui.accordion').accordion();

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
});
