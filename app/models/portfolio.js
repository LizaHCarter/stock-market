'use strict';
var Stock = require('../../app/models/stock');

function Portfolio(name, stocks){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(symbol, count){
  var stock = findStocks(this.stocks, symbol);


    if (stock){
      stock.count += count;
    }else{
      stock = new Stock(symbol, count);
  this.stocks.push(stock);
    }

};

//PRIVATE HELPER FUNCTION//
function findStocks(stocks, symbol){
  
  for(var i=0; i<stocks.length; i++){
    
    if(stocks[i].symbol===symbol.toUpperCase()){
      return stocks[i];
    }
  }
  return null;
}


module.exports = Portfolio;
