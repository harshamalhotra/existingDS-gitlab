<script>
import { initMarkdownIt } from '../helpers/render_markdown';

const makeAdmonitions = (html, type) => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.substring(1);
  const pattern = new RegExp(`(<[^>]+>)?${typeCapitalized}:(.*?)(</[^>]+>)?\n`, 'gm');
  return html.replace(
    pattern,
    `$1<span class="admonition admonition--${type}"><span>${typeCapitalized}: </span>$2</span>$3`,
  );
};

export default {
  props: {
    md: {
      type: String,
      required: false,
      default: '',
    },
    prerenderedMd: {
      type: String,
      required: false,
      default: '',
    },
  },
  render(createElement) {
    if (!this.md && !this.prerenderedMd) {
      return createElement('p', "This component's documentation has not yet been added.");
    }

    let mdOutput;

    if (this.md) {
      const md = initMarkdownIt();
      mdOutput = md.render(this.md);
    } else {
      mdOutput = this.prerenderedMd;
    }

    mdOutput = mdOutput.replace(
      /\[\[Example:(.*?)\]\]/g,
      '<div class="app-styles"><gl-example-display exampleName="$1" /></div>',
    );

    // Format Todo Messages as before
    ['note', 'tip', 'todo', 'warning'].forEach((type) => {
      mdOutput = makeAdmonitions(mdOutput, type);
    });

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
