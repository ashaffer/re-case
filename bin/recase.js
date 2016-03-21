#!/usr/bin/env node

var recase = require('..')
var args = process.argv.slice(2)

recase(args.slice(0, -1), args.pop())
