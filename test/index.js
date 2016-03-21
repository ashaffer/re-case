/**
 * Imports
 */

var rimraf = require('rimraf')
var test = require('tape')
var recase = require('..')
var fs = require('fs')

/**
 * Tests
 */

test('should work', function (t) {
  create('test.js')

  t.deepEqual(ls(), ['test.js'])
  recase('./test/fixtures/*', 'capital')
  t.deepEqual(ls(), ['Test.js'])

  cleanup()

  t.end()
})

/**
 * Helpers
 */

function create (name) {
  fs.writeFileSync('./test/fixtures/' + name, 'test', 'utf8')
}

function ls () {
  return fs.readdirSync('./test/fixtures')
}

function cleanup () {
  rimraf.sync('./test/fixtures/*')
}
