const { it } = require('mocha');
const dealership = require('./03. Dealership');
const assert = require('assert').strict;

describe('dealership test', () => {

    describe('newCarCost test', () => {
        it('test with own property', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 2000000), 1985000)
            assert.equal(dealership.newCarCost('Audi A6 4K', 100000), 80000)
            assert.equal(dealership.newCarCost('Audi A8 D5', 100000), 75000)
            assert.equal(dealership.newCarCost('Audi TT 8J', 100000), 86000)
        })

        it('test with without own property', () => {
            assert.equal(dealership.newCarCost('BMW 530I', 2000000), 2000000)
            assert.equal(dealership.newCarCost('Ford Kuga', 100000), 100000)
            assert.equal(dealership.newCarCost('Audi A8 D6', 100000), 100000)
            assert.equal(dealership.newCarCost('Audi TT 8f', 100000), 100000)
        })

    })

    describe('carEquipment test', () => {
        it('test for correctly work', () => {
            assert.deepEqual(dealership.carEquipment(['dvd', 'navi', 'podgrev', 'turbo'], [2, 3, 1]), ['podgrev', 'turbo', 'navi'])
            assert.deepEqual(dealership.carEquipment(['dvd', 'navi', 'podgrev', 'turbo'], [2, 3, 0]), ['podgrev', 'turbo', 'dvd'])
        })

    })

    describe('euroCategory test', () => {
        it('test for correctly work', () => {
            assert.equal(dealership.euroCategory(3),`Your euro category is low, so there is no discount from the final price!`)
            assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`)
        })

    })

})