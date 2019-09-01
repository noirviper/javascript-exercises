const leapYears = function(arr) {
    if(arr % 4 === 0) {
        if (arr % 100 === 0 && arr % 400 === 0) {
            return true;
        } else if (arr % 100 === 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

module.exports = leapYears
