#!/usr/bin/env node
/* eslint-disable no-console */
const calculate = require('./src/calculate')
const input = process.argv[2] || 'abcde'

console.log('Tally of scores:')
console.log(calculate(input))
