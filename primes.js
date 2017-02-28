module.exports = function primes(number){
    if(number === 0){
        return 0;
    }

    var result = [];
    for(var i = 1; i <= number; i++){
        if(isPrime(i)){
            result.push(i);
        }
    }

    return result;
};

function isPrime(number) {
    var isPrime = (number/1) === number && (number/number) === 1;

    for(var i=2; i<number; i++){
        if(isPrime && number % i === 0){
            return false;
        }
    }
    return true;
}
