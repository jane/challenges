const { sortByScoreDescPlayerAsc, toPlayerScoreOutput } = require('./util')

function calculate(input) {
  const result = input.split('').reduce(
    (acc, curr) => {
      const player = curr.toLowerCase()
      acc[player] += player === curr ? 1 : -1
      return acc
    },
    {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
    },
  )
  return Object.entries(result)
    .map(([player, score]) => ({ player, score }))
    .sort(sortByScoreDescPlayerAsc)
    .map(toPlayerScoreOutput)
    .join(', ')
}

module.exports = calculate
