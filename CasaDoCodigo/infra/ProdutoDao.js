function ProdutoDao(connection){
  this._connection = connection;
};

ProdutoDao.prototype.lista = function(callback){
  this._connection.query('select * from livros', callback);
};

ProdutoDao.prototype.salva = function(livro, callback){
  this._connection.query('insert into livros SET ?',livro,callback);
};

module.exports = ProdutoDao;
