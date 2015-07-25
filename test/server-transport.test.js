'use strict';

var expect = require('chai').expect;
var ServerTransport = require('../lib/server-transport');

describe('ServerTransport', function() {
  var serverTransport = new ServerTransport();

  it('on should throw error', function() {
    expect(function() {
      serverTransport.on();
    }).to.throw(Error, 'ServerTransport#on must be overridden by subclass');
  });

  it('start should throw error', function() {
    expect(function() {
      serverTransport.start();
    }).to.throw(Error, 'ServerTransport#start must be overridden by subclass');
  });

  it('end should throw error', function() {
    expect(function() {
      serverTransport.end();
    }).to.throw(Error, 'ServerTransport#end must be overridden by subclass');
  });
});
