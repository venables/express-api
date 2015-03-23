'use strict';

var crypto = require('crypto');
var models = require('../models');

var create = function(req, res, next) {
  models.User.authenticate(req.body.email, req.body.password).done(function(err, user) {
    if (err) {
      return next(err);
    }

    crypto.randomBytes(64, function(err, bytes) {
      if (err) {
        return next(err);
      }

      models.Session.create({ userId: user.get('id'), value: bytes.toString('hex') }).done(function(err, session) {
        if (err) {
          return next(err);
        }

        res.json(201, session);
      });
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
