const removeFromArray = function(array, ...arg) {
    
    argIndex = 0;
    while(argIndex < arg.length){
        for(let i = 0;i < array.length;i++){
            if(array[i] === arg[argIndex]){
                array.splice(i,1);
                i--;
            }
        }
        argIndex += 1;
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
