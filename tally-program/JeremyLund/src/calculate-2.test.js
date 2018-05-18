/* eslint-env jest */
import calculateFactory from './calculate-2'

describe('for "abcde"', () => {
  const calculate = calculateFactory('a', 'b', 'c', 'd', 'e')

  test('case 1', () => {
    const input = 'abcde'
    const expected = 'a:1, b:1, c:1, d:1, e:1'
    expect(calculate(input)).toEqual(expected)
  })

  test('case 2', () => {
    const input = 'dbbaCEDbdAacCEAadcB'
    const expected = 'b:2, d:2, a:1, c:0, e:-2'
    expect(calculate(input)).toEqual(expected)
  })

  test('case 3', () => {
    const input = 'EbAAdbBEaBaaBBdAccbeebaec'
    const expected = 'c:3, d:2, a:1, e:1, b:0'
    expect(calculate(input)).toEqual(expected)
  })
})

describe('for "Jeff,Jeremy,John"', () => {
  test('returns correct scores', () => {
    const calculate = calculateFactory(['Jeff', 'Jeremy', 'John'])
    const input = 'JeffJeremyJohnJeffJeffJEREMYJOHNJOHNJEFFJeffJeremy'
    const expected = 'Jeff:3, Jeremy:1, John:-1'
    expect(calculate(input)).toEqual(expected)
  })
})
