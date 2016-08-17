console.log("Server")

var server = require('http');
var ip = "localhost";
var porta = 3000;

server.createServer(function(req,res){
  console.log('Recebendo request!');
  res.writeHead(200,{'Content-type':'text/html'});

  res.end("<html><body>Uma mensagem na tela!</body></html>");
}).listen(porta,ip);

console.log("Server listening on http://"+ip+":"+porta);
