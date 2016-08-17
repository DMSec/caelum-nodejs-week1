var connectionFactory = require('../infra/connectionFactory');

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
    })
    connection.query('select * from livros', function(err,result,fields){
      res.render("produtos/lista",{lista:result});
    });
    connection.end(function(err){

    });
  });
};
