'use strict';

var express = require('express');

var controllers = require('./controllers');
var models = require('./models');
var router = express.Router();

router.post('/sessions', controllers.sessions.create);
router.delete('/sessions', controllers.sessions.destroy);

router.param(':userId', function(req, res, next, userId) {
  models.User.find(userId).done(function(err, user) {
    req.user = user;
    next(err);
  });
});

router.get('/users', controllers.users.index);
router.post('/users', controllers.users.create);
router.get('/users/:userId', controllers.users.show);
router.put('/users/:userId', controllers.users.update);
router.delete('/users/:userId', controllers.users.destroy);

module.exports = router;
