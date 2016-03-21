#!/usr/bin/env node

/**
 * Modules
 */

var recase = require('..')
var minimist = require('minimist')

/**
 * CLI
 */

var argv = minimist(process.argv.slice(2))

recase(argv._, argv)
