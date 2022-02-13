const assert = require('assert').strict;
const { it } = require('mocha');
//const { array } = require('yargs');
const StringBuilder = require('./13.String Builder');

describe('StringBuilder test', () => {

    describe('constructor test', () => {

        it('constructor test with correct input', () => {
           
            let stringBuilder = new StringBuilder('value');
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('value'))
            assert.deepStrictEqual(stringBuilder.toString(),'value')

        });

        it('constructor test with undifined input', () => {
           
            let stringBuilder = new StringBuilder(undefined);
            assert.deepStrictEqual(stringBuilder._stringArray,[])

        });

        it('constructor test with empty input', () => {
           
            let stringBuilder = new StringBuilder();
            assert.deepStrictEqual(stringBuilder._stringArray,[])

        });


        it('constructor test with incorrect type input', () => {
           
            assert.throws(()=>new StringBuilder(123),TypeError)
            assert.throws(()=>new StringBuilder([]),TypeError)
            assert.throws(()=>new StringBuilder({}),TypeError)
            assert.throws(()=>new StringBuilder(2.2),TypeError)
            assert.throws(()=>new StringBuilder(-2.2),TypeError)
            assert.throws(()=>new StringBuilder(false),TypeError)

        });

    });

    describe('append test', () => {

        it('append test with correct input', () => {
           
            let stringBuilder = new StringBuilder('hi');
            stringBuilder.append('value')
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('hivalue'))
            assert.deepStrictEqual(stringBuilder.toString(),'hivalue')

        });

        it('append test with incorrect type input', () => {
            let stringBuilder = new StringBuilder();
            assert.throws(()=>stringBuilder.append(123),TypeError)
            assert.throws(()=>stringBuilder.append([]),TypeError)
            assert.throws(()=>stringBuilder.append({}),TypeError)
            assert.throws(()=>stringBuilder.append(-2.2),TypeError)
            assert.throws(()=>stringBuilder.append(2.2),TypeError)
            assert.throws(()=>stringBuilder.append(false),TypeError)

        });

    });

    describe('prepend test', () => {

        it('prepend test with correct input', () => {
           
            let stringBuilder = new StringBuilder('v');
            stringBuilder.prepend('value')
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('valuev'))
            assert.deepStrictEqual(stringBuilder.toString(),'valuev')
        });

        it('prepend test with incorrect type input', () => {
            let stringBuilder = new StringBuilder();
            assert.throws(()=>stringBuilder.prepend(123),TypeError)
            assert.throws(()=>stringBuilder.prepend([]),TypeError)
            assert.throws(()=>stringBuilder.prepend({}),TypeError)
            assert.throws(()=>stringBuilder.prepend(-2.2),TypeError)
            assert.throws(()=>stringBuilder.prepend(2.2),TypeError)
            assert.throws(()=>stringBuilder.prepend(false),TypeError)

        });

    });

    describe('insertAt test', () => {

        it('insertAt test with correct input', () => {
           
            let stringBuilder = new StringBuilder('value');
            stringBuilder.insertAt('b',0)
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('bvalue'))
            stringBuilder.insertAt('b',2)
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('bvbalue'))

        });

        it('insertAt test with incorrect type input', () => {
            
            let stringBuilder = new StringBuilder();
            assert.throws(()=>stringBuilder.insertAt(123),TypeError)
            assert.throws(()=>stringBuilder.insertAt([]),TypeError)
            assert.throws(()=>stringBuilder.insertAt({}),TypeError)
            assert.throws(()=>stringBuilder.insertAt(-2.2),TypeError)
            assert.throws(()=>stringBuilder.insertAt(2.2),TypeError)
            assert.throws(()=>stringBuilder.insertAt(false),TypeError)
            
        });

    });

    describe('remove test', () => {

        it('remove test with correct input', () => {
           
            let stringBuilder = new StringBuilder('value');
            stringBuilder.remove(0,2)
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('lue'))
            stringBuilder.remove(stringBuilder._stringArray.length-1,1)
            assert.deepStrictEqual(stringBuilder._stringArray,Array.from('lu'))
            assert.deepStrictEqual(stringBuilder.toString(),'lu')
        });

       

    });

    describe('toString test', () => {

        it('toString output', () => {
           
            let stringBuilder = new StringBuilder();
            assert.deepStrictEqual(stringBuilder.toString(),'')
            stringBuilder.prepend('value')
            assert.deepStrictEqual(stringBuilder.toString(),'value')

        });
    });
    


});