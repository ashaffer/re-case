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

function recase (patterns, opts) {
  if (typeof opts === 'string') opts = {case: opts}
  opts = opts || {}

  patterns = [].concat(patterns).filter(Boolean)

  if (!toCase[opts.case]) throw new Error('recase: Case "' + target + '" not found')

  patterns.forEach(function (pattern) {
    glob.sync(pattern).forEach(function (file) {
      fs.renameSync(file, transform(file, opts))
    })
  })
}

function transform (file, opts) {
  var basename = path.basename(file)
  var dirname = path.dirname(file)
  var extname = opts.ext || path.extname(file)
  var name = basename.slice(0, -extname.length)
  var translated = toCase[opts.case](name)

  return path.join(dirname, translated + extname)
}
