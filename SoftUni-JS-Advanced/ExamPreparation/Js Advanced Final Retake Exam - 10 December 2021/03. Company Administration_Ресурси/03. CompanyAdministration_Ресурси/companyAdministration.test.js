const companyAdministration = require('./companyAdministration');
const assert = require('assert').strict;

describe('companyAdministration testing', () => {

    describe('hiringEmployee test', () => {
        it('test with correct input', () => {
            assert.equal(companyAdministration.hiringEmployee('Ime', 'Programmer', 3), `Ime was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('Ime', 'Programmer', 4), `Ime was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('Ime2', 'Programmer', 6), `Ime2 was successfully hired for the position Programmer.`)
        })
        it('test with correct input and number<3', () => {
            assert.equal(companyAdministration.hiringEmployee('Ime', 'Programmer', 2), `Ime is not approved for this position.`)
            assert.equal(companyAdministration.hiringEmployee('Ime', 'Programmer', 1), `Ime is not approved for this position.`)
            assert.equal(companyAdministration.hiringEmployee('Ime', 'Programmer', -1), `Ime is not approved for this position.`)
        })
        it('test with incorrect input', () => {
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Programer', 2))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Pilot', 4))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Pilot', 6))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Pilot', -1))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Pilot', 2.9))

            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 'Programer', 2))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', 33, 4))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', false, 6))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', [], -1))
            assert.throws(()=>companyAdministration.hiringEmployee('Ime', {}, 2.9))
        })
    })

    describe('calculateSalary test', () => {
        it('test with correct input', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0)
            assert.equal(companyAdministration.calculateSalary(1), 15)
            assert.equal(companyAdministration.calculateSalary(2), 30)
            assert.equal(companyAdministration.calculateSalary(10), 150)
            assert.equal(companyAdministration.calculateSalary(161), 3415)
            assert.equal(companyAdministration.calculateSalary(162), 3430)
            assert.equal(companyAdministration.calculateSalary(160), 2400)
            assert.equal(companyAdministration.calculateSalary(159), 2385)
            assert.equal(companyAdministration.calculateSalary(200), 4000)


        })
       
        it('test with incorrect input', () => {
            assert.throws(()=>companyAdministration.calculateSalary(-10))
            assert.throws(()=>companyAdministration.calculateSalary(-1))
            assert.throws(()=>companyAdministration.calculateSalary('-1'))
            assert.throws(()=>companyAdministration.calculateSalary('1'))
            assert.throws(()=>companyAdministration.calculateSalary('5.5'))
            assert.throws(()=>companyAdministration.calculateSalary('abc'))
            assert.throws(()=>companyAdministration.calculateSalary([]))
            assert.throws(()=>companyAdministration.calculateSalary({}))
            assert.throws(()=>companyAdministration.calculateSalary(true))
            assert.throws(()=>companyAdministration.calculateSalary(false))
        })
    })

    describe('firedEmployee test', () => {
        it('test with correct input', () => {
            assert.equal(companyAdministration.firedEmployee(['a','b','c','d'],2),'a, b, d')
            assert.equal(companyAdministration.firedEmployee(['a','b','c','d'],1),'a, c, d')
            assert.equal(companyAdministration.firedEmployee(['a','b','c','d'],3),'a, b, c')
            assert.equal(companyAdministration.firedEmployee(['a','a','a','a'],0),'a, a, a')

            assert.equal(companyAdministration.firedEmployee([2,2,2,2],2),'2, 2, 2')
            assert.equal(companyAdministration.firedEmployee(['a'],0),'')
        })
       
        it('test with incorrect input', () => {
            assert.throws(()=>companyAdministration.firedEmployee('[]',5))
            assert.throws(()=>companyAdministration.firedEmployee('asd',5))
            assert.throws(()=>companyAdministration.firedEmployee({},5))
            assert.throws(()=>companyAdministration.firedEmployee(false,5))
            assert.throws(()=>companyAdministration.firedEmployee(5,5))

            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],'5'))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],-1))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],'-1'))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],4))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],5.5))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],4.4))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],false))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],[]))
            assert.throws(()=>companyAdministration.firedEmployee(['a','b','c','d'],{}))     
        })
    })


})