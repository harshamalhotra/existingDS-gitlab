<script>
import markdowner from 'markdown-it'

export default {
  props: {
    md: {
      default: '',
      type: String,
    },
  },
  render(createElement) {
    if (!this.md) {
      return createElement('h4', 'No description')
    }

    const md = markdowner({
      xhtmlOut: true,
      typographer: true,
    })
    let mdOutput = md.render(this.md)
    mdOutput = mdOutput.replace(/\[\[Example:(.*?)\]\]/g, '<gl-example-display exampleName="$1" />')

    const dynamicElement = {
      template: `<div class="component md">${mdOutput}</div>`,
    }

    return createElement(dynamicElement)
  },
}
</script>
