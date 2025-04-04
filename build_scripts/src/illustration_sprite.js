const fs = require('fs');
const path = require('path');
const glob = require('glob');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const { getFilesizeInBytes } = require('./utils');

// eslint-disable-next-line max-params
const createImageSprite = (BASE_PATH, destPath, globPattern, targetFile, extraGlobPattern) => {
  const spriteFiles = glob.sync(globPattern);
  spriteFiles.push(...glob.sync(extraGlobPattern));

  const spriter = new SVGSpriter({
    dest: destPath,
    shape: {
      dimension: {
        maxWidth: 288,
        maxHeight: 288,
        attributes: true,
      },
      transform: [
        {
          svgo: {
            /*
              The following optimizations have been turned off because they apparently break our:
              echarts icon rendering:
              - https://github.com/apache/incubator-echarts/issues/11087
              - https://gitlab.com/gitlab-org/gitlab-svgs/issues/73
               */
            plugins: [
              { convertPathData: { noSpaceAfterFlags: false } },
              { mergePaths: { noSpaceAfterFlags: false } },
            ],
          },
        },
      ],
    },
    mode: {
      inline: true, // Prepare for inline embedding
      stack: {
        example: false,
        dest: '',
        sprite: `${targetFile}.svg`,
      },
    },
    svg: {
      namespaceClassnames: false,
    },
  });

  const illustrations = [];

  function getIllustrationInfo(name) {
    let size = 0;

    if (name.endsWith('-lg')) size = 288;
    else if (name.endsWith('-md')) size = 144;
    else if (name.endsWith('-sm')) size = 72;

    if (size !== 0) return { name, svg_size: size };
    return false;
  }

  spriteFiles.forEach((file) => {
    const filePath = path.resolve(file);
    const illustrationInfo = getIllustrationInfo(path.basename(file, '.svg'));
    if (illustrationInfo) {
      spriter.add(
        filePath,
        null,
        fs.readFileSync(filePath, {
          encoding: 'utf-8',
        }),
      );
      illustrations.push(illustrationInfo);
    }
  });

  // Compile the sprite
  return new Promise((resolve, reject) => {
    spriter.compile((error, result) => {
      if (error) {
        return reject(error);
      }

      try {
        Object.values(result).forEach((mode) => {
          Object.values(mode).forEach((resource) => {
            mkdirp.sync(path.dirname(resource.path));
            fs.writeFileSync(resource.path, resource.contents);

            console.log(`Compiled - Saving to ${resource.path}`);
          });
        });

        // Save the Illustrations in here to a json so we can then display a nice help sprite sheet in GitLab
        const illustrationsInfo = {
          iconCount: illustrations.length,
          spriteSize: getFilesizeInBytes(path.join(destPath, `${targetFile}.svg`)),
          illustrations,
        };

        fs.writeFileSync(
          path.join(destPath, `${targetFile}.json`),
          JSON.stringify(illustrationsInfo, null, 2),
          'utf8',
        );
      } catch (e) {
        return reject(e);
      }

      return resolve();
    });
  });
};

module.exports = { createImageSprite };
