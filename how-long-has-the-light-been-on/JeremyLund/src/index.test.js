/* eslint-env jest */
import cases from 'jest-in-case'
import { calculateLightsOn, parseVisitorInput } from '.'

const case1 = `
1 3
2 3
4 5
`
const case2 = `
2 4  
3 6  
1 3  
6 8
`

const case3 = `
6 8
5 8
8 9
5 7
4 7
`
const bonus = `
15 18
13 16
9 12
3 4
17 20
9 11
17 18
4 5
5 6
4 5
5 6
13 16
2 3
15 17
13 14
`

test('returns 0 for no visitors', () => {
  expect(calculateLightsOn()).toEqual(0)
})

cases(
  'calculateLightsOn',
  ({ input, expected }) => {
    expect(calculateLightsOn(parseVisitorInput(input))).toEqual(expected)
  },
  [
    { input: case1, expected: 3 },
    { input: case2, expected: 7 },
    { input: case3, expected: 5 },
    { input: bonus, expected: 14 },
  ],
)
cases(
  'parseVisitorInput',
  ({ input, expected }) => {
    expect(parseVisitorInput(input)).toEqual(expected)
  },
  [
    {
      input: case1,
      expected: [[1, 3], [2, 3], [4, 5]],
    },
    {
      input: case2,
      expected: [[2, 4], [3, 6], [1, 3], [6, 8]],
    },
  ],
)
