'use strict';

var isValid = require( './../lib' );

console.log( isValid( ['b','c','d'], 'e' ) );
// returns true

console.log( isValid( [], 'a' ) );
// returns true

console.log( isValid( ['b','c','d'], 'c' ) );
// returns false
