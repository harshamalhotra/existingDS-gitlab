const visit = require('unist-util-visit');

const visitCodeBlock = (ast) => {
  return visit(ast, { type: 'code', lang: 'mermaid' }, (node, index, parent) => {
    parent.children.splice(index, 1, {
      type: 'html',
      value: `<mermaid-diagram>${node.value}</mermaid-diagram>`,
    });

    return node;
  });
};

const mermaidPlugin = () => {
  return function transformer(ast, vFile, next) {
    visitCodeBlock(ast);

    if (typeof next === 'function') {
      return next(null, ast, vFile);
    }

    return ast;
  };
};

module.exports = mermaidPlugin;
