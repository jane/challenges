#!/usr/bin/env node

const parseInput = (text) => [...new Set(text.trim().split('\n'))].sort()
const range = ({ length }) => Array.from({ length }, (_, i) => i)
const forRange = (a, f) => range(a).forEach((_, i) => f(i))
const solve = (input, f) => console.log(f(input))
const sum = (xs) => xs.reduce((p, c) => p + c, 0)
const split = (a) => a.split('')
const diff = (a, b) => split(a).reduce((p, c, i) => (c !== b[i] ? 1 : 0) + p, 0)

const findClosest = (input) => {
  const strings = parseInput(input)
  let j = 0
  let a = []
  let b = []

  forRange(strings, (i) => {
    a[i] = []
    forRange(strings, (j) => {
      a[i][j] = diff(strings[i], strings[j])
    })
  })
  forRange(strings, (i) => {
    b[i] = sum(a[i])
  })
  forRange(b, (i) => {
    if (b[i] < b[j]) j = i
  })

  return strings[j]
}

require('./inputs').forEach((i) => solve(i, findClosest))
