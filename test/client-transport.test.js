'use strict';

var expect = require('chai').expect;
var ClientTransport = require('../lib/client-transport');

describe('ClientTransport', function() {
  var clientTransport = new ClientTransport();

  it('connect should throw error', function() {
    expect(function() {
      clientTransport.connect();
    }).to.throw(Error, 'ClientTransport#connect must be overridden by subclass');
  });

  it('end should throw error', function() {
    expect(function() {
      clientTransport.end();
    }).to.throw(Error, 'ClientTransport#end must be overridden by subclass');
  });

  it('call should throw error', function() {
    expect(function() {
      clientTransport.call();
    }).to.throw(Error, 'ClientTransport#call must be overridden by subclass');
  });
});
