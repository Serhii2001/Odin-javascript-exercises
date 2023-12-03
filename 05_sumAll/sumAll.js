const sumAll = function (sum1, sum2) {
	if (sum1 < 0 || sum2 < 0 || typeof sum2 != 'number') {
		return 'ERROR';
	}

	let sum = 0;
	if (sum1 < sum2) {
		for (let i = sum1; i <= sum2; i++) {
			sum += i;

		}
	} else {
		for (let i = sum2; i <= sum1; i++) {
			sum += i;

		}
	}
	return sum;

};

// Do not edit below this line
module.exports = sumAll;
