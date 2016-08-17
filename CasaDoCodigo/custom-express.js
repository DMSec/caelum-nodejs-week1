var express = require('express');
var app = express();

module.exports = function(){
  app.set('view engine','ejs');
  app.use(express.static('./public'));




  require('./routes/produto')(app);

//Erros devem sempre se colocados por ultimo, senão corremos o risco de acessar
//páginas que existem, porém sempre seremos direcionados para as paginas de erros.
    app.use(function(req,res,next){
      res.render("erros/404");
      next();
    });



  return app;
};
