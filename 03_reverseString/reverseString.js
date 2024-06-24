const reverseString = function(toBeRev) {
    finishString = "";
    
    for(let i = toBeRev.length-1;i >= 0;i--){
        finishString += toBeRev[i];
    }
    return finishString;
};

// Do not edit below this line
module.exports = reverseString;
