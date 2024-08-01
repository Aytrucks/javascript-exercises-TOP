const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const theSum = arr.reduce((total,current) => {
    return total += current;
  },0);
  return theSum;
};

const multiply = function(arr) {
  const theSum = arr.reduce((total,current) => {
    return total *= current;
  },1);
  return theSum;
};

const power = function(a,b) {
  let powerResult = 1;
  for(let i = 0;i < b;i++){
    powerResult *= a;
  }
  return powerResult;
};

const factorial = function(num) {
	let factResult = 1;
  let copynum = num;
  if(num != 0){
    for(let i = 0;i < num;i++){
      factResult = factResult * copynum;
      copynum--;
    }
  }
  else{
    return 1;
  }
  return factResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
