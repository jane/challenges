#!/usr/bin/env node

console.log((() => {
  try {
    const s = process.argv[2]
    const answer = eval(s.replace(/\^/g, '**'))
    if (answer === Infinity) return "Not-defined"
    if (answer % 1 === 0) return answer
    else return "Non-integral answer"
  } catch (_) { }
})())
