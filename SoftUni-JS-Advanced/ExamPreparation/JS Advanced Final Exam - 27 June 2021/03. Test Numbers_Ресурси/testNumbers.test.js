const testNumbers = require('./testNumbers');
const assert = require('assert').strict;

describe('testNumbers testing', () => {

    describe('sumNumbers', () => {

        it('test with correct input', () => {
           assert.equal(testNumbers.sumNumbers(20, 20), '40.00')
           assert.equal(testNumbers.sumNumbers(20.2, 20.2), '40.40')
        })

        it('test with incorrect input', () => {
          
            assert.equal(testNumbers.sumNumbers(20, `20`), undefined)
            assert.equal(testNumbers.sumNumbers(`20`, 20), undefined)

            assert.equal(testNumbers.sumNumbers(20, false), undefined)
            assert.equal(testNumbers.sumNumbers(true, 20), undefined)

            assert.equal(testNumbers.sumNumbers(20, []), undefined)
            assert.equal(testNumbers.sumNumbers({}, 20), undefined)
         })

    })

    describe('numberChecker', () => {

        it('test with correct input', () => {
           assert.equal(testNumbers.numberChecker(2),'The number is even!')
           assert.equal(testNumbers.numberChecker(3), 'The number is odd!')
        })

        it('test with incorrect input', () => {
          
            assert.throws(()=>testNumbers.numberChecker(`false`))
            assert.throws(()=>testNumbers.numberChecker(`[]`))
            assert.throws(()=>testNumbers.numberChecker(`{}`))
            assert.throws(()=>testNumbers.numberChecker(`2a`))
            assert.throws(()=>testNumbers.numberChecker())
         })

    })

    describe('averageSumArray', () => {

        it('test with correct input', () => {
           assert.equal(testNumbers.averageSumArray([5,5,5,5]),5)
           assert.equal(testNumbers.averageSumArray([2,2,2,2,2]), 2)
        })

    

    })
})