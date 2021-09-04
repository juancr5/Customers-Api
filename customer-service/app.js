let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

/*Remove 1
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/

let app = express();

// view engine setup
//Remove 3
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/
let MongoDBUtil = require('./modules/mongodb/mongodb.module').MongoDBUtil;
let CustomerController = require('./modules/customer/customer.module')().CustomerController


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Remove 4
//app.use(express.static(path.join(__dirname, 'public')));

MongoDBUtil.init();
app.use('/customers', CustomerController);

/*Remove 2
app.use('/', indexRouter);
app.use('/users', usersRouter);
*/

//Add 1
//Creacion del get
app.get('/', function(req, res) {
  let pkg = require(path.join(__dirname, 'package.json'));
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: 'up'
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  //Remove 5
  //res.render('error');
  
  //Add 2
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
  
});

module.exports = app;
