'use strict';

function ServerTransport(options) {
}

ServerTransport.prototype.on = function (methodName, cb) {
  throw new Error('ServerTransport#on must be overridden by subclass');
};

ServerTransport.prototype.start = function (cb) {
  throw new Error('ServerTransport#start must be overridden by subclass');
};

ServerTransport.prototype.end = function () {
  throw new Error('ServerTransport#end must be overridden by subclass');
};

module.exports = ServerTransport;
