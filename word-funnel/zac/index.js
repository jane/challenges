const funnel = (word, goal) =>
  word.split('').map((_, i, xs) =>
    xs.filter((_, j) => j !== i).join('')
  ).includes(goal)

const bonus = (word) =>
  require('fs')
    .readFileSync('/usr/share/dict/words', 'utf8')
    .split('\n')
    .filter((a) => funnel(word, a))

module.exports = { bonus, funnel }
