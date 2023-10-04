---
name: Illustration
foundationLabel: illustration
tabs:
  - route: section-slug-illustrations
    title: Illustration explorer (beta)
---

One of our design goals is to convey GitLab’s distinct personality through illustration that is aesthetically refined, visually consistent, and reflective of our particular sense of style.

<img class="gl-display-block gl-mx-auto gl-mt-7" src="/img/illus-group.svg" alt="Collection of GitLab illustrations" />

## Principles

1. **Be simple.** For clarity, we use simple and specific elements to create our illustrations. We take a "less is more" approach where illustrations are supportive. They should be obvious but not comprehensive, focusing on impression over complexity.
1. **Be optimistic.** We take an open-minded, positive, and friendly approach. Those values are reflected in our illustrations with a light and airy feel.
1. **Be helpful.** Our illustrations help users to understand concepts and guide them in the right direction.

## Efficiency and reuse

Practically, applying the principles gives us more leverage to think of the relationship of illustration to use case as a one-to-many instead of one-to-one. In other words, a single illustration could be used in multiple instances.

For example, a single empty state illustration could be abstracted enough to be used in multiple empty state pages where the visual _impression_ is supported more fully by the content and context. The illustration doesn't have to do all the heavy lifting.

To better support reuse, the [illustration library](https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA/Illustration-library?node-id=0%3A1) in Figma also contains dozens of small illustration components that represent concepts found throughout the product. These small illustrations can be used on their own, or as part of a larger illustration.

<figure-img alt="Illustration elements and components assembled into larger illustration" label="Elements come together as part of a larger illustration." src="/img/illus-reuse.svg"></figure-img>

By combining a multipurpose mindset with reusable components, the time it takes to create a new illustration, and the resulting number of illustrations, should both be reduced. This is a win both for designers and users where time and consistency matters.

## Style

Product illustration style derives from the [GitLab Brand Design marketing illustrations](/brand-design/marketing-illustrations) guidelines. It's designed to work in both light and dark UI by placing most objects in or above containers with solid fills.

Use [brand colors](/brand-design/color) to create continuity with the larger GitLab brand. White, charcoal, and purple are used most frequently; the remaining colors are used to highlight and accent objects within an illustration. Specific uses are listed below.

### Fill

All shapes have a solid fill, or overlap an element with a fill, so that they remain visible against any background color.

- White is used for a majority of fills.
- Purple 01p may be used to highlight the main ‘action’ or emphasis of the illustration.
- Primary oranges and Purple 02p are used sparingly in favor of the secondary palette.
- Secondary purples are used for background fills and muted elements. Note that muted elements will appear much stronger on a dark surface unless place on or over a container with a lighter fill.
- Teals are useful to communicate positive actions or success.
- The remaining colors in the secondary palette are used as highlights, shadows, and accents to differentiate objects within the illustration.

<div class="figma-embed" aria-label="Illustration color palette" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Fpage-id%3D947%253A12232%26node-id%3D947%253A12407%26viewport%3D241%252C48%252C1%26scaling%3Dmin-zoom%26starting-point-node-id%3D947%253A12407%26hotspot-hints%3D0" allowfullscreen></iframe>
</div>

### Stroke

A stroke encapsulates most elements and is used for line work and depicting motion or action.

- All strokes use a **2px** weight and are aligned to the center or inside of the shape.
- A dashed stroke makes connections and conveys empty or unpopulated elements.
- A line uses square caps. Miter line joins are the default, but a bevel can be used if the resulting point is too extreme.
- Charcoal is used for object strokes and small fill areas. Note that these strokes may not be visible on a dark surface and in most cases should overlap a background container.
- Purple 04s can be used on strokes that make connections, depict motion, or represent unpopulated elements.

<div class="figma-embed" aria-label="Stroke color palette and styles" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Fpage-id%3D947%253A12232%26node-id%3D1018%253A12285%26viewport%3D241%252C48%252C1%26scaling%3Dmin-zoom%26starting-point-node-id%3D1018%253A12285%26hotspot-hints%3D0" allowfullscreen></iframe>
</div>

### Shape

An illustration is primarily comprised of geometric shapes. Use circles, rectangles, squares, and triangles for base elements, with lines and organic shapes for details as needed.

There are two container shapes: leaf and round.

<figure-img alt="Example of the leaf and round container shapes, colored with Purple 02s, one of the recommended colors for background fills. The leaf shape is a square with rounded top-right and bottom-left corners. The round shape is a circle." label="Container shapes: leaf and round" src="/img/illus-shapes.svg"></figure-img>

