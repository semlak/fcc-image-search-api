'use strict';

//used https://www.npmjs.com/package/mongoose-auto-increment to help with auto incrementing object ids in database


// server.js

var log = function(data) {
	console.log(data);
};

// base setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = require('url');
var path = require('path');
var port = process.env.PORT || 8080;
var https = require('https');
var http = require('http');
var router = express.router;
var exports = module.exports = {};
//app.engine('.html', require('jade'));
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');




//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var dotenv = require('dotenv').load() || null;
var apiKey = process.env.API_KEY


var connection = mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost/image-search');



var route = require('./app/controllers/imageSearch.js');
route.controller(app);


// start server

var server = app.listen(port);
console.log('Magic happens on port ' + port);

exports.closeServer = function(){
	//mainly used for testing
	console.log("closing server");
	mongoose.connection.close()
 	server.close();
};


// setTimeout(function() {
// 	console.log("closing server");
// 	server.close();
// }, 3000);