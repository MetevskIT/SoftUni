const library = require('./library')
const assert = require('assert').strict;

describe("library tests", () => {

    describe("calcPriceOfBook test", () => {

        it("test with correct input and 1981 year", () => {
            assert.equal(library.calcPriceOfBook('Hary', 1981), `Price of Hary is 20.00`)
        });
        it("test with correct input and 1980 year", () => {
            assert.equal(library.calcPriceOfBook('Hary', 1980), `Price of Hary is 10.00`)
        });
        it("test with incorrect name", () => {
            assert.throws(() => library.calcPriceOfBook(1, 1980))
        });
        it("test with incorrect price", () => {
            assert.throws(() => library.calcPriceOfBook('Hary', '1981'))
        });

    });

    describe("findBook test", () => {

        it("test with correct input and founded book", () => {
            assert.equal(library.findBook(['Hary', 'Poter', 'Kniga'], 'Poter'), "We found the book you want.")
        });
        it("test with empty input", () => {
            assert.throws(() => library.findBook([], 'Kniga'));
        });
        it("test with correct input but not include book", () => {
            assert.equal(library.findBook(['Hary', 'Poter', 'Kniga'], 'poter'), "The book you are looking for is not here!")
        });

    });

    describe("arrangeTheBooks test", () => {

        it("test with correct input and countBooks bigger than available space", () => {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.")
            assert.equal(library.arrangeTheBooks(50), "Insufficient space, more shelves need to be purchased.")
        });
        it("test with correct input and available space bigger than countBooks ", () => {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(39), "Great job, the books are arranged.");
        });
        it("test with incorrect countBooks", () => {
            assert.throws(() => library.arrangeTheBooks('40'));
            assert.throws(() => library.arrangeTheBooks('41'));
            assert.throws(() => library.arrangeTheBooks('-40'));
        });
        it("test with negative countBooks", () => {
            assert.throws(() => library.arrangeTheBooks(-40));
        });

    });

});
