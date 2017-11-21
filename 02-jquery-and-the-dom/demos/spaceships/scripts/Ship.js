'use strict';

/*** passing an object into a constructor function ***/

function Ship (data) {
    this.name = data.name;
    this.owner = data.owner;
    this.classification = data.classification;
}

const shipData = [
    {name: 'Sweet Creature', owner: 'Owen', classification: 'luxury'},
    {name: 'Hot Stuff', owner: 'Gina', classification: 'racing'}
];

const ships = [];
shipData.forEach(function (shipObj) {
    ships.push( new Ship(shipObj) );
});