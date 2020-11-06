/* eslint-disable */

$(function() {
	$('.cookie.nag').nag('show');

	$('.nutr_info').popup({});

	$('#addRecipeButtonTitleText').popup({
		title: 'Know a nice little tweak to this recipe? Make it your own, click to add it!'
	});

	$('#viewRecipeSubmissionsTitleText').popup({
		title: 'Click to view submissions'
	});

	$('.ui.rating').rating();
	
	$('.url.example .ui.embed').embed();
});
