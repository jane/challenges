const assert = require('assert')
const { sortObj, tally, solve } = require('./solve')

assert.deepEqual(sortObj({ a: 1, b: 2 }), { b: 2, a: 1 }, 'sort obj')
assert.deepEqual(tally('asdf'), { a: 1, s: 1, d: 1, f: 1 }, 'tally all positive')
assert.deepEqual(tally('ASDF'), { a: -1, s: -1, d: -1, f: -1 }, 'tally all negative')
assert.deepEqual(tally('asdfASDFasDF'), { a: 1, s: 1, d: -1, f: -1 }, 'tally mixed')
assert.deepStrictEqual(solve('asdfasdfASDFaSSF'), { a: 2, d: 1, f: 0, s: -1 }, 'solve mixed')
