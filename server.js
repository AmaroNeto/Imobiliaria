// server.js
const express = require('express');
const app = express();
const path = require('path');

const pontoService  = require('./imobiliariaService/service');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/api/pontos', function(req, res) {
  let pontos = new pontoService(req, res)
    pontos.getAllPonto()
});

app.get('/api/pontos/id/', function(req, res) {
  let pontos = new pontoService(req, res)
    pontos.getPontoByID();
});

app.get('/api/pontos/tamanho/', function(req, res) {
  let pontos = new pontoService(req, res)
    pontos.getPontoByTamanho();
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
