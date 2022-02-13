const assert = require('assert').strict;
const lookupChar = require('./03.Char Lookup');

describe('lookupChar function', () => {

    it('test with number input in first param', () => {
        assert.equal(lookupChar(1, 2), undefined);
    });

    it('test with string input in second param', () => {
        assert.equal(lookupChar('abc', '1'), undefined);
    });

    it('test with decimal input in second param', () => {
        assert.equal(lookupChar('abcd', 1.5), undefined);
    });

    it('test with incorrect index', () => {
        assert.equal(lookupChar('a', 2), 'Incorrect index');
        assert.equal(lookupChar('a', -2), 'Incorrect index');
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });

    it('test with correct input', () => {
        assert.equal(lookupChar('abcd', 2), 'c');
        assert.equal(lookupChar('abcd', 1), 'b');
        assert.equal(lookupChar('a', 0), 'a');
    });



});