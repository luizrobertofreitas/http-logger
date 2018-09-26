var http = require('http');

var server = http.createServer((function(request, response) {
	console.log("");
	console.log("REQUEST on " + request.url  + " at: " + new Date());
	let body = [];
	request.on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		console.log(Buffer.concat(body).toString());
	});
	console.log("");
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write("{'status':'ok'}");
	response.end();
}));

server.listen(7000);
