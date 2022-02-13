const createCalculator = require('./07.add-subtract');
const assert = require('assert').strict;

describe('createCalculator', () => {

    it('test return type', () => {
        let calculator = createCalculator();

        assert.equal(typeof (calculator), 'object');
    })

    it('test add function', () => {
        let calculator = createCalculator();

        calculator.add(12);
        calculator.add(20);
        calculator.add(18);

        assert.equal(calculator.get(), 50)
    })

    it('test subtract function', () => {
        let calculator = createCalculator();

        calculator.subtract(12);
        calculator.subtract(20);
        calculator.subtract(18);

        assert.equal(calculator.get(), -50)
    })

    it('test get function', () => {
        let calculator = createCalculator();

        calculator.add(12);

        assert.equal(calculator.get(), 12)
    })

    it('test parse string to number in function', () => {
        let calculator = createCalculator();

        calculator.add('12');
        calculator.add('13');
        calculator.subtract('12');

        assert.equal(calculator.get(), 13)
    })

    it('test with incorrect input', () => {
        let calculator = createCalculator();

        calculator.add('abv');

        assert.equal(calculator.get(), NaN)
    })



});
