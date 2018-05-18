const {
  flatten,
  occurrencesOf,
  sortByScoreDescPlayerAsc,
  toPlayerScoreOutput,
} = require('./util')

const calculate = (...players) => input => {
  return flatten(...players)
    .map(player => ({
      player,
      score:
        occurrencesOf(player, input) -
        occurrencesOf(player.toUpperCase(), input),
    }))
    .sort(sortByScoreDescPlayerAsc)
    .map(toPlayerScoreOutput)
    .join(', ')
}

module.exports = calculate
