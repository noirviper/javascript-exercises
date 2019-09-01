const sumAll = function(num1, num2) {
    var result = 0;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if(num1 > num2) {
        for (var i = num2+1; i <= num1; i++) {
            result = num2 += i;
        }
            
    } else {
        for (var i = num1+1; i <= num2; i++) {
            result = num1 += i;
            
         }
             
    }
    return result;
}

module.exports = sumAll
