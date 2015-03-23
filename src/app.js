'use strict';

try { require('dotenv').load(); } catch(e) {}
var express = require('express');

var bodyParser = require('body-parser');
var errors = require('./lib/errors');
var helmet = require('helmet');
var morgan = require('morgan');
var routes = require('./routes');

var app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/v1', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new errors.NotFoundError());
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (err.headers) {
      res.set(err.headers);
    }
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  if (err.headers) {
    res.set(err.headers);
  }
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
