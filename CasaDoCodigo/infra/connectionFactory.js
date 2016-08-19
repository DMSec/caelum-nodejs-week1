var mysql = require('mysql');
var databaseName = "casadocodigo";

if(process.env.NODE_ENV == 'test'){
  databaseName = 'casadocodigo_teste';
}

function createConnection(){
  return mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : databaseName
});
};

module.exports = createConnection;
