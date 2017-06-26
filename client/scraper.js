var request = require('request'),
	cheerio = require('cheerio'),
	fs = require('fs'),
noRestrictions = [];


request('http://www.cpdbeaches.com/home.cfm', function(err, resp, body){
	if (!err && resp.statusCode == 200){
		var $ = cheerio.load(body)
		$('li.no-restrictions', '#small-list').each(function() {
			var unrestricted = $(this).attr('class');

				noRestrictions.push(unrestricted)
			
		})
	console.log(noRestrictions)
	}
})

