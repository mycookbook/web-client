/* eslint-disable */
// const query = 'sample'
// import axios from 'axios';
// let query1 = 'sample'
// axios.get(`${process.env.BASE_URL}/search?query=${query1}`)
// .then((response) => {
// 	let nm = []

// 	let b = response.data.response.map(function(k, em) {
// 		let obj = {
// 			category: k.name
// 		}
		
// 		return obj;
// 	});
// 	console.log(b)
// })

// $(function() {
// 	$('#search-input').keyup(function() {
// 		let query = this.value

// 		$('.ui.search').search({
// 			minCharacters : 3,
// 			apiSettings: {
// 				url: `${process.env.BASE_URL}/search?query=${query}`,
// 				onResponse : function(r) {
// 					console.log('lawd', r.data.response)
// 					// return r.name
// 				},
// 			},
// 		  });
// 	});
// });


/* eslint-disable */
// const query = 'sample'
// import axios from 'axios';
// let query1 = 'sample'
// axios.get(`${process.env.BASE_URL}/search?query=${query1}`)
// .then((response) => {
// 	let nm = []

// 	let b = response.data.response.map(function(k, em) {
// 		let obj = {
// 			category: k.name
// 		}
		
// 		return obj;
// 	});
// 	console.log(b)
// })

$(function() {
	$('#search-input').keyup(function() {
		let query = this.value

		$('.ui.search').search({
			type: 'category',
			// minCharacters : 6,
			apiSettings   : {
				url: `${process.env.BASE_URL}/search?query=${query}`,
				onResponse : function(server) {
					let response = []

					if (!server.response || !server.response) {
						return;
					}

					const items = server.response
					console.log('server response', items)
					
					$.each(items, function(index, item) {
						response.push({
							title       : item.name
						});
					});

					console.log('TFIT', response)

					return response.results;
				}
			}
		});
	});
});
