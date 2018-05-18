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
    .sort((a, b) => {
      const score = b[1] - a[1]
      const name = b[0] - a[0]
      return score === 0 ? name : score
    })
    .map(val => val.join(':'))
    .join(', ')
}

module.exports = calculate
