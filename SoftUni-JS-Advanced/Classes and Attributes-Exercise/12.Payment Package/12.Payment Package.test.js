const assert = require('assert').strict;
const { it } = require('mocha');
const PaymentPackage = require('./12.Payment Package');

describe('Testing PaymentPackage', () => {

    describe('constructor test', () => {
        it('constructor test with correct input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.name, 'Ime');
            assert.equal(paymentPackage.value, 50);
            assert.equal(paymentPackage.VAT, 20);
            assert.equal(paymentPackage.active, true);
        })
        it('constructor test with correct input and with double bumber', () => {
            let paymentPackage = new PaymentPackage('Ime', 5.1);
            assert.equal(paymentPackage.name, 'Ime');
            assert.equal(paymentPackage.value, 5.1);
            assert.equal(paymentPackage.VAT, 20);
            assert.equal(paymentPackage.active, true);
        })

    });
    //-------
    describe('get name test', () => {
        it('get name', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.name, 'Ime');
        })

    });

    describe('set name test', () => {
        it('set name with correct input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.name = 'Ime2', 'Ime2');
            assert.equal(paymentPackage.name = 'I', 'I');
        });

        it('set name with incorrect type input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.name = 50, Error)
        });

        it('set name with incorrect length input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.name = '', Error)
        });

    });
    //-------
    describe('get value test', () => {
        it('get value', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.value, 50);
        })

    });

    describe('set value test', () => {
        it('set value with correct input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);

        });
        it('set value with correct double input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.value = 2.2;
            assert.equal(paymentPackage.value, 2.2);

        });

        it('set value with incorrect type input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.value = '5', Error)
        });

        it('set value with incorrect length input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.value = -1, Error)
        });

    });

    //-------
    describe('get VAT test', () => {
        it('get VAT', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.VAT, 20);
        })

    });

    describe('set VAT test', () => {
        it('set VAT with correct input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.VAT = 0;
            assert.equal(paymentPackage.VAT, 0);

        });
        it('set VAT with correct double input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.VAT = 2.2;
            assert.equal(paymentPackage.VAT, 2.2);

        });

        it('set VAT with incorrect type input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.VAT = '1', Error)
        });

        it('set VAT with incorrect length input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.VAT = -1, Error)
        });

    });

    //-------
    describe('get active test', () => {
        it('get active', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.equal(paymentPackage.active, true);
        })

    });

    describe('set active test', () => {
        it('set active with correct input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);

        });

        it('set active with incorrect type input', () => {
            let paymentPackage = new PaymentPackage('Ime', 50);
            assert.throws(() => paymentPackage.active = 'false', Error)
            assert.throws(() => paymentPackage.active = -1, Error)
            assert.throws(() => paymentPackage.active = 1, Error)
        });

    });

    describe('toString test', () => {
        it('toString Output with active', () => {

            let paymentPackage = new PaymentPackage('Ime', 50);

            const output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];


            assert.equal(paymentPackage.toString(), output.join(`\n`))

        });

        it('toString Output with non-active', () => {

            let paymentPackage = new PaymentPackage('Ime', 50);
            paymentPackage.active = false;
            const output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];


            assert.equal(paymentPackage.toString(), output.join(`\n`))

        });

    });


});

