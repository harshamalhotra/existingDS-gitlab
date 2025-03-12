const path = require('path');
const { writeFile } = require('fs/promises');

const { optimizeSVGs } = require('./svg_optimization');
const { getIllustrationStats } = require('./utils');

const collectIllustrations = async (basePath, distPath) => {
  const statsFile = path.join(distPath, 'illustrations.json');

  console.log('Optimizing SVG illustrations...');
  const childSVGs = await optimizeSVGs(
    basePath,
    distPath,
    path.join(basePath, 'illustrations/', '**.svg'),
  );
  childSVGs.forEach((svg) => {
    const filename = svg.name.replace('illustrations/', '').replace('.svg', '');
    let size = 'md';

    if (filename.includes('-lg')) size = 'lg';
    else if (filename.includes('-sm')) size = 'sm';

    /* eslint-disable no-param-reassign */
    svg.name = filename;
    svg.size = size;
  });
  const nestedSVGs = await optimizeSVGs(
    basePath,
    distPath,
    path.join(basePath, 'illustrations/!(logos|third-party-logos)', '**', '**.svg'),
  );
  nestedSVGs.forEach((svg) => {
    let [, , filename] = svg.name.split('/');
    let size = 'md';
    filename = filename.replace('.svg', '');

    if (filename.includes('-lg')) size = 'lg';
    else if (filename.includes('-sm')) size = 'sm';

    /* eslint-disable no-param-reassign */
    svg.name = filename;
    svg.size = size;
  });
  console.log('Optimized SVG illustrations');

  const stats = getIllustrationStats([...childSVGs, ...nestedSVGs]);

  await writeFile(statsFile, JSON.stringify(stats, null, 2), 'utf-8');
};

module.exports = {
  collectIllustrations,
};
