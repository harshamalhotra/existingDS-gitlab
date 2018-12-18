import postcss from 'postcss';
import trim from 'lodash.trim';
import resolveRelative from 'resolve-relative-url';
import assign from 'lodash.assign';
import CleanCSS from 'clean-css';
import sass from 'node-sass';

const defaults = {
  recursive: true,
  modernBrowser: false,
  userAgent: null,
  scopeSelector: null,
};
const { space } = postcss.list;

function cleanupRemoteFile(value) {
  if (value.substr(0, 3) === 'url') {
    value = value.substr(3);
  }
  value = trim(value, '\'"()');
  return value;
}

function isValidUrl(str) {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(str);
}

function getOnlineCSS(remoteUrl, options) {
  return new Promise((resolve, reject) => {
    // Loading the remote URL and cleaning it so we don't have problems with invalid stuff
    const remoteSource = `@import url(${remoteUrl});`;
    new CleanCSS({ inline: ['remote'] }).minify(remoteSource, (error, output) => {
      if (error) reject(error);

      let outputBody = output.styles;

      // If our options have a scope Selector we encapsulate it in it and then through sass all will be transformed
      if (options.scopeSelector) {
        outputBody = `.${options.scopeSelector} {${outputBody}}`;
      }

      // Transform with Sass
      const result = sass.renderSync({
        data: outputBody,
      });

      resolve({
        body: result.css.toString(),
        parent: remoteUrl,
      });
    });
  });
}

function postcssGitlabTransformations(options) {
  options = assign({}, defaults, options || {});
  return function importUrl(tree, dummy, parentRemoteFile = tree.source.input.file) {
    const imports = [];
    tree.walkAtRules('import', atRule => {
      const params = space(atRule.params);
      let remoteFile = cleanupRemoteFile(params[0]);
      if (parentRemoteFile) {
        remoteFile = resolveRelative(remoteFile, parentRemoteFile);
      }
      if (!isValidUrl(remoteFile)) return;

      imports[imports.length] = getOnlineCSS(remoteFile, options).then(r => {
        const newNode = postcss.parse(r.body);
        return Promise.resolve(newNode).then(resultTree => {
          atRule.replaceWith(resultTree);
        });
      });
    });
    return Promise.all(imports).then(() => tree);
  };
}

export default postcss.plugin('postcss-gitlab', postcssGitlabTransformations);
