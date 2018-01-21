const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://heroku_n6x99c72:amaro2017@ds211558.mlab.com:11558/heroku_n6x99c72';

class PontoService{
    constructor(req, res){
        this.req = req
        this.res = res
    }

    getAllPonto(){

      let self = this;
      try{
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            let pontosList = []
            let cursor = db.collection('imobiliaria').find();

            cursor.each(function(err, doc) {
              assert.equal(err, null);
              if (doc != null) {
                pontosList.push(doc)
              } else {
                return self.res.status(200).json({
                    status: 'success',
                    data: pontosList
                })
              }
            });
        });
    }catch(error){
        return self.res.status(500).json({
            status: 'error',
            error: error
        })
      }
    }

    getPontoByID(){

    }

    getPontoByTamanho(){

    }
}
module.exports = PontoService
