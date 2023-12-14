const visit = require('unist-util-visit');
const fixUrlInReviewApp = require('../helpers/fix_url_in_review_app');

/**
 * This is a REHYPE plugin (working on HTML)
 */
module.exports = function transform() {
  /*
    This transformer fixes URLs to images in our markdown

    Our review apps do not run under example.org/ but under
    example.org/longer-base-path/
   */
  return function transformer(tree) {
    if (process.env.CI_ENVIRONMENT_URL) {
      visit(tree, { tagName: 'img' }, (node) => {
        const src = node?.properties?.src;
        if (src?.startsWith('/')) {
          node.properties.src = fixUrlInReviewApp(src);
        }
      });
    }
  };
};
