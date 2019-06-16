/**
 * MIT License

Copyright (c) 2019 Hashir Hussain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

'use strict';

const EXPECTED_ARRAY = 'argument must be an Array';
const EXPECTED_NUMBER = 'argument must be a Number';
const EXPECTED_BOOLEAN = 'argument must be Boolean';

function skip(input, skipIndex) {
	return input.filter(function(item, index) {
		return Boolean(index > skipIndex - 1);
	});
}

function limit(input, limitIndex) {
	return input.filter(function (item, index) {
		return Boolean(index <= limitIndex - 1);
	});
}

function throwTypeError(message) {
	throw new TypeError(message);
}

function between(arr, start, till, includeLimits = true) {
	if (arr === undefined && !Array.isArray(arr)) {
      	throwTypeError(`${EXPECTED_ARRAY}, found ${typeof arr}`);
    }

    if (start !== undefined && typeof start !== 'number') {
      	throwTypeError(`${EXPECTED_NUMBER}, found ${typeof start}`);
    }

    if(till !== undefined && typeof till !== 'number') {
    	throwTypeError(`${EXPECTED_NUMBER}, found ${typeof till}`);
    }

    if(typeof includeLimits !== 'boolean') {
    	throwTypeError(`${EXPECTED_BOOLEAN}, found ${typeof includeLimits}`);	
    }
}


module.exports = between;

