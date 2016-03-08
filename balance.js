var randomNumberMod = require("./randomNumberMod.js");
var conversionUSD = require("./conversionUSD.js");

var balance = function() {
  return conversionUSD(randomNumberMod(100, 1000000));
};

var accountBalance = function() {
  return "Account Balance:\n";
};

module.exports.balance = balance;
module.exports.accountBalance = accountBalance;
