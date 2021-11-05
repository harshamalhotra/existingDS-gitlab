<script>
import { initMarkdownIt } from '../helpers/render_markdown';
import packageJson from '../package.json';

const {
  bugs: { url: issuesUrl },
} = packageJson;

const ADMONITION_TODO = 'todo';

function makeAdmonitions(html, type) {
  const { slug } = this.$route.params;
  const typeCapitalized = type.charAt(0).toUpperCase() + type.substring(1);
  const pattern = new RegExp(`(<[^>]+>)?${typeCapitalized}: *(.*?)(</[^>]+>)?\n`, 'gm');
  const newIssueUrl = `${issuesUrl}/new?issue[title]=$2%20for%20${slug}&issue[description]=/label%20~%22component%3A${slug}%22`;
  const createIssueHtml = `<a href="${newIssueUrl}">Create an issue</a>`;
  if (type === ADMONITION_TODO) {
    return html.replace(
      pattern,
      `$1<span class="admonition admonition--${type}"><span>${typeCapitalized}: </span>$2<br>${createIssueHtml}</span>$3`,
    );
  }
  return html.replace(
    pattern,
    `$1<span class="admonition admonition--${type}"><span>${typeCapitalized}: </span>$2</span>$3`,
  );
}

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
    ['note', 'tip', ADMONITION_TODO, 'warning'].forEach((type) => {
      mdOutput = makeAdmonitions.call(this, mdOutput, type);
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
