// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	const results = [];

	for (let index = 0; index < n; index++) {
		results.push([]);
	}

	let counter = 1;
	let startColumn = 0;
	let endColumn = n - 1;
	let startRow = 0;
	let endRow = n - 1;

	while (startColumn <= endColumn && startRow <= endRow) {
		// Top Row
		for (let index = startColumn; index <= endColumn; index++) {
			results[startRow][index] = counter;
			counter++;
		}
		startRow++;

		// Right Column
		for (let index = startRow; index <= endRow; index++) {
			results[index][endColumn] = counter;
			counter++;
		}
		endColumn--;

		// Bottom Row
		for (let index = endColumn; index >= startColumn; index--) {
			results[endRow][index] = counter;
			counter++;
		}
		endRow--;

		// Start Column
		for (let index = endRow; index >= startRow; index--) {
			results[index][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return results;
}

module.exports = matrix;
