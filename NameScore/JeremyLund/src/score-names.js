const calculateNameScore = require('./calculate-name-score')

module.exports = function scoreNames(names = []) {
  return names
    .map(name => name.toUpperCase()) // makes ASCII calculations and sorting easier)
    .sort()
    .map((name, i) => calculateNameScore(name) * (i + 1))
    .reduce((acc, curr) => acc + curr, 0)
}
