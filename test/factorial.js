var test = require('unit.js');
describe('Factorial', function(){
    var factorial = require('../factorial');
    it('will return 0 if 0 given', function(){
        test.assert.equal(0, factorial(0));
    });
    it('will return 120 if 5 given', function(){
        test.assert.equal(120, factorial(5));
    });
});
