---
name: Illustration
---

One of our design goals is to convey GitLab’s distinct personality through illustration that is aesthetically refined, visually consistent, and reflective of our particular sense of style.

<img class="d-block a-center m-t-7" src="/img/illus-group.svg" alt="Collection of GitLab illustrations" />

## Principles

1. **Be simple.** For clarity, we use simple and specific elements to create our illustrations. We take a "less is more" approach where illustrations are supportive. They should be obvious but not comprehensive, focusing on impression over complexity.
1. **Be optimistic.** We take an open-minded, positive, and friendly approach. Those values are reflected in our illustrations with a light and airy feel.
1. **Be helpful.** Our illustrations help users to understand concepts and guide them in the right direction.

## Style

The illustration style is a derivative of the [GitLab Brand Standards](https://about.gitlab.com/handbook/marketing/corporate-marketing/brand-activation/brand-standards/#brand-resources), and is designed to work both in light and dark UI.

### Fill

A solid fill gives an element visual weight, emphasis, and dimension.

- Three steps for each hue provides a base (default) along with a highlight and shadow so that individual objects can have dimension and separate objects of the same hue can come forward or recede by comparison to each other.
- Transparency is used for fills, containers, and backgrounds where the object recedes in both light/dark UI. The transparency allows it to blend with the background so the effect is similar regardless of theme.

<div class="figma-embed" aria-label="Illustration color palette" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Fpage-id%3D947%253A12232%26node-id%3D947%253A12407%26viewport%3D241%252C48%252C1%26scaling%3Dmin-zoom%26starting-point-node-id%3D947%253A12407%26hotspot-hints%3D0" allowfullscreen></iframe>
</div>

### Stroke

A stroke encapsulates an element, whether filled or not, and is used for line work.

- The default stroke is **4px**, but **2px** can be used for the occasional detail.
- Similar to a transparent fill, a transparent stroke blends with the background so receding effect is similar regardless of theme.
- A dashed stroke makes connections and infers empty or unpopulated elements.
- A line uses rounded caps, unless doing so would misrepresent the object.
- Round line joins are optional and also depend on the object.
- Align the stroke to the center or inside of the shape.

<div class="figma-embed" aria-label="Stroke color palette and stules" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Fpage-id%3D947%253A12232%26node-id%3D1018%253A12285%26viewport%3D241%252C48%252C1%26scaling%3Dmin-zoom%26starting-point-node-id%3D1018%253A12285%26hotspot-hints%3D0" allowfullscreen></iframe>
</div>

### Shape

An illustration is primarily comprised of geometric shapes. Use circles, rectangles, squares, and triangles for base elements, with lines and organic shapes for details as needed.

### Border radius

- Use a multiple of **2px** to keep values even when scaling up or down between grid sizes.
- Use minimal or no border radius to represent sharp corners, and anywhere between **4px** to **12px** for softer, rounded objects.

### Content

- An object should represent its most modern and recognizable form. For example, use a mobile phone instead of a rotary phone.
- Typography should be avoided in illustration because it isn't accessible for all users and can't be translated. It is acceptable to include 1–2 characters to represent text or language in general. For example, a character on a keyboard.
- The tanuki should only be used for marketing illustration and assets that directly represent GitLab in the product, like a GitLab bot avatar.

### Grid and size

- An illustration can use either a large [isometric grid](#isometric-grid), or one of the three [focal point grid](#focal-point-grid) sizes to align with the use case.
- Illustration dimensions don’t include padding and elements should go to the edge of the design frame, relying on CSS classes for padding.

#### Isometric grid

An isometric grid provides depth to concepts which can convey process, relationship, and parts. An isometric illustration isn't necessarily more complex, it's just leveraging dimension as an added attribute.

- **Large** (only): **288px × 288px** frame size. Used for feature promotion.
- An isometric grid uses guides that are rotated **30º** from the horizontal plane.
- Three subgrids are available to handle different angles: ramp left, ramp right, and ramp forward.

<figure class="figure" role="figure" aria-label="Isometric grid and subgrids">
  <img class="figure-img p-a-5" src="/img/illus-isometric.svg" alt=" and subgrids lines and subgrid lines" role="img" />
  <figcaption class="figure-caption">Isometric grid and subgrids</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Isometric illustration example">
  <img class="figure-img p-a-5" src="/img/illus-isometric-example.svg" alt="Document scan text example" role="img" />
  <figcaption class="figure-caption">Isometric illustration example</figcaption>
</figure>

#### Focal point grid

A rule of thirds grid is a simple way to place elements with dedicated focal points.

- **Large**: **288px × 288px** frame size. Used for feature promotion.
- **Medium**: **144px × 144px** frame size. Used for empty states, error states, and banners.
- **Small** ("spot" illustration): **72px × 72px** frame size. Used when space is limited.

<figure class="figure" role="figure" aria-label="Focal point grid sizes: large, medium, and small">
  <img class="figure-img p-a-5" src="/img/illus-focal-point.svg" alt="Large, medium, and small focal point grid sizes" role="img" />
  <figcaption class="figure-caption">Focal point grid sizes: large, medium, and small</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Focal point grid example">
  <img class="figure-img p-a-5" src="/img/illus-focal-point-example.svg" alt="Example medium illustration that uses the focal point grid" role="img" />
  <figcaption class="figure-caption">Focal point grid example</figcaption>
</figure>

## Resources

- [View the illustration file in Figma](https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA/WIP%3A-Illustration-library?node-id=441%3A2008).
- [Go to the SVG Previewer](http://gitlab-org.gitlab.io/gitlab-svgs/illustrations) to view all of the current illustrations.

Todo: Add link to contribution guide in the SVG project.
