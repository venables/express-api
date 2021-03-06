'use strict';

var _ = require('lodash');
var errors = require('../lib/errors');
var models = require('../models');

var index = function(req, res, next) {
  models.User.findAll().done(function(err, users) {
    if (err) {
      return next(err);
    }

    res.json(200, {
      users: users
    });
  });
};

var show = function(req, res, next) {
  res.json(200, req.user);
};

var create = function(req, res, next) {
  var params = _.pick(req.body, 'email', 'password');

  models.User.create(params).done(function(err) {
    if (err) {
      return next(err);
    }

    res.sendStatus(201);
  });
};

var update = function(req, res, next) {
  next(new errors.NotFoundError());
};

var destroy = function(req, res, next) {
  next(new errors.NotFoundError());
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
