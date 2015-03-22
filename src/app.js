'use strict';

try { require('dotenv').load(); } catch(e) {}
var express = require('express');
var helmet = require('helmet');
var morgan = require('morgan');
var routes = require('./routes');

var app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use('/api/v1', routes);

module.exports = app;
