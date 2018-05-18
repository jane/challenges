#!/usr/bin/env node
/* eslint-disable no-console */
const { resolve } = require('path')
const { readFileSync } = require('fs')
const calculateMaxPath = require('./src/calculate-max-path')

const input = readFileSync(resolve('large-triangle.txt'), 'utf8')

const value = calculateMaxPath(input)

console.log('Max path value is:', value)
