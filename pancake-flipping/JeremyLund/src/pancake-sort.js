const isSorted = require('./is-sorted')
function pancakeSort(pancakes = [], onChange = () => {}) {
  let currentStack = pancakes.slice()
  let sortedSlice = pancakes.length
  let count = 0
  while (!isSorted(currentStack.slice(0, sortedSlice))) {
    const unsortedStack = currentStack.slice(0, sortedSlice)
    const largestPancake = unsortedStack.reduce(
      (acc, curr) => Math.max(acc, curr),
      0,
    )
    const spatulaIndex = unsortedStack.lastIndexOf(largestPancake)
    if (spatulaIndex === 0) {
      currentStack = unsortedStack
        .reverse()
        .concat(currentStack.slice(sortedSlice))
      count++
      onChange(count, currentStack)
    } else {
      const smallSlice = unsortedStack
        .slice(0, spatulaIndex + 1)
        .reverse()
        .concat(unsortedStack.slice(spatulaIndex + 1))
      currentStack = smallSlice.concat(currentStack.slice(sortedSlice))
      count++
      onChange(count, currentStack)
      currentStack = smallSlice
        .reverse()
        .concat(currentStack.slice(sortedSlice))
      count++
      onChange(count, currentStack)
    }
    sortedSlice--
  }
  return {
    result: currentStack,
    count,
  }
}

module.exports = pancakeSort
