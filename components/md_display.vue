<script>
import markdowner from 'markdown-it';
import markdownAnchor from 'markdown-it-anchor';

export default {
  props: {
    md: {
      default: '',
      type: String,
    },
  },
  render(createElement) {
    if (!this.md) {
      return createElement('h4', "This component's documentation has not yet been added.");
    }

    const md = markdowner({
      html: true,
      xhtmlOut: true,
      typographer: true,
    }).use(markdownAnchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#',
    });
    let mdOutput = md.render(this.md);
    mdOutput = mdOutput.replace(
      /\[\[Example:(.*?)\]\]/g,
      '<div class="app-styles"><gl-example-display exampleName="$1" /></div>',
    );

    // Format Todo Messages as before
    mdOutput = mdOutput.replace(
      /Note:(.*?)\n/gm,
      '<span class="admonition admonition--note"><span>Note: </span>$1</span>',
    );
    mdOutput = mdOutput.replace(
      /Tip:(.*?)\n/gm,
      '<span class="admonition admonition--tip"><span>Tip: </span>$1</span>',
    );
    mdOutput = mdOutput.replace(
      /Todo:(.*?)\n/gm,
      '<span class="admonition admonition--todo"><span>Todo: </span>$1</span>',
    );
    mdOutput = mdOutput.replace(
      /Warning:(.*?)\n/gm,
      '<span class="admonition admonition--warning"><span>Warning: </span>$1</span>',
    );

    const dynamicElement = {
      template: `<div class="component md  typography">${mdOutput}</div>`,
    };

    return createElement(dynamicElement);
  },
};
</script>

<style>
.header-anchor {
  margin-left: -1em;
  visibility: hidden;
}

*:hover > .header-anchor {
  visibility: visible;
}
</style>
