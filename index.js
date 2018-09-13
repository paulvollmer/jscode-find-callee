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
 * find all callees of the given name
 * @param {string} program
 * @param {string} calleeName
 */
function find(program, calleeName) {
  const ast = esprima.parseScript(program, {loc: true});
  estraverse.traverse(ast, {
    enter: function(node, parent) {
      if (isCall(node, calleeName)) {
        console.log(`--> Line ${node.loc.start.line} \t ${escodegen.generate(node)}`);
      }
    },
  });
}

module.exports = find;
