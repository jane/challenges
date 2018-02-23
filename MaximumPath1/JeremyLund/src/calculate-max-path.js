function parseToTree(input = '') {
  return input
    .split(/\n/)
    .map(row => row.trim())
    .filter(row => row.length > 0)
    .map(row =>
      row
        .trim()
        .split(/\s/)
        .map(val => Number(val.trim())),
    )
}

/**
 * Creates a row containing the max value from each consecutive pair of numbers.
 * The resulting array will be one element less than the passed in array.
 * @param {number[]} row - the array of numbers to evaluate
 * @returns {number[]} max value from each consecutive pair of numbers
 */
function maxValuesForRow(row) {
  return row.length === 1
    ? row
    : row.reduce((acc, val, i, vals) => {
        if (i < vals.length - 1) {
          acc.push(Math.max(val, vals[i + 1]))
        }
        return acc
      }, [])
}

module.exports = function calculateMaxPath(input) {
  return parseToTree(input)
    .reverse()
    .reduce(
      (acc, curr) => maxValuesForRow(curr.map((val, i) => val + (acc[i] || 0))),
      [],
    )
    .reduce((acc, curr) => acc + curr, 0)
}
