'use strict';

var errors = require('../lib/errors');
var models = require('../models');

var authenticated = function(req, res, next) {
  var authorizationHeader = req.get('Authorization');

  if (!authorizationHeader) {
    // res.set('WWW-Authenticate', 'Token realm="Application"')
    // res.send(401)
    return next(new Error());
  }

  var tokenParts = authorizationHeader.split(' ');

  if (tokenParts[0] !== 'Bearer') {
    // res.set('WWW-Authenticate', 'Token realm="Application"')
    // res.send(401)
    return next(new Error());
  }

  var token = tokenParts.pop();
  models.Session.find({ where: { value: token }, include: [models.User] }).done(function(err, session) {
    if (err) {
      return next(err);
    }

    if (!session) {
      return next(new errors.NotFoundError());
    }

    req.session = session;
    req.currentUser = session.getUser();
    next();
  });
};

module.exports = authenticated;
