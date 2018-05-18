/* eslint-env jest */
import cases from 'jest-in-case'
import parseInput from './parse-input'

cases(
  'parseInput',
  ({ input, expected }) => {
    expect(parseInput(input)).toEqual(expected)
  },
  [
    {
      input: `
        3
        3 1 2
      `,
      expected: [3, 1, 2],
    },
    {
      input: `
        8
        7 6 4 2 6 7 8 7
      `,
      expected: [7, 6, 4, 2, 6, 7, 8, 7],
    },
    {
      input: `
        8
        11 5 12 3 10 3 2 5
      `,
      expected: [11, 5, 12, 3, 10, 3, 2, 5],
    },
    {
      input: `
        10
        3 12 8 12 4 7 10 3 8 10
      `,
      expected: [3, 12, 8, 12, 4, 7, 10, 3, 8, 10],
    },
  ],
)
