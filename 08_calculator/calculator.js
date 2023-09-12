const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b 
};

const sum = function(arr = []) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
