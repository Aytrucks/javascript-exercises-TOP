const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let fiboSwitch = true;
    let sum = 0;
    
    if(num < 0){
        return "OOPS";
    }
    else if(num == 0){
        return 0;
    }

    for(let i = 2;i < num;i++){
        sum = a+b;
        console.log(sum);
        if(fiboSwitch){
            fiboSwitch = !fiboSwitch;
            a = sum;
        }
        else{
            fiboSwitch = !fiboSwitch
            b = sum;
        }
    }
    return fiboSwitch ? b : a;
};

// Do not edit below this line
module.exports = fibonacci;