<todo>Define shapes usage, see https://gitlab-org.gitlab.io/gitlab-svgs/illustrations for current exploration.</todo>

### Border radius

- Corners and angles have no border radius by default, but a border radius between **4px** to **16px** can be used for softer, rounded objects.
- When possible, apply a border radius to the bottom right corner of a shape to create an upward sweep and add a bit of personality.

### Content

- An object should represent its most modern and recognizable form. For example, use a mobile phone instead of a rotary phone.
- Typography should be avoided in illustration because it isn't accessible for all users and can't be translated. It is acceptable to include 1–2 characters to represent text or language in general. For example, a character on a keyboard.
- The tanuki should only be used for marketing illustration and assets that directly represent GitLab in the product, like a GitLab bot avatar.

### Grid and size

Using predefined grids and sizes not only helps illustrations feel more consistent and intentional throughout the product, they also add helpful and meaningful constraints to reduce the time it takes to create an illustration.

An illustration can use either a large [isometric grid](#isometric-grid), or one of the four [focal point grid](#focal-point-grid) sizes to align with the use case.

#### Focal point grid

A focal point grid leverages the [rule of thirds](https://en.wikipedia.org/wiki/Rule_of_thirds) to place elements with dedicated focal points. The vertical and horizontal guides divide the frame into nine equal parts. When multiple objects are present, placing them at or near the point of intersection can provide balance and movement.

Not all illustrations will have multiple objects or objects that need to align to an intersection point. Circular grid lines are also provided for centering within the frame.

- **Large**: **288px × 288px** frame size. Used for feature promotion.
- **Medium**: **144px × 144px** frame size. Used for empty states and error states.
- **Small** ("spot" illustration): **72px × 72px** frame size. Used for banners and when space is limited.
- **Extra small**: **36px × 36px** frame size. Used for individual illustration elements that are combined with other elements to form a larger composition, or to connect other elements in the UI.

<figure-img alt="Large, medium, and small focal point grid sizes" label="Focal point grid sizes: large, medium, and small" src="/img/illus-focal-point.svg"></figure-img>

<figure-img alt="Example medium illustration that uses the focal point grid" label="Focal point grid example" src="/img/illus-focal-point-example.svg"></figure-img>

#### Isometric grid

An isometric grid provides depth to concepts which can convey process, relationship, and parts. An isometric illustration isn't necessarily more complex, it's just leveraging dimension as an added attribute.

- **Large** (only): **288px × 288px** frame size. Used for feature promotion.
- An isometric grid uses guides that are rotated **30º** from the horizontal plane.
- Three subgrids are available to handle different angles: ramp left, ramp right, and ramp forward.

<figure-img alt="Isometric grid lines and subgrid lines" label="Isometric grid and subgrids" src="/img/illus-isometric.svg"></figure-img>

<todo>Add isometric example</todo>
#### Size

While an illustration will always be created using one of the grid sizes above, the final output dimensions follow these rules:

- Small illustrations are always output at **72px × 72px**, even if that means there's extra white space in the frame. This helps ensure that when multiple small illustrations are present in the same context they will optically align. [Icons](/product-foundations/iconography) follow a similar approach.
- Large, medium, and extra small illustrations must fill either the width or the height of the frame (or both), and any remaining whitespace must be removed before exporting (frame cropped to artwork) to prevent alignment issues. Use [GitLab UI utility classes](https://unpkg.com/browse/@gitlab/ui@32.45.0/src/scss/utilities.scss) if additional space is needed in a page layout.

## Contribute

Everyone can contribute to GitLab, including our product illustration in Figma Get started with our [contribution guidelines](https://gitlab.com/gitlab-org/gitlab-svgs/-/blob/main/doc/illustration-contribution.md).

## Resources

- [View the illustration file in Figma](https://www.figma.com/file/1ui9w228X0S5WxaD0SRdIA/WIP%3A-Illustration-library?node-id=441%3A2008).
- [Go to the SVG Previewer](http://gitlab-org.gitlab.io/gitlab-svgs/illustrations) to view all of the current illustrations.
- Learn more about [Creating Isometric Art](https://marmoset.co/posts/creating-isometric-art-hexels/).
- Learn more about [Using the Rule of Thirds in Design](https://blog.thenounproject.com/using-the-rule-of-thirds-in-design/) and the [Effective Use of the Rule of Thirds in Design](https://web.archive.org/web/20220411034105/https://www.framer.com/dictionary/rule-of-thirds/).
