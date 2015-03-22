'use strict';

var create = function(req, res, next) {
  res.send(400);
};

var destroy = function(req, res, next) {
  res.send(200);
};

module.exports = {
  create: create,
  destroy: destroy
};
