function ProdutoDao(connection){
  this._connection = connection;
};

ProdutoDao.prototype.lista = function(callback){
  this._connection.query('select * from livros', callback);
};

module.exports = ProdutoDao;
