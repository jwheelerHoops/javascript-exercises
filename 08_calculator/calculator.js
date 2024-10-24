const add = function(val1, val2) {
	return val1 + val2
};

const subtract = function(val1, val2) {
	return val1 - val2
};

const sum = function(values) {
  return values.reduce((sum, current) => sum + current, 0);
};

const multiply = function(values) {
  return values.reduce((product, current) => product * current);
};

const power = function(val1, val2) {
	return Math.pow(val1, val2)
};

const factorial = function(value) {
  let solution = 1;

  for (i = value; i > 0; i--) {
    solution *= i;
  }

  return solution;
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
