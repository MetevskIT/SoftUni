const rgbToHexColor = require('./06.rgb-to-hex');
const assert = require('assert').strict;

describe('rgbToHexColor', () => {

    it('test if input is not integer', () => {
        assert.equal(rgbToHexColor('red', 10, 2), undefined);
        assert.equal(rgbToHexColor(33, 'green', 2), undefined);
        assert.equal(rgbToHexColor(250, 10, 'blue'), undefined);
    })

    it('input is out of range', () => {
        assert.equal(rgbToHexColor(266, 23, 2), undefined);
        assert.equal(rgbToHexColor(8, 322, 2), undefined);
        assert.equal(rgbToHexColor(22, 222, 300), undefined);

        assert.equal(rgbToHexColor(-266, 23, 2), undefined);
        assert.equal(rgbToHexColor(8, -322, 2), undefined);
        assert.equal(rgbToHexColor(22, 222, -300), undefined);
    })

    it('test with correct input', () => {
        assert.equal(rgbToHexColor(55,23,42), '#37172A');
        assert.equal(rgbToHexColor(90,22,12), '#5A160C');
        assert.equal(rgbToHexColor(88,33,99), '#582163');

        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');
    })

});