'use strict';
var expect = require('chai').expect;
/*global describe, it*/
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var port = new Portfolio('Tech');
      expect(port).to.be.instanceof(Portfolio);
      expect(port.name).to.equal('Tech');
      expect(port.stocks).to.have.length(0);
    });
  });
});
