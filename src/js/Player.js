'use strict';

function Player(name, color, isComputer) {
  this.name = name;
  this.color = color;
  this.isComputer = isComputer;
  this.position = 0;
}

Player.prototype.setPosition = function(spaceNumber) {
  this.position = spaceNumber;
};

Player.prototype.getPosition = function() {
  return this.position || 0;
};