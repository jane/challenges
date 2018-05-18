/* eslint-env jest */
import cases from 'jest-in-case'
import pancakeSort from './pancake-sort'

test('returns a single item array as sorted', () => {
  const source = [5]
  const expected = {
    result: source,
    count: 0,
  }
  expect(pancakeSort(source)).toEqual(expected)
})

cases(
  'test cases',
  ({ source, expected }) => {
    const result = pancakeSort(source)
    expect(result).toEqual(expected)
  },
  [
    {
      source: [3, 1, 2],
      expected: {
        result: [1, 2, 3],
        count: 2,
      },
    },
    {
      source: [7, 6, 4, 2, 6, 7, 8, 7],
      expected: {
        result: [2, 4, 6, 6, 7, 7, 7, 8],
        count: 12,
      },
    },
  ],
)
