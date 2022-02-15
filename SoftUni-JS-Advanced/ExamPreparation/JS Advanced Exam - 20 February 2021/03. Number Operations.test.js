const numberOperations = require('./03. Number Operations');
const assert = require('assert').strict

describe('numberOperations', () => {

    describe('powNumber', () => {
        it('powNumber test', () => {

            assert.equal(numberOperations.powNumber(5), 25)

        })
    })

    describe('numberChecker', () => {
        it('numberChecker test with correct input', () => {

            assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker('5'), 'The number is lower than 100!')

            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker('99'), 'The number is lower than 100!')

            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!')

        })

        it('numberChecker test with incorrect input', () => {

            assert.throws(() => numberOperations.numberChecker('a'))
            assert.throws(() => numberOperations.numberChecker('[]'))
            assert.throws(() => numberOperations.numberChecker('{}'))

        })
    })

    describe('sumArrays', () => {
        it('sumArrays test', () => {

            assert.deepEqual(numberOperations.sumArrays([2,3,4,5,6],[2,3,4,5]),[4, 6, 8, 10, 6])
            assert.deepEqual(numberOperations.sumArrays([1,1,1,1],[2,3,4,5,6]),[3, 4, 5, 6, 6])
            assert.deepEqual(numberOperations.sumArrays([1,1,1,1,1,1,1],[2,3,4,5,6]),[3, 4, 5, 6, 7, 1, 1])
        })
    })
})