var tcpProxy = require('tcp-proxy');

var server = tcpProxy.createServer({
  target: {
    host: '127.0.0.1',
    port: 7999 // Atlassian Stash GIT+SSH default port
  }
});

server.listen(22);