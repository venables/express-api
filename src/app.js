'use strict';

try { require('dotenv').load(); } catch(e) {}
var express = require('express');
var helmet = require('helmet');
var morgan = require('morgan');
var app = express();

app.use(helmet());
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.json({});
});

module.exports = app;
