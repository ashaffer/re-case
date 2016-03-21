#!/usr/bin/env node

var recase = require('..')
var args = process.argv.slice(2)

recase.apply(null, args)
