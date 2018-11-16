import path from 'path'
import fs from 'fs'
import fm from 'front-matter'

export default function() {
  // This iterates over all component frontmatter files and creates .json files out of it, which are then loaded by the UI
  this.extendBuild((config, { isClient }) => {
    // As we only do static we also only need to prepare it for the client
    if (!isClient) {
      return
    }
    const baseContentsDir = path.resolve(__dirname, '../static/contents/')
    const outputDir = path.join(baseContentsDir, 'components')

    if (!fs.existsSync(baseContentsDir)) {
      fs.mkdirSync(baseContentsDir)
    }
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }

    const baseComponentsDir = path.resolve(__dirname, '../contents/components/')
    const convertComponent = componentFileName => (
      err,
      componentFileContent
    ) => {
      if (err) throw err

      const content = fm(componentFileContent)
      fs.writeFile(
        `${outputDir}/${componentFileName.replace(/.md/g, '.json')}`,
        JSON.stringify(content),
        writeErr => {
          if (writeErr) throw writeErr
        }
      )
    }

    fs.readdir(baseComponentsDir, (err, items) => {
      if (err) throw err

      items.forEach(item => {
        fs.readFile(
          path.join(baseComponentsDir, item),
          'utf8',
          convertComponent(item)
        )
      })
    })
  })
}
