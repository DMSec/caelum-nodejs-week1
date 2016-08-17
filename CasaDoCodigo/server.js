var app = require('./custom-express')();

console.log('Tentando iniciar servidor...');
app.listen(3000,function(){
  console.log('Servidor rodando');
});
