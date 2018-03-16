#!/usr/bin/env node

const diff = (a, b) => {
  let n = 0
  const x = a.split('')
  const y = b.split('')
  x.forEach((el, i) => {
    if (y[i] !== el) n++
  })
  return n
}

const parseInput = (text) => [...new Set(text.trim().split('\n'))].sort()

const findClosest = (input) => {
  let lowestDiff = null
  let lowestString = ''
  const strings = parseInput(input)

  strings.forEach((string) => {
    const lens = strings.filter((s) => s !== string).map((s) => diff(s, string))
    const min = Math.min(...lens)
    if (lowestDiff === null || min <= lowestDiff) { // > or >= get different results so idk
      lowestDiff = min
      lowestString = string
    }
  })

  return lowestString
}

const testInput = `
CTCCATCACAC
AATATCTACAT
ACATTCTCCAT
CCTCCCCACTC
`

const inputOne = `
AACACCCTATA
CTTCATCCACA
TTTCAATTTTC
ACAATCAAACC
ATTCTACAACT
ATTCCTTATTC
ACTTCTCTATT
TAAAACTCACC
CTTTTCCCACC
ACCTTTTCTCA
TACCACTACTT
`

const inputTwo = `
ACAAAATCCTATCAAAAACTACCATACCAAT
ACTATACTTCTAATATCATTCATTACACTTT
TTAACTCCCATTATATATTATTAATTTACCC
CCAACATACTAAACTTATTTTTTAACTACCA
TTCTAAACATTACTCCTACACCTACATACCT
ATCATCAATTACCTAATAATTCCCAATTTAT
TCCCTAATCATACCATTTTACACTCAAAAAC
AATTCAAACTTTACACACCCCTCTCATCATC
CTCCATCTTATCATATAATAAACCAAATTTA
AAAAATCCATCATTTTTTAATTCCATTCCTT
CCACTCCAAACACAAAATTATTACAATAACA
ATATTTACTCACACAAACAATTACCATCACA
TTCAAATACAAATCTCAAAATCACCTTATTT
TCCTTTAACAACTTCCCTTATCTATCTATTC
CATCCATCCCAAAACTCTCACACATAACAAC
ATTACTTATACAAAATAACTACTCCCCAATA
TATATTTTAACCACTTACCAAAATCTCTACT
TCTTTTATATCCATAAATCCAACAACTCCTA
CTCTCAAACATATATTTCTATAACTCTTATC
ACAAATAATAAAACATCCATTTCATTCATAA
CACCACCAAACCTTATAATCCCCAACCACAC
`

console.log(findClosest(testInput))
console.log(findClosest(inputOne))
console.log(findClosest(inputTwo))
