var app = require('../app');
var http = require('http');
var debug = require('debug')('FeidianStudio:server');

/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '3000');
var port = randomPort();
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * 根据cpu核数随机监听端口
 */
function randomPort() {
  return 3001 + Math.round((Math.random() * 10));
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
  debug('Listening on ' + bind);
}

process.on('message', function(m, tcp) {
  if(m === 'server') {
    //当进程建立连接时
    tcp.on('connection', function(socket) {
      // console.log("child_process provide server, pid：" + process.pid);
      server.emit("connection", socket);
    })
  }
})