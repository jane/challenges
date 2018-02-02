#!/usr/bin/env node

const { readFileSync } = require('fs')
const { resolve } = require('path')
const file = resolve(__dirname, '..', 'names.txt')
const input = readFileSync(file).toString()
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const names = input.replace(/"/g, '').toLowerCase().split(',').sort().filter(Boolean)
const sum = (ns) => ns.reduce((acc, curr) => acc + curr, 0)
const sumForName = (name) => sum(name.split('').map((n) => alphabet.indexOf(n) + 1))
const totalForNameAndPosition = (name) => sumForName(name) * (names.indexOf(name) + 1)

console.log(sum(names.map(totalForNameAndPosition)))
