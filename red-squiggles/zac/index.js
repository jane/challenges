#!/usr/bin/env node

const words = require('fs')
  .readFileSync(require('path')
    .resolve(__dirname, '..', '..', 'assets', 'enable1.txt'))
  .toString()
  .split('\n')
  .filter(Boolean)

const input = `
accomodate
acknowlegement
arguemint
comitmment
deductabel
depindant
existanse
forworde
herrass
inadvartent
judgemant
ocurrance
parogative
suparseed
`.split('\n').filter(Boolean)

const isPrefixOf = (a, b) => b.startsWith(a)

const findValid = (word) => {
  const w = word.slice(0, -1)
  return words.some((el) => isPrefixOf(w, el)) ? w : findValid(w)
}

const insertSquiggle = (correct, incorrect) => {
  const i = incorrect.replace(correct, '')
  return correct + i[0] + '<' + i.substr(1)
}

const fixed = input.reduce((p, word) => {
  p.push(words.includes(word) ? word : insertSquiggle(findValid(word), word))
  return p
}, [])

console.log(fixed.join('\n'))
