
const request = require('request');
const htmlparser = require('htmlparser');
const util = require('util');
var fs = require('fs');

fs.writeFile("./tmp/test/test.json", "testy", function(err) {
	if (err) {return console.log(err);}
})


