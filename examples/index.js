import { camelCase, upperFirst } from 'lodash';
import path from 'path';

const context = require.context('.', true, /index\.js$/);
const examples = {};

context.keys().forEach(key => {
  // require.context also catches this very file, so we skip it to make sure the only index.js files
  // we loop through are example ones.
  if (key === './index.js') {
    return;
  }

  const componentDir = path.dirname(key);
  // Remove anything before the directory name
  const snakeCasedComponentName = componentDir.replace(/.*\//g, '');
  const pascalCasedComponentName = upperFirst(camelCase(snakeCasedComponentName));
  const componentName = `Gl${pascalCasedComponentName}`;
  examples[componentName] = context(key).default;
});

export default examples;
