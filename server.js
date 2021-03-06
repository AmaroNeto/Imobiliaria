// server.js
const express = require('express');
const app = express();
const path = require('path');

const pontoService  = require('./imobiliariaService/service');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

app.get('/api/pontos/precoM2/', function(req, res) {
  let pontos = new pontoService(req, res)
    pontos.getPontoByPrecoM2();
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
