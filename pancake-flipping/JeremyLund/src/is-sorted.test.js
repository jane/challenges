/* eslint-env jest */
import isSorted from './is-sorted'

test('a single item is sorted', () => {
  expect(isSorted([1])).toBe(true)
})

test('two sorted pancakes', () => {
  expect(isSorted([2, 5])).toBe(true)
})

test('two unsorted pancakes', () => {
  expect(isSorted([5, 2])).toBe(false)
})

test('two equal pancakes are sorted', () => {
  expect(isSorted([7, 7])).toBe(true)
})

test('big unsorted stack', () => {
  expect(isSorted([7, 6, 4, 2, 6, 7, 8, 7])).toBe(false)
})

test('big sorted stack', () => {
  expect(isSorted([2, 4, 6, 6, 7, 7, 7, 8])).toBe(true)
})
