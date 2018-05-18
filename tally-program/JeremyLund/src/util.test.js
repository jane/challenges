/* eslint-env jest */
import { flatten, sortByScoreDescPlayerAsc, toPlayerScoreOutput } from './util'

test('flatten converts varargs into array', () => {
  expect(flatten('a', 'b', 'c')).toEqual(['a', 'b', 'c'])
})

test('flatten combines arrays', () => {
  expect(flatten(['a', 'b'], ['c'])).toEqual(['a', 'b', 'c'])
})

test('works with arrays and varargs', () => {
  expect(flatten(['a', 'b'], 'c')).toEqual(['a', 'b', 'c'])
})
test('works with arrays and varargs', () => {
  expect(flatten(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
})
test('returns the same when in array', () => {
  const input = ['Jeff', 'Jeremy', 'John']
  expect(flatten(input)).toEqual(input)
})

test('toPlayerScoreOutput correctly formats output', () => {
  expect(toPlayerScoreOutput({ player: 'Bob', score: 42 })).toEqual('Bob:42')
})

test('sortByScoreDescPlayerAsc puts higher scores first', () => {
  const input = [
    { player: 'a', score: 1 },
    { player: 'b', score: 5 },
    { player: 'c', score: 3 },
  ]
  const expected = [
    { player: 'b', score: 5 },
    { player: 'c', score: 3 },
    { player: 'a', score: 1 },
  ]
  expect(input.slice().sort(sortByScoreDescPlayerAsc)).toEqual(expected)
})

test('sortByScoreDescPlayerAsc sorts equal scores by name', () => {
  const input = [
    { player: 'a', score: 1 },
    { player: 'c', score: 3 },
    { player: 'b', score: 3 },
  ]
  const expected = [
    { player: 'b', score: 3 },
    { player: 'c', score: 3 },
    { player: 'a', score: 1 },
  ]
  expect(input.slice().sort(sortByScoreDescPlayerAsc)).toEqual(expected)
})
