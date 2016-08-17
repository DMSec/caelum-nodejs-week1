var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app){
  app.get("/produtos", function(req,res){


    var connection = connectionFactory();

    connection.connect(function(err){
      if(err){
        console.log('Não foi possivel conectar no banco!');
        console.log(err);
        return;
      }

      console.log('Conexão com o banco OK');
    });

    var produtoDao = new ProdutoDao(connection);

    produtoDao.lista(function(error,results,fields){
      res.render("produtos/lista",{lista:results});
    });
    
    connection.end(function(err){

    });
  });
};
