const removeFromArray = function (array, ...rems) {
	const name = function (arg) {
		let x = 0;
		for (i = 0; i < array.length; i++) {
			if (array[i] === arg) {
				x = array.splice(i, 1);
			}
		}
	}

	rems.forEach(name);
	return array;
};

// const removeFromArray = function (array, ...rems) {
// 	const remove = (rem) => {
// 		let index = array.indexOf(rem);
// 		if (index > -1) {
// 			array.splice(index, 1);
// 		}
// 	}
// 	rems.forEach(remove);
// 	return array;
// }

// Do not edit below this line
module.exports = removeFromArray;
