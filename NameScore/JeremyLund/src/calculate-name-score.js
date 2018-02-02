module.exports = function calculateNameScore(name = '') {
  return name
    .split('') // separate characters
    .map(char => char.charCodeAt(0) - 64) // get ASCII value, then subtract 64 (A === 65)
    .reduce((acc, curr) => acc + curr, 0) // sum them up!
}
