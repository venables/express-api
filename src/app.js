'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json({});
});

module.exports = app;
