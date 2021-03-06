var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
  app.set('view engine','ejs');
  app.use(express.static('./public'));


  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use(expressValidator());

  require('./routes/produto')(app);

//Erros devem sempre se colocados por ultimo, senão corremos o risco de acessar
//páginas que existem, porém sempre seremos direcionados para as paginas de erros.
    app.use(function(req,res,next){
      res.status(404).render("erros/404");

      next();
    });

    app.use(function(error,req,res,next){
      res.status(500).render("erros/500");
      console.log(error);
      next();
    });




  return app;
};
