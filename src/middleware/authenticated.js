'use strict';

var errors = require('../lib/errors');
var models = require('../models');

var authenticated = function(req, res, next) {
  var authorizationHeader = req.get('Authorization');

  if (!authorizationHeader) {
    return next(new errors.UnauthorizedError());
  }

  var tokenParts = authorizationHeader.split(' ');

  if (tokenParts[0] !== 'Bearer') {
    return next(new errors.UnauthorizedError());
  }

  var token = tokenParts.pop();
  models.Session.find({ where: { value: token }, include: [models.User] }).done(function(err, session) {
    if (err) {
      return next(err);
    }

    if (!session) {
      return next(new errors.UnauthorizedError());
    }

    req.session = session;
    req.currentUser = session.getUser();
    next();
  });
};

module.exports = authenticated;
