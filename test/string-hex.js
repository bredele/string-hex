/**
 * Dependencies
 */

const test = require('tape')
const hex = require('..')


test('should convert string into hex #1', assert => {
  assert.plan(1)
  assert.equal(hex('a'), '61')
})

test('should convert string into hex #2', assert => {
  assert.plan(1)
  assert.equal(hex('olivier'), '6f6c6976696572')
})

test('should convert string into hex #2', assert => {
  assert.plan(1)
  assert.equal(hex('hello world'), '68656c6c6f20776f726c64')
})
