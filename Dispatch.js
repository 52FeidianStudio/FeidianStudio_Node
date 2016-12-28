var fork = require('child_process').fork;

// var cpus = require('os').cpus();

var server = require('net').createServer();

server.on('connection', function(socket) {
	socket.end('handle by parent \n');
});
server.listen(3000,function() {
	child
})
