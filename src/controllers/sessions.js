'use strict';

var create = function(req, res) {
  res.send(400);
};

var destroy = function(req, res) {
  res.send(200);
};

module.exports = {
  create: create,
  destroy: destroy
};
