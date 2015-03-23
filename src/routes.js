'use strict';

var express = require('express');

var controllers = require('./controllers');
var middleware = require('./middleware');
var models = require('./models');
var router = express.Router();

// Not authenticated
router.post('/sessions', controllers.sessions.create);
router.post('/users', controllers.users.create);

// Authenticated

router.use(middleware.authenticated);

router.param('userId', function(req, res, next, userId) {
  models.User.find(userId).done(function(err, user) {
    if (!user) {
      err = err || new Error('not found');
    }

    req.user = user;
    next(err);
  });
});


router.delete('/sessions', controllers.sessions.destroy);
router.get('/users', controllers.users.index);
router.route('/users/:userId')
  .get(controllers.users.show)
  .put(controllers.users.update)
  .delete(controllers.users.destroy);

module.exports = router;
