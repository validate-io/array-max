/**
*
*	VALIDATE: array-max
*
*
*	DESCRIPTION:
*		- Validates if a value is an array in which no element exceeds a maximum value.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// ARRAY MAX //

/**
* FUNCTION: isArrayWithMax( value, max )
*	Validates if a value is an array in which no element exceeds a maximum value.
*
* @param {*} value - value to be validated
* @param {Number} max - maximum allowed value
* @returns {Boolean} boolean indicating if a value is an array in which no element exceeds a maximum value
*/
function isArrayWithMax( value, max ) {
	if ( !isArray( value ) ) {
		return false;
	}
	for ( var i = 0; i < value.length; i++ ) {
		if ( value[ i ] > max ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isArrayWithMax()


// EXPORTS //

module.exports = isArrayWithMax;
