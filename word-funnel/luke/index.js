const fs = require('fs')

const funnel = (first, second) => {
  for (var i = 0; i < first.length; i++) {
    if ((first.slice(0, i) + first.slice(i+1)) === second) return true
  }
  return false

}


console.log(funnel("leave", "eave"))
console.log(funnel("reset", "rest"))
console.log(funnel("dragoon", "dragon"))
console.log(funnel("eave", "leave"))
console.log(funnel("sleet", "lets"))
console.log(funnel("skiff", "ski"))

const text = fs.readFileSync('../../assets/enable1.txt').toString()

console.log('this is text', text)


const textArr = text.split('\n')
console.log('this is textArr', textArr)


const bonus = (word) => {
  let words = []
  for (var i = 0; i < word.length; i++) {
    if(textArr.find(w => word.slice(0, i) + word.slice(i+1) === w)) {
      words.push(textArr.find(w => word.slice(0, i) + word.slice(i+1) === w))
    }
  }
  return [...new Set(words)]
}

console.log(bonus('dragoon'))
console.log(bonus('boats'))
console.log(bonus('affidavit'))


const bigFunc = () => {
  return textArr.reduce((acc, item) => {
    if (bonus(item).length === 5) {
      console.log('acc', acc)
      acc.push(item)
    }
  }, [])
}

console.log('xxx', bigFunc())
