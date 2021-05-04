var connect = require('connect');
var serveStatic = require('serve-static');


connect().use(serveStatic(__dirname)).listen(3000, function(){
	console.log('Server is up on port 3000!');
});