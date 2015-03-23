'use strict';

var models = require('../models');

var create = function(req, res, next) {
  models.User.authenticate(req.body.email, req.body.password).done(function(err, user) {
    if (err) {
      return next(err);
    }

    res.send(201, {
      user: user.toJSON()
    });
  });
};

var destroy = function(req, res, next) {
  res.send(200);
};

module.exports = {
  create: create,
  destroy: destroy
};
