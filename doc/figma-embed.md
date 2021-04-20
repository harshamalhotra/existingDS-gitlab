# Embed Figma files

With Figma you can embed a live file or prototype within a webpage so that the contents can easily be viewed or interacted with. It's an easy way to incorporate conceptual models, diagrams, and other content that presents ideas in a visual way. If the content of the embed is complex, it should additionally be explained using a detailed text description on the same page.

Figma embeds should be avoided in cases where [component examples](/doc/component-examples.md) can be utilized. We default to using live coded examples over Figma embeds.

## Embedding process

When [embedding Figma files](https://www.figma.com/developers/embed), make sure you:
1. Add a link to the Figma file above the embed. This will act as a fallback if the browser blocks the embed.
1. Wrap the `iframe` in a `div` with the class `figma-embed`. This will apply the styles needed for the embed to resize fluidly.
1. Include `aria-label="Embed description"` and `role="img"` on the wrapping `div`. The content of `aria-label` should concisely describe the contents — similar to how alt text would for an image. The content within the embedded iframe uses the `canvas` element and isn’t accessible for screen reader or keyboard-only users so treating the entire embed as an image with description provides a better experience.
1. Remove the `style`, `height`, and `width` attributes from the `iframe`.
1. Add a `frameborder="0"` attribute to the `iframe`.

### Example embed

```md
[View conceptual model in Figma →](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=50%3A217)

<div class="figma-embed" aria-label="A layout of a merge request with overlays to highlight different sections that represent objects within the merge request" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FshVF8UZwrQtkNfMDjcrsyH%2FSemantic-layouts%3Fnode-id%3D50%253A217" allowfullscreen></iframe>
</div>
```

## Resources

- Read Figma's get started [Embed files and prototypes](https://help.figma.com/hc/en-us/articles/360039827134-Embed-files-and-prototypes) article.
- Learn more about Figma's [live embed kit](https://www.figma.com/developers/embed).
