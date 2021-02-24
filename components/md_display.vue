<script>
import markdowner from 'markdown-it';
import markdownAnchor from 'markdown-it-anchor';

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
  },
  render(createElement) {
    if (!this.md) {
      return createElement('p', "This component's documentation has not yet been added.");
    }

    const md = markdowner({
      html: true,
      xhtmlOut: true,
      typographer: true,
    }).use(markdownAnchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#',
      slugify: s => {
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
        return encodeURIComponent(s);
      },
    });
    let mdOutput = md.render(this.md);
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
