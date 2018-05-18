const sortObj = (obj) => {
  let res = []
  Object.keys(obj)
    .forEach((o) => {
      res.push([ o, obj[o] ])
    })
  return res
    .sort((a, b) => b[1] - a[1])
    .reduce((p, [ k, v ]) => ({
      ...p, [k]: v
    }), {})
}

const tally = (str) =>
  str.split('').reduce((prev, curr) => {
    const l = curr.toLowerCase()
    const s = /[a-z]/.test(curr) ? 1 : -1
    prev[l] = (prev[l] || 0) + s
    return prev
  }, {})

const solve = (s) =>
  sortObj(tally(s))

module.exports = {
  solve,
  sortObj,
  tally
}
