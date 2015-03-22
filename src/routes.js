'use strict';

var controllers = require('./controllers');
var express = require('express');
var router = express.Router();

router.post('/sessions', controllers.sessions.create);
router.delete('/sessions', controllers.sessions.destroy);

router.get('/users', controllers.users.index);
router.post('/users', controllers.users.create);
router.get('/users/:userId', controllers.users.show);
router.put('/users/:userId', controllers.users.update);
router.delete('/users/:userId', controllers.users.destroy);

module.exports = router;
