const repeatString = function(string, repeatNum) {

    let stringContainer = "";
    
    if (repeatNum <= -1) {
        stringContainer = "ERROR";
        return stringContainer;
        
    } else if (repeatNum === 0) {
        return stringContainer;
        
    } else {
        for (i = 0; i < repeatNum; i++) {
            stringContainer += string;
        }
        return stringContainer;    
    }
    
}

module.exports = repeatString
