/* eslint-env jest */
import calculateNameScore from './calculate-name-score'

test('empty string adds up to 0', () => {
  expect(calculateNameScore('')).toEqual(0)
})

test('"COLIN" is worth 53', () => {
  expect(calculateNameScore('COLIN')).toEqual(53)
})

test('"CURLY" is worth 79', () => {
  expect(calculateNameScore('CURLY')).toEqual(79)
})

test('"LARRY is worth 74', () => {
  expect(calculateNameScore('LARRY')).toEqual(74)
})

test('"MO" is worth 28', () => {
  expect(calculateNameScore('MO')).toEqual(28)
})

test('"SHEMP" is worth 61', () => {
  expect(calculateNameScore('SHEMP')).toEqual(61)
})
