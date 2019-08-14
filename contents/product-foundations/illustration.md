---
name: Illustration
---

One of our design goals is to convey GitLab’s distinct personality through illustration that is aesthetically refined, visually consistent, and reflective of our particular sense of style.

Illustrations should visually support topics and goals within context, complementing associated content and making it easier to quickly understand. For accessibility reasons, we don’t use illustrations to replace content.

## Principles

1. **Be simple.** For clarity, we use simple and specific elements to create our illustrations.
1. **Be optimistic.** We take an open-minded, positive, and friendly approach. Those values are reflected in our illustrations with a light and airy feel.
1. **Be helpful.** Our illustrations help users to understand concepts and guide them in the right direction. Illustrations are supportive, so they should be obvious but not comprehensive, focusing on impressions over complexity.

## Style

### Color

For consistency, choose colors from the following palette.

| Orange | Purple | Neutral |
| -------- | -------- | -------- |
| <div class="color-overview p-a-3" style="background-color:#fc6d26;"><span class="variable f-inverted">Orange</span> <span class="hex f-small f-inverted">#fc6d26</span></div> | <div class="color-overview p-a-3" style="background-color:#6e49cb;"><span class="variable f-inverted">Purple</span> <span class="hex f-small f-inverted">#6e49cb</span></div> | <div class="color-overview p-a-3" style="background-color:#a7a7a7;"><span class="variable">$gray-500</span> <span class="hex f-small">#a7a7a7</span></div> |
| <div class="color-overview p-a-3" style="background-color:#f4c6ac;"><span class="variable">+60% White</span> <span class="hex f-small">#f4c6ac</span></div> | <div class="color-overview p-a-3" style="background-color:#c2b7e6;"><span class="variable">+60% White</span> <span class="hex f-small">#c2b7e6</span></div> | <div class="color-overview p-a-3" style="background-color:#dfdfdf;"><span class="variable">$gray-200</span> <span class="hex f-small">#dfdfdf</span></div> |
| <div class="color-overview p-a-3" style="background-color:#f9e2d5;"><span class="variable">+80% White</span> <span class="hex f-small">#f9e2d5</span></div> | <div class="color-overview p-a-3" style="background-color:#e0dbf2;"><span class="variable">+80% White</span> <span class="hex f-small">#e0dbf2</span></div> | <div class="color-overview p-a-3" style="background-color:#f2f2f2;"><span class="variable">$gray-100</span> <span class="hex f-small">#f2f2f2</span></div> |
| <div class="color-overview p-a-3" style="background-color:#fcf0ea;"><span class="variable">+90% White</span> <span class="hex f-small">#fcf0ea</span></div> | <div class="color-overview p-a-3" style="background-color:#efedf8;"><span class="variable">+90% White</span> <span class="hex f-small">#efedf8</span></div> |   |

Todo: Consider palette updates. e.g., percentage of base swatch + white options.

### Shape

Illustrations are primarily comprised of geometric shapes. Use circles, rectangles, squares, and triangles for base elements, with lines and organic shapes for details as needed. Avoid typography or tanuki in illustrations.

<figure class="figure" role="figure" aria-label="Basic geometric shapes">
  <img class="figure-img p-a-5" src="/img/illus-shape.svg" alt="square, rectangle, triangle, circle" role="img" />
  <figcaption class="figure-caption">Basic geometric shapes</figcaption>
</figure>

### Strokes

The default stroke is **4px**, but **2px** can be used for smaller details and lines. You can also alternate the stroke weights to emphasize different elements of the illustration, with the heavier stroke providing more emphasis. Lines use rounded caps, unless doing so would misrepresent the object. Round line joins are optional and also depend on the object. When possible, align the stroke to the inside of the shape.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="4px stroke (default), aligned inside">
      <img class="figure-img p-a-5" src="/img/illus-stroke-4px.svg" alt="Shape with 4px stroke" role="img" />
      <figcaption class="figure-caption">4px stroke (default), aligned inside</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="2px stroke, aligned inside">
      <img class="figure-img p-a-5" src="/img/illus-stroke-2px.svg" alt="Shape with 2px stroke" role="img" />
      <figcaption class="figure-caption">2px stroke, aligned inside</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Line with round cap, round join (left), miter join (right)">
      <img class="figure-img p-a-5" src="/img/illus-stroke-round.svg" alt="Lines with round cap and join examples" role="img" />
      <figcaption class="figure-caption">Line with round cap, round join (left), miter join (right)</figcaption>
    </figure>
  </div>
