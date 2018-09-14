# jscode-find-callee

This is a tool to find calls at javascript code.

### Usage
The following example will search for all `console` calls at the `fixtures/console_log_2.js` sourcecode.
```
node bin/jscode-find-callee fixtures/console_log_2.js
```

If you want to search for an other callee instead of `console` you can use the `--name` flag.
```
node bin/jscode-find-callee --name logger fixtures/console_log_2.js
```

It is also possible to search an entire directory.
```
node bin/jscode-find-callee --name console fixtures
```
