/* eslint-env jest */
import scoreNames from './score-names'

test('Stooges should add up correctly', () => {
  const names = [
    'LARRY', // 74 * 2 = 148
    'MO', // 28 * 3 = 84
    'CURLY', // 79 * 1 = 79
    'SHEMP', // 61 * 4 = 244
  ]
  const expected = 555 // 555
  expect(scoreNames(names)).toEqual(expected)
})
