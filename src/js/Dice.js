'use strict';

function Dice() {

}

Dice.prototype.roll = function() {
  var randomNumber = function() {
    return Math.floor(1 + (Math.random() * 6));
  };
  
  var d1 = randomNumber();
  var d2 = randomNumber();

  return [d1, d2];
};