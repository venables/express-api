'use strict';

var index = function(req, res) {
  res.send({
    users: []
  });
};

var show = function(req, res) {
  res.send(404);
};

var create = function(req, res) {
  res.send(400);
};

var update = function(req, res) {
  res.send(404);
};

var destroy = function(req, res) {
  res.send(404);
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
