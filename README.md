# jscode-find-callee [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/paulvollmer/jscode-find-callee/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/jscode-find-callee.svg?style=flat)](https://www.npmjs.com/package/jscode-find-callee)

This is a tool to find calls at javascript code.

### Installation

```
npm install -g jscode-find-callee
```

### Usage
The following example will search for all `console` calls at the `fixtures/console_log_2.js` sourcecode.
```
jscode-find-callee fixtures/console_log_2.js
```

If you want to search for an other callee instead of `console` you can use the `--name` flag.
```
jscode-find-callee --name logger fixtures/console_log_2.js
```

It is also possible to search an entire directory.
```
jscode-find-callee --name console fixtures
```
