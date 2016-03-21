
# recase

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Change file case in bulk

## Installation

    $ npm install re-case

## Usage

`recase <pattern> <case>`

e.g.

`recase components/*.js capital`

Transform all the javascript files in `components/` to capital case:

```
components/menu.js -> components/Menu.js
components/dropdown-menu.js -> components/DropdownMenu.js
```

Internally this uses [to-case](https://github.com/ianstormtaylor/to-case), so you can specify any of the cases that it accepts and they should work

  * `camel` - `whatTheHeck`
  * `capital` - `What The Heck`
  * `constant` - `WHAT_THE_HECK`
  * `dot` - `what.the.heck`
  * `inverse` - `WHAt ThE HeCK`
  * `lower` - `what the heck`
  * `pascal` - `WhatTheHeck`
  * `sentence` - `What the heck.`
  * `slug` - `what-the-heck`
  * `snake` - `what_the_heck`
  * `space` - `what the heck`
  * `title` - `What the Heck`
  * `upper` - `WHAT THE HECK`

## License

The MIT License

Copyright &copy; 2016, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
