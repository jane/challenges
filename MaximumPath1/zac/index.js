#!/usr/bin/env node

// This solution isn't ideal, but I couldn't find a good one that doesn't involve reassignment.

// handle args
const arg = process.argv[2]
const inputNum = typeof arg === 'string' && parseInt(arg.split('--')[1], 10)
const filename = (n) => `./input-${n}`
const input = [ 18, 67 ].includes(inputNum) ? filename(inputNum) : filename(18)

// turn input text into usable data
const nums = [ ...require('fs')
  .readFileSync(input)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s
    .split(' ')
    .filter((a) => a)
    .map((a) => parseInt(a, 10))) ]

// helpers
const range = (n) => Array.from({ length: n }, (_, i) => i)
const inc = (a) => a + 1
const car = (a) => a[0]
const caar = (a) => car(car(a))

// this is just a slightly more readable version of two `for` loops
range(nums.length - 1)
  .map(inc) // start at 1
  .reverse() // from the end
  .forEach((row) => {
    range(row).forEach((c) => {
      nums[row - 1][c] += Math.max(nums[row][c], nums[row][c + 1])
    })
  })

// this should be a big number
console.log(caar(nums))
