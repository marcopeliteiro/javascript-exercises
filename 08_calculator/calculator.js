const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = arr.reduce((acc, item)=> acc+item,0);
  return sum;
};

const multiply = function(arr) {
  let multi = arr.reduce((acc, item)=> acc*item,1);
  return multi;
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {

if(a===0){
  return 1;
}
else{
  return a *(factorial(a-1));
  }
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
