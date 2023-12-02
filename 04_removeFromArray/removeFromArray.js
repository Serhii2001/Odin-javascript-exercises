// const removeFromArray = function (array, rem) {
// 	let x = 0;
// 	for (i = 0; i < array.length; i++) {
// 		if (array[i] === rem) {
// 			x = array.splice(i, 1);
// 		}
// 	}
// 	return array;
// };

const removeFromArray = function (array, rem) {
	let index = array.indexOf(rem);
	array.splice(index, 1);
	return array;
}

// Do not edit below this line
module.exports = removeFromArray;
