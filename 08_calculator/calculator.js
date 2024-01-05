const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => {
	return arr.reduce((total, num) => total + num, 0);
}

const multiply = arr => {
	return arr.reduce((total, num) => total * num, 1)
};
;

const power = function (base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function (n) {
	return (n != 1 && n != 0) ? n * factorial(n - 1) : 1;
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
