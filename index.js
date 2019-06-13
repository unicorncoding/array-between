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

function skip(inputArray, skipIndex) {
	return inputArray.filter(function(item, index) {
		return Boolean(index > skipIndex - 1);
	});
}

function limit(inputArray, limitIndex) {
	return inputArray.filter(function (item, index) {
		return Boolean(index <= limitIndex - 1);
	});
}

function between(arr, start, till, includeLimits) {
	if (!Array.isArray(arr)) {
      throw new TypeError('Expected first argument to be Array found '+ typeof arr);
    }
	const _start = start || 0;
	const _till = till || arr.length;
    const skiped = skip(arr, start);

    return limit(skiped, till);
}


module.exports = between;

