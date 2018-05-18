/* eslint-env jest */
import calculate from './calculate'

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
