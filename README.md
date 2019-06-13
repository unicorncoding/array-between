# array.between
> returns a filtered copy of an array with only the specified range.

## Installation
Install with npm
```javascript
npm install array-between
```

## Usage
```javascript
import bewteen from 'array-between';

var arr = ['a', 'b', 3, 'd', 'i', 5, 0]; //Your input array

var result = between(arry, 1, 5);
//Output: ['b', 3, 'd', 'i', 5]
