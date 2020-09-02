/* eslint-disable */
const query = 'sample'

$(function() {
	$('#search-input').keyup(function() {
		let query = this.value

		$('.ui.search').search({
			apiSettings: {
				cache: 'local',
				url: `${process.env.BASE_URL}/search?query=${query}`
			},
			fields: {
				results : 'name',
			},
			minCharacters : 3
		  });
	});
});