</div>

<figure class="figure" role="figure" aria-label="4px and 2px strokes at 100%">
  <img class="figure-img p-a-5" src="/img/illus-stroke-actual.svg" alt="Strokes at actual size" role="img" />
  <figcaption class="figure-caption">4px and 2px strokes at 100%</figcaption>
</figure>

### Border radius

The default border radius for shapes is **8px**, with **0px**, **4px**, or multiples of **4px** allowed to better represent an object or parts of it. Clarity should always override consistency, and the guides are flexible when necessary.

<figure class="figure" role="figure" aria-label="Border radius options, 8px is default">
  <img class="figure-img p-a-5" src="/img/illus-border-radius.svg" alt="Shapes with 0px, 4px, 8px, and 16px border radius" role="img" />
  <figcaption class="figure-caption">Border radius options, 8px is default</figcaption>
</figure>

### Size

An illustration can be one of three sizes below, depending on the use case. It can scale within a layout, so long as the proportion and aspect ratio remain unchanged; for example, shrinking on smaller screens. Keep details and complexity to a minimum for medium and small “spot” illustrations. Illustration dimensions don’t include padding and should go to the edge of the design artboard, relying on CSS classes for padding.

#### Large

* Dimensions: **430×380px** or less
* Use: Empty states, error pages (for example, a 404 error)

<figure class="figure" role="figure" aria-label="Large illustration">
  <img class="figure-img p-a-5" src="/img/illus-lg.svg" alt="Merge request conversation" role="img" />
  <figcaption class="figure-caption">Large illustration</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Large illustration in vertical layout">
  <img class="figure-img p-t-5 p-b-5" style="max-width:496px;" src="/img/illus-lg-live-v.png" alt="Screenshot featuring large-sized illustration" />
  <figcaption class="figure-caption">Large illustration in vertical layout</figcaption>
</figure>

#### Medium

* Dimensions: **240×160px** or less
* Use: Banner

<figure class="figure" role="figure" aria-label="Medium “spot” illustration">
  <img class="figure-img p-a-5" src="/img/illus-md.svg" alt="Burndown chart" role="img" />
  <figcaption class="figure-caption">Medium “spot” illustration</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Medium “spot” illustration in banner layout">
  <img class="figure-img p-t-5 p-b-5" src="/img/illus-md-live.png" alt="Screenshot featuring medium-sized illustration" />
  <figcaption class="figure-caption">Medium “spot” illustration in banner layout</figcaption>
</figure>

#### Small

* Dimensions **160×90px** or less
* Use: Graphics for explanatory text or status

<figure class="figure" role="figure" aria-label="Small “spot” illustration">  
  <img class="figure-img p-a-5" src="/img/illus-sm.svg" alt="Bookmarked code document" role="img" />
  <figcaption class="figure-caption">Small “spot” illustration</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Small “spot” illustration in layout">
  <img class="figure-img p-t-5 p-b-5" src="/img/illus-sm-live.png" alt="Screenshot featuring small-sized illustration" />
  <figcaption class="figure-caption">Small “spot” illustration in layout</figcaption>
</figure>

## Process

### Layout

Start by determining the size your illustration needs to be (large, medium, small), then use the dimensions listed below, or start with a template from the gitlab-illustration.sketch file.

* Large: **430×380px** or less
* Medium: **240×160px** or less
* Small: **160×90px** or less

Todo: Add link to gitlab-illustration.sketch once it’s approved

### Subpixel antialiasing

Even though we’re working with vector objects, illustrations will still be displayed on screens comprised of pixels. Vector is great for resolution _independence_, but we still want illustrations to look as crisp as possible in the original state. 

Illustration elements are aligned to the pixel grid to avoid subpixel antialiasing and be as crisp as possible on all screens and resolutions. Elements within an illustration, such as curves or diagonal lines, won’t always align exactly to the grid, and in these instances it’s better for the element to feel natural rather than forced.

