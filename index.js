const esprima = require('esprima');
const escodegen = require('escodegen');
const estraverse = require('estraverse');

/**
 * Check if the given ast node is a calle of the given name
 * @param {esprima.node} node - The esprima ast node
 * @param {string} name - The name of the callee
 * @return {boolean} True if the node is a console.log or console['error'](y) call
 */
function isCall(node, name) {
  return (node.type === 'CallExpression') &&
         (node.callee.type === 'MemberExpression') &&
         (node.callee.object.type === 'Identifier') &&
         (node.callee.object.name === name);
}

/**
 * @param {string} s The string to return as ANSI escape code
 * @return {string} ANSI escape code
 */
function bold(s) {
  return `\x1b[1m${s}\x1b[0m`;
}

/**
 * find all callees of the given name
 * @param {string} filename The source filename to print to stdout
 * @param {string} program The sourcecode
 * @param {string} calleeName The calles name to search for
 */
function find(filename, program, calleeName) {
  let ast;
  try {
    ast = esprima.parseScript(program, {loc: true});
    estraverse.traverse(ast, {
      enter: function(node, parent) {
        if (isCall(node, calleeName)) {
          const line = node.loc.start.line;
          console.log(`File: ${bold(filename)} \tLine: ${bold(line)} \tCode: ${bold(escodegen.generate(node))}`);
        }
      },
    });
  } catch (err) {
    console.log(`File: ${bold(filename)} \tError: ${bold(err.message)}`);
  }
}

module.exports = find;
