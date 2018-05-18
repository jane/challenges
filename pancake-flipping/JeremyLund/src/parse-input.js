function parseInput(input = '') {
  const [stackSize, sizes] = input
    .trim()
    .split(/\n/)
    .map(row => row.trim())
    .filter(row => row)
    .map(row => row.split(/\s/).map(val => Number(val)))
  return sizes.slice(0, stackSize)
}

module.exports = parseInput
