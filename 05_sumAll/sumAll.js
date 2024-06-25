const sumAll = function(arg1, arg2) {
    //check if both arguments are positive integers
    if(typeof arg1 != "number" || typeof arg2 != "number"){
        return "ERROR";
    }
    else if(arg1 <= 0 || arg2 <= 0){
        return "ERROR";
    }
    let sum = 0
    //check which one is bigger
    if(arg1 < arg2){
        for(let i = arg1;i <= arg2;i++){
            sum += i;
        }
    }
    else if(arg1 > arg2){
        for(let i = arg2;i <= arg1;i++){
            sum += i;
        }
    }
    else{
        return sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
