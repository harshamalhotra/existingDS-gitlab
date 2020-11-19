# Embed Figma files

When [embedding Figma files](https://www.figma.com/developers/embed), make sure you:
1. Add a link to the Figma file above the embed. This will act as a fallback if the browser blocks the embed.
1. Wrap the `iframe` in a `div` with the class `figma-embed`. This will apply the styles needed for the embed to resize fluidly.
1. Remove the `style`, `height`, and `width` attributes from the `iframe`.
1. Add a `frameborder="0"` attribute to the `iframe`.

## Example embed

```md
[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=51%3A18)

<div class="figma-embed">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D51%253A18" allowfullscreen></iframe>
</div>
```
