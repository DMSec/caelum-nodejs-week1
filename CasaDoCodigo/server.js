var app = require('./custom-express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

console.log('Tentando iniciar servidor...');
app.listen(3000,function(){
  console.log('Servidor rodando');
});
