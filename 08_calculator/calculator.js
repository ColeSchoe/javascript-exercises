const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((currentSum, currentNumber) => {
    return currentSum + currentNumber;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((currentTotal, currentNumber) => {
    return currentTotal * currentNumber;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let sum = 1;
  while (num > 0) {
    sum *= num;
    num--;
  }
  return sum;
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
