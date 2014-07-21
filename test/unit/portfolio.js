'use strict';
var expect = require('chai').expect;
/*global describe, it*/
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var port = new Portfolio('Tech');
      expect(port).to.be.instanceof(Portfolio);
      expect(port.name).to.equal('Tech');
      expect(port.stocks).to.have.length(0);
    });
  });
  describe('#add', function(){
    it('should add stocks to portfolio', function(){
      var port = new Portfolio('Tech Portfolio');
      port.add('aapl', 50);
      port.add('msft', 35);
      port.add('aapl', 25);

      expect(port.stocks[0]).to.be.instanceof(Stock);
      expect(port.stocks).to.have.length(2);
      expect(port.stocks[0].count).to.equal(75);
      expect(port.stocks[1].count).to.equal(35);
    });
  });

});
