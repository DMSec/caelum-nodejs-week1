var LivrosDao = require('../infra/LivrosDao');

module.exports = function(app){

  app.get("/produtos", function(req,res){

    LivrosDao.lista(function(result){
      res.render("produtos/lista",{lista:result});
    });
});


};
