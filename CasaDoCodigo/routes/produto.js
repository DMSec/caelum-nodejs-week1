var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app){

  app.get("/produtos/:id", function(req,res){
    var livro = req.body;
    var id = req.params.id;
    debugger;


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

    produtoDao.consulta(id, function(error,results,fields){
      res.format({
        html: function(){
          res.render("produtos/lista",{lista:results});
        },
        json: function(){
          res.json(results);
        }
      });

    });


        connection.end(function(err){ });

  });

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
      res.format({
        html: function(){
          res.render("produtos/lista",{lista:results});
        },
        json: function(){
          res.json(results);
        }
      });

      //res.render("produtos/lista",{lista:results});
    });



    connection.end(function(err){ });

  });

  app.post("/produtos", function(req,res){
    var livro = req.body;

    req.assert('titulo','Titulo deve ser preenchido').notEmpty();
    req.assert('preco','Preco deve ser um numero').isFloat();
    var errors = req.validationErrors();

    if(errors){
      console.log("Há erros de validacao!");
      res.format({
        html: function(){
          res.status(400).render("produtos/form",{validationErrors:errors});
        },
        json: function(){
          res.status(400).send(errors);
        }
      });
    }

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

    produtoDao.salva(livro, function(exception,results){
      res.redirect("/produtos");
    });

    connection.end(function(err){ });
  });

  app.get("/produtos/form",function(req,res){
    res.render('produtos/form');
  });
};
