#!/usr/bin/env node

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  var lines = chunk.toString().split('\n')
  var lineCount = parseInt(lines.shift(), 10)
  var stringLength = lines[0].length
  var a = []
  var counts = []
  var totals = []

  for (var i = 0; i < lineCount; i++){
    a.push(lines.shift().split(''))
    counts.push([])
  }

  for (var col = 0; col < stringLength; col++) {
    let temp = {}
    for (var row = 0; row < lineCount; row++) {
      var character = a[row][col]
      if (temp[character]) temp[character] = temp[character] + 1
      else temp[character] = 1
    }
    for (var row = 0; row < lineCount; row++) {
      counts[row].push(temp[a[row][col]])
    }
  }

  counts.forEach((row) => {
    totals.push(row.reduce((acc, cur) => (acc + cur), 0))
  })

  correctIndex = 0
  totals.forEach((total, index) => {
    if (total > totals[correctIndex]) {
      correctIndex = index
    }
  })

  process.stdout.write(a[correctIndex].join('')+'\n')
});
