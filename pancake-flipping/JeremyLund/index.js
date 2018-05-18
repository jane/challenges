#!/usr/bin/env node
/* eslint-disable no-console */
const { resolve } = require('path')
const { readFileSync } = require('fs')
const parseInput = require('./src/parse-input')
const pancakeSort = require('./src/pancake-sort')
const input = readFileSync(resolve(process.argv[2]), 'utf8')

const stack = parseInput(input)
const log = (count, stack) => {
  console.log('Count:', count, stack)
}

console.log('Initial stack')
log(0, stack)
const result = pancakeSort(stack, log)

console.log('Final result')
log(result.count, result.result)
