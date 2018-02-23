/* eslint-env jest */
import calculateMaxPath from './calculate-max-path'

test('empty triangle is 0', () => {
  expect(calculateMaxPath('')).toEqual(0)
})

test('single item is the max value', () => {
  expect(calculateMaxPath('3')).toEqual(3)
})

test('two-level triangle calculates correct max', () => {
  const triangle = `
    3
  7 4
  `
  expect(calculateMaxPath(triangle)).toEqual(10)
})

test('sample triangle works', () => {
  const triangle = `
        3
      7 4
    2 4 6
  8 5 9 3
  `
  expect(calculateMaxPath(triangle)).toEqual(23)
})
