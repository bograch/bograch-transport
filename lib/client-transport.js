'use strict';

function ClientTransport() {
}

ClientTransport.prototype.connect = function (cb) {
  throw new Error('ClientTransport#connect must be overridden by subclass');
};

ClientTransport.prototype.end = function () {
  throw new Error('ClientTransport#end must be overridden by subclass');
};

ClientTransport.prototype.call = function (methodName, args, cb) {
  throw new Error('ClientTransport#call must be overridden by subclass');
};

module.exports = ClientTransport;