#!/usr/bin/env node

const diff = (a, b) => {
  let n = 0
  const x = a.split('')
  const y = b.split('')
  x.forEach((el, i) => {
    if (y[i] !== el) n++
  })
  return n
}

const parseInput = (text) => [...new Set(text.trim().split('\n'))].sort()

const findClosest = (input) => {
  let lowestDiff = null
  let lowestString = ''
  const strings = parseInput(input)

  strings.forEach((string) => {
    const lens = strings.filter((s) => s !== string).map((s) => diff(s, string))
    const min = Math.min(...lens)
    if (lowestDiff === null || min <= lowestDiff) { // > or >= get different results so idk
      lowestDiff = min
      lowestString = string
    }
  })

  return lowestString
}

const inputs = require('./inputs')
inputs.forEach((i) => {
  console.log(findClosest(i))
})
