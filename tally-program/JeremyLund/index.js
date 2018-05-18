#!/usr/bin/env node
/* eslint-disable no-console */
const calculate = require('./src/calculate')
const calculate2 = require('./src/calculate-2')
const input = process.argv[2] || 'abcde'

console.log('Tally of scores:')
console.log(calculate(input))
console.log('Alternative implementation:')
console.log(calculate2(['a', 'b', 'c', 'd', 'e'])(input))
