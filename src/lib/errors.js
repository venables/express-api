'use strict';

var util = require('util');

function NotFoundError(message) {
  Error.call(this);
  Error.captureStackTrace(this, NotFoundError);
  this.message = message;
  this.status = 404;
}

function UnauthorizedError(message) {
  Error.call(this);
  Error.captureStackTrace(this, NotFoundError);
  this.message = message;
  this.status = 401;
  this.headers = {
    'WWW-Authenticate': 'Bearer realm="Application"'
  };
}

util.inherits(NotFoundError, Error);
util.inherits(UnauthorizedError, Error);

module.exports = {
  NotFoundError: NotFoundError,
  UnauthorizedError: UnauthorizedError
};
