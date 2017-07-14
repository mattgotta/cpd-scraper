const request = require('request');
const htmlparser = require('htmlparser');
const util = require('util');
var fs = require('fs');


request('http://www.cpdbeaches.com/home.cfm', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body);  
	var rawHtml = body;
	var handler = new htmlparser.DefaultHandler(function (error, dom) {
	    if (error)
	        [console.log(error)]
	    else
	        [console.log('done')]
	});
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rawHtml);

	var output = util.inspect(handler.dom, false, null);
	fs.writeFile("./json_output/output.txt", output, function(err) {
	if (err) {return console.log(err);}
})
});

