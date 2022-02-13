const assert = require('assert').strict;
const isSymmetric = require('./05.check-for-symmetry');

describe('isSymmetric', () => {

    it('test with non-array input', () => {
       assert.equal(isSymmetric(2), false)
       assert.equal(isSymmetric('a'), false)
       assert.equal(isSymmetric('abvv'), false)

    })

    it('test with symmetric array with numbers', () => {
        assert.equal(isSymmetric([2, 2, 2, 2]), true);
        assert.equal(isSymmetric([3, 2, 1, 2, 3]), true);

    })

    it('test with symmetric array with strings', () => {
        assert.equal(isSymmetric(['a', 'b', 'b', 'a']), true);
        assert.equal(isSymmetric(['a', 'a', 'a', 'a', 'a']), true);

    })

    it('test with non-symmetric array', () => {
        assert.equal(isSymmetric([2, 3, 4, 5, 6]), false);
        assert.equal(isSymmetric(['7', '4', '1', '9', '2']), false);
        
    })
    
    it('test with mixed array', () => {
        assert.equal(isSymmetric([2,2,2,2,'2']), false);
    })
});