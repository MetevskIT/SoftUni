const assert = require('assert').strict;
const mathEnforcer = require('./04.Math Enforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {

        it('test with incorrect input', () => {
            assert.equal(mathEnforcer.addFive('a'), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive('1'), undefined);
        });

        it('test with correct input', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });
      
        it('test with negative numbers', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(-5.5), -0.5);
        });

    });

    describe('subtractTen', () => {

        it('test with incorrect input', () => {
            assert.equal(mathEnforcer.subtractTen('a'), undefined);
            assert.equal(mathEnforcer.subtractTen([]), undefined);
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        });

        it('test with correct input', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
        });
      
        it('test with negative numbers', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(-5.5), -15.5);
        });

    });

    describe('sum', () => {
        
        it('test with incorrect input', () => {
            assert.equal(mathEnforcer.sum('a',2), undefined);
            assert.equal(mathEnforcer.sum([],3), undefined);
            assert.equal(mathEnforcer.sum('1',4), undefined);

            assert.equal(mathEnforcer.sum(1,'a'), undefined);
            assert.equal(mathEnforcer.sum(2,[]), undefined);
            assert.equal(mathEnforcer.sum(3,'1'), undefined);
        });

        it('test with correct input', () => {
            assert.equal(mathEnforcer.sum(20,20), 40);
            assert.equal(mathEnforcer.sum(15.5,15.5), 31);
        });
      
        it('test with negative numbers', () => {
            assert.equal(mathEnforcer.sum(-5,-10), -15);
            assert.equal(mathEnforcer.sum(-5.5,-5.5), -11);
        });

    });
})