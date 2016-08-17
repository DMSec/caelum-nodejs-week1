var express = require('express');
var app = express();

module.exports = function(){
  app.set('view engine','ejs');
  app.use(express.static('./public'));


  require('./routes/produto')(app);
  return app;
};
