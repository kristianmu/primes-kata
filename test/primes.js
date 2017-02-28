var test = require('unit.js');
describe('Test Primer number', function(){
    var primes = require('../primes');
    it('will return 0 if 0 given', function(){
        test.assert.equal(0, primes(0));
    });
    it('will return [1,2,3,5] if 5 given', function(){
        test.assert.deepEqual([1,2,3,5], primes(5));
    });
});
