#!/usr/bin/env node
/* eslint-disable no-console */
const { resolve } = require('path')
const { readFileSync } = require('fs')
const scoreNames = require('./src/score-names')

const input = readFileSync(resolve('..', 'names.txt'), 'utf8')

const names = input.split(',').map(name => JSON.parse(name))
const total = scoreNames(names)

console.log('Total score is:', total)
