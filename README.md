array-max
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array in which no element exceeds a maximum value.


## Installation

``` bash
$ npm install validate.io-array-max
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isValid = require( 'validate.io-array-max' );
```

#### isValid( value, max )

Validates if a `value` is an `array` in which no element exceeds a maximum value.

``` javascript 
var value = ['b','c','d'],
	max = 'e';

var bool = isValid( value, max );
// returns true
```


## Examples

``` javascript
var isValid = require( 'validate.io-array-max' );

console.log( isValid( ['b','c','d'], 'e' ) );
// returns true

console.log( isValid( [], 'a' ) );
// returns true

console.log( isValid( ['b','c','d'], 'c' ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-array-max.svg
[npm-url]: https://npmjs.org/package/validate.io-array-max

[travis-image]: http://img.shields.io/travis/validate-io/array-max/master.svg
[travis-url]: https://travis-ci.org/validate-io/array-max

[coveralls-image]: https://img.shields.io/coveralls/validate-io/array-max/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/array-max?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/array-max.svg
[dependencies-url]: https://david-dm.org/validate-io/array-max

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/array-max.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/array-max

[github-issues-image]: http://img.shields.io/github/issues/validate-io/array-max.svg
[github-issues-url]: https://github.com/validate-io/array-max/issues
