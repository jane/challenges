#!/usr/bin/env node

const { solve } = require('./solve')
const input = process.argv[2] || ''

console.dir(solve(input), { colors: true })
