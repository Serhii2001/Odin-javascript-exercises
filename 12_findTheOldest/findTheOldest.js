const findTheOldest = function (array) {
	array.sort((a, b) => {
		const currentAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
		const nextAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;

		return nextAge - currentAge;
	});

	return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
