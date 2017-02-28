module.exports = function factorial(number){
    if(number === 0){
        return 0;
    }

    var result = 1;
    for(var i = 1; i <= number; i++){
        result = result * i;
    }

    return result;
};