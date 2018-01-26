/**
 * Calculates how long the light is on, given the visitor input.
 * @param {array} visitors - an array of visitors
 * @returns {number} the number of hours the light is on
 */
export function calculateLightsOn(visitors = []) {
  return visitors
    .reduce(
      (acc, [start, end]) => {
        for (let i = start; i < end; i++) {
          acc[i] = (acc[i] || 0) + 1 // increments the value of each hour they were in the room.
        }
        return acc
      },
      [], // initial empty array
    )
    .filter(hour => hour).length // retains any hours with a value of 1 or more
}

/**
 * Converts the string input into an array of visitors,
 * with each visitor element containing the visitor's entry and exit time as a array pair.
 * @param {string} input - a multi-line input of visitors.
 * @returns {array} an array of visitors
 */
export function parseVisitorInput(input) {
  return input
    .split(/\n/)
    .map(row => row.trim())
    .filter(row => row.length > 0)
    .map(row => row.split(/\s+/).map(Number))
}
