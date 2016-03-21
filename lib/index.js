/**
 * Modules
 */

var fs = require('fs')
var path = require('path')
var glob = require('glob')
var toCase = require('to-case')

/**
 * Expose recase
 */

module.exports = recase

/**
 * recase
 */

function recase (patterns, target) {
  patterns = [].concat(patterns).filter(Boolean)

  patterns.forEach(function (pattern) {
    glob.sync(pattern).forEach(function (file) {
      fs.renameSync(file, transform(file, target))
    })
  })
}

function transform (file, target) {
  var basename = path.basename(file)
  var dirname = path.dirname(file)
  var extname = path.extname(file)

  if (!toCase[target]) {
    throw new Error('recase: Case "' + target + '" not found' )
  }

  var name = basename.slice(0, -extname.length)
  var translated = toCase[target](name)

  return path.join(dirname, translated + extname)
}
