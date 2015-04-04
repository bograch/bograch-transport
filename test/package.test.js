'use strict';

var expect = require('chai').expect;
var transport = require('..');

describe('bograch-transport', function() {
  it('should export ClientTransport constructor', function() {
    expect(transport.ClientTransport).to.be.a('function');
  });
  
  it('should export ServerTransport constructor', function() {
    expect(transport.ServerTransport).to.be.a('function');
  });
});