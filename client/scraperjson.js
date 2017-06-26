var request = require('request');
var htmlToJson = require('html-to-json');



request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage. 
	var promise = htmlToJson.parse('<div>content</div>', {
		'text': function ($doc) {
			return $doc.find('div').text();
		}, function (err, result) {
			console.log(result)
		}
	})
	promise.done(function(result) {
		console.log('doneso')
	})
});

var promise = htmlToJson.request('http://prolificinteractive.com/team', {
  'images': ['div', function ($img) {
    return $img.attr('alt');
  }]
}, function (err, result) {
  console.log(result);
});