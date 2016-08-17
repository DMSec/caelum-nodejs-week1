var connectionFactory = require('../infra/connectionFactory');

module.exports = {

  lista: function(callback){
      var con = connectionFactory();
      con.query('select * from livros', function(erro, results){
          callback(results);
      });
  }


}
