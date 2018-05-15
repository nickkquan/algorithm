// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using higher order functions
function reverse(str) {
	return str
		.split("")
		.reverse()
		.join("");
}

// Using reduce method
function reverse(str) {
	return str.split("").reduce((reversed, character) => character + reversed, "");
}

// Using a for loop
function reverse(str) {
	let result = "";
	for (let index = str.length - 1; index >= 0; index--) {
		result += str[index];
	}
	return result;
}

// Using a for of loop
function reverse(str) {
	let result = "";
	for (let character of str) {
		result = character + result;
	}
	return result;
}

module.exports = reverse;
