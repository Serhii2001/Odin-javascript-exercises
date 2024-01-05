const fibonacci = n => {
	const number = parseInt(n, 10);
	if (number > 0) {
		let a = 1;
		let b = 1;
		for (i = 3; i <= n; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b;
	} else {
		return "OOPS";
	}
};

// Do not edit below this line
module.exports = fibonacci;
