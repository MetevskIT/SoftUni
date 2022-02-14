const cinema = require('./cinema');
const assert = require('assert').strict;

describe('cinema test', () => {

    describe('showMovies test', () => {
        it('test with correct input', () => {
            assert.equal(cinema.showMovies([1, 2, 3, 4, 5]), '1, 2, 3, 4, 5')
            assert.equal(cinema.showMovies(['a', 'b', 'c', 'd']), 'a, b, c, d')
        })
        it('test with incorrect input', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        })

    })

    describe('ticketPrice test', () => {
        it('test with correct input', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00)
            assert.equal(cinema.ticketPrice("Normal"), 7.50)
            assert.equal(cinema.ticketPrice("Discount"), 5.50)
        })
        it('test with incorrect input', () => {
            assert.throws(() => cinema.ticketPrice('premiere'))
            assert.throws(() => cinema.ticketPrice('normal'))
            assert.throws(() => cinema.ticketPrice('discount'))
            assert.throws(() => cinema.ticketPrice('abc'))
            assert.throws(() => cinema.ticketPrice('1234'))
            assert.throws(() => cinema.ticketPrice(1234))
            assert.throws(() => cinema.ticketPrice(true))
        })

    })

    describe('swapSeatsInHall test', () => {
        it('test with correct input', () => {
            assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(20, 1), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(19, 1), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 1), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(2, 20), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 19), "Successful change of seats in the hall.")
        })

        it('test with incorrect numbers', () => {
            assert.equal(cinema.swapSeatsInHall(-5, 19), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 15), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(21,1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall('g',1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(true,1), "Unsuccessful change of seats in the hall.")
          
            assert.equal(cinema.swapSeatsInHall(5,0), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(-0, 21), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 0), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(20, 20), "Unsuccessful change of seats in the hall.")

        })

    })
})
