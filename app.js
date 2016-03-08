var http = require('http');
var randomNumberMod = require("./randomNumberMod.js");
var conversionUSD = require("./conversionUSD.js");
var balance = require("./balance.js");

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(balance.accountBalance() + balance.balance() + "\n");
  res.end();
}).listen(8000);
