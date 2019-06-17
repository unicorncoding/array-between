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

function between(arr, start, end) {
    validateArguments(arr, start, end);

    const skipped = skip(arr, start);

    return limit(skipped, end - start);
}


function validateArguments(arr, start, end) {
    if (!Array.isArray(arr)) {
        new TypeError(`Expected an Array, got ${typeof arr}`);
    }

    if (typeof start !== 'number') {
        new TypeError(`Expcted start index to be number, got ${typeof start}`);
    }

    if (typeof end !== 'number') {
        new TypeError(`Expected end index to be number, got ${typeof end}`);
    }

    if (end < start) {
        throw new RangeError(`Invalid range provided, start index (${start}) is bigger than end index (${end})`);
    }
}

function skip(input, skipIndex) {
  return input.filter(item, index) => index > skipIndex - 1;
}

function limit(input, limitIndex) {
    return input.filter(item, index) => index <= limitIndex;
}

module.exports = between;

