const assert = require('assert').strict;
const sum = require('./04.sum-of-numbers');

describe('sum', () => {
   
    it('testForCorrectlyWorkWithPositiveNumbers', () => {
        let arr = [1, 2, 3, 4, 5];
        let result = 15;
        let resultFromFunction = sum(arr);
        assert.equal(resultFromFunction, result);
    });

    it('testForCorrectlyWorkWithNegativeNumbers', () => {
        let arr = [-1,-2, -3, -4, -5];
        let result = -15;
        let resultFromFunction = sum(arr);
        assert.equal(resultFromFunction, result);
    });

    it('testForCorrectlyWorkWithEmptyInput', () => {
        let arr = [];
        let result = 0;
        let resultFromFunction = sum(arr);
        assert.equal(resultFromFunction, result);
    });

});