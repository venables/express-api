'use strict';

var models = require('../models');

var index = function(req, res, next) {
  models.User.findAll().done(function(err, users) {
    if (err) {
      return next(err);
    }

    res.send({
      users: users
    });
  });
};

var show = function(req, res, next) {
  res.send(404);
};

var create = function(req, res, next) {
  res.send(400);
};

var update = function(req, res, next) {
  res.send(404);
};

var destroy = function(req, res, next) {
  res.send(404);
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
