function sortByScoreDescPlayerAsc(a, b) {
  const score = b.score - a.score
  return score === 0
    ? a.player < b.player ? -1 : a.player > b.player ? 1 : 0
    : score
}

const toPlayerScoreOutput = ({ player, score }) => `${player}:${score}`

const flatten = (...arr) => arr.reduce((acc, curr) => acc.concat(curr), [])

const occurrencesOf = (letter, input) => {
  const match = input.match(new RegExp(letter, 'g'))
  return match ? match.length : 0
}

module.exports = {
  flatten,
  occurrencesOf,
  sortByScoreDescPlayerAsc,
  toPlayerScoreOutput,
}
