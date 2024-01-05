const palindromes = str => {
	var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
	var reverseStr = lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
