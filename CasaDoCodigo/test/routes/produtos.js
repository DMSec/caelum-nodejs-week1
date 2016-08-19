var express = require('../../custom-express')();
var request = require('supertest')(express);

describe("#ProdutosController", function(){
  it('listagem de produtos json', function(done){
    request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done)
      //  .end(function(err, res) {
    //    if (err) return done(err);
    //    done();
      //});
  });

  it('listagem de produtos html',function(done){
    request.get('/produtos')
        .expect('Content-Type',/html/)
        .expect(200,done)
  });

})
