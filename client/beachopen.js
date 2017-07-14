const fs = require('fs');

file = './json_output/menu.txt'
fs.readFile(file, 'utf8', function(err,data) {
	if (err) {
		return console.log(err);
	}
	
	var menu = data
	console.log(menu.menu)
})