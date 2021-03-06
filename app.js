///  heroku logs -t
// heroku addons:create newrelic:wayne
// https://www.veerayaaa.com/posts/free-and-easy-ways-to-prevent-heroku-free-dyno-from-sleeping/

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var cors = require('cors');
var fs = require('fs');
var app = express();

// Configurar cabeceras y cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Config variables de aplicacion
var conf = require('./config/config.js')();

// Config de las bases de datos
require('./config/db.js')(conf);

// Config API (modelos)
require('./api/peticiones/Rush.js')(app);
require('./api/peticiones/meteo.js')(app, conf);
require('./api/peticiones/spotify.js')(app, conf);
require('./api/peticiones/battlenet.js')(app, conf);

// Config del servidor
app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.listen(app.get('port'), function() {
    console.log('------------------------------------------------');
    console.log('------------------------------------------------');
    console.log("Servidor configurado por puerto: "+app.get('port'));
    console.log('http://localhost:'+app.get('port'));
});

// Aplicaciones web
app.use(express.static(__dirname + '/public'));	   
app.use(express.static(__dirname + '/public/rush'));   
app.use(express.static(__dirname + '/public/editor'));	
app.use(express.static(__dirname + '/public/controlguild'));	
app.use(express.static(__dirname + '/public/meteo'));	
app.use(express.static(__dirname + '/public/consulta'));	
app.use(express.static(__dirname + '/public/angular'));