| **Do** | **Don’t** |
| :---: | :---: |
| <figure class="figure" role="figure" aria-label="Aligned to pixel grid"><img class="figure-img p-a-5" style="max-width:154px;" src="/img/illus-px.png" alt="Crisp illustration" /><figcaption class="figure-caption">Aligned to pixel grid</figcaption></figure> | <figure class="figure" role="figure" aria-label="Not aligned to pixel grid"><img class="figure-img p-a-5" style="max-width:154px;" src="/img/illus-subpx.png" alt="Blurry illustration" /><figcaption class="figure-caption">Not aligned to pixel grid</figcaption></figure> |

### Naming

Illustrations should be named for the concept they represent, and not literally, unless they represent a universal concept — this is different than icon naming. This will make it easier to identify illustrations for concepts and ensure consistent use. Append the file name with the size abbreviation (`-lg`, `-md`, `-sm`).

| **Do** | **Don’t** |
| :---: | :---: |
| <figure class="figure" role="figure" aria-label="`personal-project-sm.svg`"><img class="figure-img p-a-5" src="/img/illus-sm.svg" alt="Bookmarked code document" role="img" /><figcaption class="figure-caption">`personal-project-sm.svg`</figcaption></figure> | <figure class="figure" role="figure" aria-label="`bookmarked-code.svg`"><img class="figure-img p-a-5" src="/img/illus-sm.svg" alt="Bookmarked code document" role="img" /><figcaption class="figure-caption">`bookmarked-code.svg`</figcaption></figure> |

### Optimization

Illustrations should be optimized for their intended use. Illustrations can be animated, themed, or they can simply be static graphics. Use your best judgement when combining shapes or converting a stroke to a path, considering what satisfies the use case and is most performant and future-proof for other uses. GitLab illustrations are always exported as SVG files, and it makes sense that a smaller file size will benefit performance.

A few tips:

* Create illustrations at the intended size (don’t create them larger than needed).
* Simplify shapes and strokes by removing redundant points.
* Sketch can handle simple illustrations just fine, but for something more complex, consider using Adobe Illustrator, Inkscape, Affinity Designer, or Figma.
* [SVGOMG](https://jakearchibald.github.io/svgomg/) can really help decrease file size. Just make sure none of the settings or features are counter to intended use.
* Use the [SVGO Compressor](https://github.com/BohemianCoding/svgo-compressor) plugin when exporting SVG from Sketch.

Todo: Add specific optimization notes for each use case

### Accessibility

It’s critical to ensure our illustrations are accessible. Here are two methods depending on how the illustration is included in the document.

**For SVG as `img src`:**

* Include a relevant `alt` tag.
* Add `role="img"` to prevent browsers from traversing the SVG.

Example:

```
<img src="circle.svg" alt="I’m a plain circle." role="img">
```

**For inline SVG:**

* Within the SVG code add `title` and `desc` (optional) elements. They _must_ be the first nested items within the SVG.
* Add unique IDs to the `title` and `desc`; for example, `<title id="uniqueTitleID">SVG Title</title>`.
* On the `<svg>`, add an `aria-labelledby="uniqueTitleID uniqueDescID"` attribute.
* Lastly, on the `<svg>`, add `role="img"` to prevent browsers from traversing the SVG.

Example:

```
<svg id="circle" viewBox="0 0 64 64" aria-labeledby="circleTitle circleDesc" role="img">
  <title id="circleTitle">Circle</title>
  <desc id="circleDesc">I’m a plain circle.</desc>
  <circle cx="32" cy="32" r="32" fill="#222" fill-rule="evenodd"/>
</svg>
```

For illustrations that are purely decoration and add no value to the content, use `aria-hidden="true"`.

Example:

```
<svg viewBox="0 0 64 64" aria-hidden="true">
  <circle cx="32" cy="32" r="32" fill="#222" fill-rule="evenodd"/>
</svg>
```

### GitLab SVG Project

Todo: Add integration notes and workflow

## Illustration viewer

You can view all of the current illustrations in GitLab at the following link: [GitLab SVGs](http://gitlab-org.gitlab.io/gitlab-svgs/illustrations)
