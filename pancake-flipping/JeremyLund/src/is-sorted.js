module.exports = function isSorted(pancakes = []) {
  return pancakes.every((pancake, i) => i === 0 || pancake >= pancakes[i - 1])
}
