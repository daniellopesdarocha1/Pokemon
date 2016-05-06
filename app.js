var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var con = require('./model/connection');

var routes = require('./routes/index');
var users = require('./routes/users');
var pokemon = require('./routes/pokemon');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session
app.use(session({
	secret:'Team Pokemon',
	resave: true,
	saveUninitialized: true
}));

/*app.use(function (req, res, next) {
	var user = req.session.user;
	console.log(req.path);
	if(req.originalUrl.includes('/users/')){
		next();
	}else{
		if(!user){
			res.redirect('./users/index');
		}
	}	
});*/

//Routes
app.use('/', routes);
app.use('/users', users);
app.use('/Pokemon', pokemon)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
