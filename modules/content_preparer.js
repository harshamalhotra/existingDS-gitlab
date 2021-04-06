import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import fm from 'front-matter';
import { initMarkdownIt } from '../helpers/render_markdown';

export function getContentList(dirName) {
  const baseContentsDir = path.resolve(__dirname, '../static/contents/');
  const outputDir = path.join(baseContentsDir, dirName);

  if (!fs.existsSync(baseContentsDir)) {
    fs.mkdirSync(baseContentsDir);
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const componentInfos = [];

  const baseComponentsDir = path.resolve(__dirname, `../contents/${dirName}/`);
  const convertComponent = (componentFileName, componentFileContent) => {
    const content = fm(componentFileContent);
    const filePath = path.resolve(baseComponentsDir, componentFileName);
    try {
      const gitLastUpdate = execSync(`git log -1 --pretty=format:%aI "${filePath}"`).toString();
      content.lastUpdatedAt = gitLastUpdate;
    } catch (error) {
      /* eslint-disable no-console */
      console.error(`Could not retrieve last update date for ${filePath}`);
      console.error(error);
      /* eslint-enable no-console */
    }
    // We don't actually need the raw frontmatter, good to save some bytes
    delete content.frontmatter;

    const md = initMarkdownIt();
    content.body = md.render(content.body);

    fs.writeFileSync(
      `${outputDir}/${componentFileName.replace(/.md/g, '.json')}`,
      JSON.stringify(content),
    );

    const { name, figma, docs, a11y, gitlab_ui, vueComponents } = content.attributes;
    const id = componentFileName.replace('.md', '');

    componentInfos.push({
      id,
      name,
      figma,
      docs: docs || 'upcoming',
      a11y: a11y || 'upcoming',
      gitlab_ui,
      hasVueComponent: vueComponents && vueComponents.length > 0,
    });
  };

  const fileItems = fs.readdirSync(baseComponentsDir);
  fileItems.forEach((item) => {
    const itemContent = fs.readFileSync(path.join(baseComponentsDir, item), 'utf8');
    convertComponent(item, itemContent);
  });

  return componentInfos;
}

export function writeContentTree(baseDirectory) {
  const treeObj = {};
  const directories = fs.readdirSync(path.resolve(baseDirectory, 'contents'));

  directories.forEach((dir) => {
    treeObj[dir] = getContentList(dir);
  });

  fs.writeFileSync(
    path.resolve(baseDirectory, 'content_tree.json'),
    JSON.stringify(treeObj, null, 2),
  );
}
