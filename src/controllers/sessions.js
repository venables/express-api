'use strict';

var async = require('async');
var crypto = require('crypto');
var models = require('../models');

var create = function(req, res, next) {
  var user;
  var tokenBuffer;

  async.series({
    authenticate: function(next) {
      models.User.authenticate(req.body.email, req.body.password).done(function(err, _user) {
        user = _user;
        next(err);
      });
    },
    generateToken: function(next) {
      crypto.randomBytes(64, function(err, buf) {
        tokenBuffer = buf;
        next(err);
      });
    },
    session: function(next) {
      models.Session.create({ userId: user.get('id'), value: tokenBuffer.toString('hex') }).done(next);
    }
  }, function(err, results) {
    if (err) {
      return next(err);
    }

    res.json(201, results.session);
  });
};

var destroy = function(req, res, next) {
  req.session.destroy().done(function(err) {
    if (err) {
      return next(err);
    }

    req.session = null;
    req.currentUser = null;

    res.sendStatus(200);
  });
};

module.exports = {
  create: create,
  destroy: destroy
};
