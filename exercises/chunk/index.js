// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Using slice method
function chunk(array, size) {
	const resultArray = [];
	let index = 0;

	while (index < array.length) {
		resultArray.push(array.slice(index, index + size));
		index += size;
	}
	return resultArray;
}

// function chunk(array, size) {
// 	const resultArray = [];
// 	for (let element of array) {
// 		const last = resultArray[resultArray.length - 1];
// 		if (!last || last.length === size) {
// 			resultArray.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}
// 	return resultArray;
// }

module.exports = chunk;
