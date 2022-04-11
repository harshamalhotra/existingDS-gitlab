<script>
import { initMarkdownIt } from '../helpers/render_markdown';

export default {
  props: {
    md: {
      type: String,
      required: true,
    },
  },
  render(createElement) {
    if (!this.md && !this.prerenderedMd) {
      return createElement('p', "This component's documentation has not yet been added.");
    }

    const md = initMarkdownIt();
    const mdOutput = md.render(this.md);
    const dynamicElement = {
      template: `<div class="component md typography">${mdOutput}</div>`,
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
