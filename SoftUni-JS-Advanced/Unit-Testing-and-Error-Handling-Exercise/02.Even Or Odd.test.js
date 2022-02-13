const assert = require('assert').strict;
const isOddOrEven = require('./02.Even Or Odd');

describe('isOddOrEven function', () => {

    it('test with input number', () => {
        assert.equal(isOddOrEven(2), undefined);
    });
    
    it('test with input is even string', () => {
        assert.equal(isOddOrEven('abcd'), 'even');
    });
    it('test with input is odd string', () => {
        assert.equal(isOddOrEven('abc'), 'odd');
    });
    

});