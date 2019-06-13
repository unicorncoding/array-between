const between = require('./');

test('it should return the specified range', function() {
	const myArray = [1,2,3,4,5,6,8,9];
	const expected = [3,4,5];

	expect(between(myArray, 2, 3)).toEqual(expected);
});