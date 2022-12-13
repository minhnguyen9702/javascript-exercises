const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(ls) {
  total = 0
	for (element in ls)
    total += ls[element]
  return total
};

const multiply = function(ls) {
  total = 1
	for (element in ls)
    total *= ls[element]
  return total
};

const power = function(num, power) {
  let result = num ** power
	return result
};

const factorial = function(num) {
	if (num == 1) {
    return num
  } if (num == 0) {
    return 1
  } else {
    return num*factorial(num-1)
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
