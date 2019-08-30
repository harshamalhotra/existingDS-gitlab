import path from 'path';
import fs from 'fs';
import fm from 'front-matter';

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
    // We don't actually need the raw frontmatter, good to save some bytes
    delete content.frontmatter;
    fs.writeFileSync(
      `${outputDir}/${componentFileName.replace(/.md/g, '.json')}`,
      JSON.stringify(content),
    );

    const hasInfo = content.body.length > 0;
    const status = content.attributes.status || (hasInfo ? 'in-progress' : 'upcoming');

    componentInfos.push({
      id: componentFileName.replace('.md', ''),
      name: content.attributes.name,
      hasVueComponent:
        content.attributes.vueComponents && content.attributes.vueComponents.length > 0,
      hasInfo,
      status,
    });
  };

  const fileItems = fs.readdirSync(baseComponentsDir);
  fileItems.forEach(item => {
    const itemContent = fs.readFileSync(path.join(baseComponentsDir, item), 'utf8');
    convertComponent(item, itemContent);
  });

  return componentInfos;
}

export function writeContentTree(baseDirectory) {
  const treeObj = {};
  const directories = fs.readdirSync(path.resolve(baseDirectory, 'contents'));

  directories.forEach(dir => {
    treeObj[dir] = getContentList(dir);
  });

  fs.writeFileSync(
    path.resolve(baseDirectory, 'content_tree.json'),
    JSON.stringify(treeObj, null, 2),
  );
}
