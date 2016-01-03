'use strict';

//based on tutorial from https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4


var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');


var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ectended: true}));
app.use(bodyParser.json());
require('dotenv').load();




// routes for my API

var router = express.Router();

// test route to make sure everything is working (access at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcom to my api!'});
});

// more routes will be prefixed with /api
app.use('/api', router);

// start server

app.listen(port);
console.log('Magic happens on port ' + port);

console.log(process.env.MONGO_URI);

/*
old code from clementine app

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});

*/