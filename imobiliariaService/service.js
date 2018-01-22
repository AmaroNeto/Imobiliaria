const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://heroku_n6x99c72:ppjhsebf5rara58irlsd8lucar@ds211558.mlab.com:11558/heroku_n6x99c72';

class PontoService{
    constructor(req, res){
        this.req = req
        this.res = res
    }

    getAllPonto(){

      let self = this;
      try{
        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            let pontosList = []
            const myAwesomeDB = database.db('heroku_n6x99c72')
            let cursor = myAwesomeDB.collection('imobiliaria').find();

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

      let self = this;
      let param = this.req.query.id;

      try{
        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            let pontosList = []
            const myAwesomeDB = database.db('heroku_n6x99c72')
            let cursor = myAwesomeDB.collection('imobiliaria').find({"_id": parseInt(param)});

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

    getPontoByTamanho(){

      let self = this;
      let param = this.req.query.tamanho

      try{
        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            let pontosList = []
            const myAwesomeDB = database.db('heroku_n6x99c72')
            let cursor = myAwesomeDB.collection('imobiliaria').find({"tamanho": {$lt: parseInt(param)} });

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
}
module.exports = PontoService
