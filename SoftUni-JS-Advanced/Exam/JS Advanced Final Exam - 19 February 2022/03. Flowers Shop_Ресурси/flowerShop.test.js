const flowerShop = require('./flowerShop')
const assert = require('assert').strict;

describe('flowerShop testing', () => {

    describe('calcPriceOfFlowers test', () => {
        it('test with correct input',()=>{
            assert.equal(flowerShop.calcPriceOfFlowers('Flower',15,2),'You need $30.00 to buy Flower!')
            assert.equal(flowerShop.calcPriceOfFlowers('Flower',5,5),'You need $25.00 to buy Flower!')
        })
        it('test with incorrect input',()=>{
            assert.throws(()=>flowerShop.calcPriceOfFlowers(5,5,12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers([],5,12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers({},5,12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers(true,5,12))

            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',5.5,12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',[],12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',{},12))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime','2',12))

            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',5.5,10))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',[],10))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime',{},10))
            assert.throws(()=>flowerShop.calcPriceOfFlowers('Ime','2',10))
        })

    })

    describe('checkFlowersAvailable test', () => {
        it('test with correct input',()=>{
            assert.equal(flowerShop.checkFlowersAvailable('Flower',['Flower', 'Index', 'flower', 'abv']),'The Flower are available!')
            assert.equal(flowerShop.checkFlowersAvailable('abv',['Flower', 'Index', 'flower', 'abv']),'The abv are available!')
        })
        it('test with incorrect input',()=>{
          
            assert.equal(flowerShop.checkFlowersAvailable('Flowwer',['Flower', 'Index', 'flower', 'abv']),'The Flowwer are sold! You need to purchase more!')
            assert.equal(flowerShop.checkFlowersAvailable('Non',['Flower', 'Index', 'flower', 'abv']),'The Non are sold! You need to purchase more!')
      
        })

    })

    describe('sellFlowers test', () => {
        it('test with correct input',()=>{
            assert.equal(flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],2),'Flower / Index / abv')
            assert.equal(flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],1),'Flower / flower / abv')
            assert.equal(flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],3),'Flower / Index / flower')
        })
        it('test with incorrect input',()=>{
          
            assert.throws(()=>flowerShop.sellFlowers(12,2))
            assert.throws(()=>flowerShop.sellFlowers('as',2))
            assert.throws(()=>flowerShop.sellFlowers({},2))
            assert.throws(()=>flowerShop.sellFlowers(true,2))
            assert.throws(()=>flowerShop.sellFlowers(5.5,2))

            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],[]))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],'2'))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],{}))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],true))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],'asd'))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],5.5))
            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],-1))

            assert.throws(()=>flowerShop.sellFlowers(['Flower', 'Index', 'flower', 'abv'],5))
            assert.throws(()=>flowerShop.sellFlowers(['Flower'],2))

   
        })

    })
})