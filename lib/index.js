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

function recase (pattern, target) {
  glob.sync(pattern).forEach(function (file) {
    fs.renameSync(file, transform(file, target))
  })
}

function transform (file, target) {
  var basename = path.basename(file)
  var dirname = path.dirname(file)

  return path.join(dirname, toCase[target](basename))
}
