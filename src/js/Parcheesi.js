'use strict';

function Parcheesi() {
  this.numSpaces = 68;
  this.colors = ['green', 'red', 'blue', 'yellow'];
  this.spaces = [];
  this.players = [];
  this.activePlayerIndex = 0;
  this.boardSpacesElt = document.getElementById('boardSpaces');

  this.createPlayers();
  this.createSpaces();
  this.dice = new Dice();

  this.play();
}

Parcheesi.prototype.createPlayers = function() {
  for(var i = 0; i < 4; i++) {
    this.players.push(new Player('player ' + (i+1), this.colors[i] ,true));
  }
};

Parcheesi.prototype.createSpaces = function() {
  var isSafetySpace;
  var isPortrait;
  var fragment = document.createDocumentFragment();
  var spaceElt;
  var spaceNumberElt;

  for(var i = 0, j = 0; i < this.numSpaces; i++) {
    isSafetySpace = false;
    isPortrait = false;
    
    if(j === 0 || j === 7 || j === 12) {
      isSafetySpace = true;
    }

    if(j === 16) {
      j = 0;
    } else {
      j++;
    }
    
    if((i >= 4 && i <= 20) || (i >= 38 && i <= 54)) {
      isPortrait = true;
    }

    spaceElt = document.createElement('div');
    spaceElt.classList.add('space');
    spaceElt.classList.add('space-' + i);
    if(isPortrait) {
      spaceElt.classList.add('space--portrait');
    }

    spaceNumberElt = document.createElement('span');
    spaceNumberElt.classList.add('space__number');
    spaceNumberElt.textContent = i;

    spaceElt.appendChild(spaceNumberElt);
    fragment.appendChild(spaceElt);

    this.spaces.push(new Space(isSafetySpace));
  }

  this.boardSpacesElt.appendChild(fragment);
};

Parcheesi.prototype.getCurrentPlayer = function() {
  return this.players[this.activePlayerIndex];
};

Parcheesi.prototype.play = function() {
  var i = 0; // temp, until isWinning method is created
  while(i < 8) {
    var diceValues = this.dice.roll();
    var currentPlayer = this.getCurrentPlayer();
    var totalDiceValues =  diceValues[0] + diceValues[1];

    console.log('current player', currentPlayer.name);
    console.log('dice values', diceValues[0], diceValues[1]);

    // is doublets?
    if(diceValues[0] === diceValues[1]) {
      console.log('doublets');
    }

    // equal 5?
    if(diceValues[0] === 5 || diceValues[1] === 5 || totalDiceValues === 5) {
      console.log('equal 5');
    }

    this.move(currentPlayer, currentPlayer.getPosition() + totalDiceValues);
    this.nextPlayer();

    i++;
  }
};

Parcheesi.prototype.nextPlayer = function() {
  this.activePlayerIndex = (1 + this.activePlayerIndex) % 4;
};

Parcheesi.prototype.move = function(player, spaceNumber) {
  console.log('move', spaceNumber);
  if(spaceNumber === -1) {
    // move back home
  } else if(spaceNumber >= 0 && spaceNumber < this.numSpaces) {
    var currentSpace = this.boardSpacesElt.querySelector('.pawn.pawn--' + player.color);
    if(currentSpace) {
      currentSpace.classList.remove('pawn');
      currentSpace.classList.remove('pawn--' + player.color);
    }

    // check for blockade
    // check for pawns on newSpace

    var newSpace = this.boardSpacesElt.querySelector('.space-' + spaceNumber);
    if(newSpace) {
      newSpace.classList.add('pawn');
      newSpace.classList.add('pawn--' + player.color);
      player.setPosition(spaceNumber);
    }
  }
};

var game = new Parcheesi();