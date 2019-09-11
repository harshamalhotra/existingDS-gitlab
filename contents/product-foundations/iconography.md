---
name: Iconography
---

One of our values is to create a distinct GitLab personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style.

Icons take inspiration from elements expressed by our tanuki logomark.

<img class="d-block a-center m-b-7" src="/img/icons-tanuki.svg" alt="Tanuki logomark" role="img" />

1. **Balance and structure.** Regardless of symmetry, icons should feel complete and in control. Icons act as visual anchors or guides and should be designed to either stop or direct the eye.
1. **Modern and approachable.** Border radius and open counters help our icons combine beauty and utility with a touch of personality.
1. **Crisp and intentional.** Icon elements should have purpose and place.
1. **Simple and concise.** Design to minimize time to comprehension. In the same way the concept of “invisible UI” moves a user to task completion without getting hung up on visual elements or controls, icons should move users to concept and action without extra time spent deciphering a metaphor.

## Layout

Icons use a **16×16 pixel** base grid with **14px** live area and **1px** reserved for padding and optical sizing. There are also **8px** and **24px** icons that leverage their own grids instead of scaling from the **16px** base.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Icon at 100%">
      <img class="figure-img" src="/img/icons-100-scale.svg" alt="Icon grid at 100% scale" role="img" />
      <figcaption class="figure-caption">Icon at 100%</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Grid 14×14 pixel live area">
      <img class="figure-img" src="/img/icons-grid-layout.svg" alt="Icon live area" role="img" />
      <figcaption class="figure-caption">Grid 14×14 pixel live area</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="1px icon padding">
      <img class="figure-img" src="/img/icons-padding.svg" alt="Icon padding" role="img" />
      <figcaption class="figure-caption">1px icon padding</figcaption>
    </figure>
  </div>
</div>

Icon elements are aligned to the pixel grid to avoid subpixel antialiasing and be as crisp as possible on all screens and resolutions. Elements within an icon, such as curves or diagonal lines, won’t always align exactly to the grid, and in these instances it’s better for the element to feel natural rather than forced.

| **Do** | **Don’t** |
| :---: | :---: |
| <figure class="figure" role="figure" aria-label="Icon aligned to the pixel grid"><img class="figure-img" src="/img/icons-pixel-grid-do.svg" alt="Crisp icon on pixel grid" role="img" /><figcaption class="figure-caption">Icon aligned to the pixel grid</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon not aligned to the pixel grid"><img class="figure-img" src="/img/icons-pixel-grid-dont.svg" alt="Blurry icon on pixel grid" role="img" /><figcaption class="figure-caption">Icon not aligned to the pixel grid</figcaption></figure> |

Todo: Add specs for additional icon sizes

## Keylines

A keyline grid is a set of guides to help maintain [optical balance](#optical-balance) (visual weight) between icons. Use it as a starting point and guide, but not a hard rule. There are four basic shapes that represent common icon scale and placement. Squares can fill the live area, while circles and rectangles can extend into the padding, which allows icons to be proportionately consistent.

<figure class="figure" role="figure" aria-label="Keyline grid">
  <img class="figure-img" src="/img/icons-keylines.svg" alt="Icon keyline grid" role="img" />
  <figcaption class="figure-caption">Keyline grid</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Keyline icon shapes">
  <img class="figure-img" src="/img/icons-keyline-shapes.svg" alt="Icon keyline shapes" role="img" />
  <figcaption class="figure-caption">Keyline icon shapes</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Keyline icon examples">
  <img class="figure-img" src="/img/icons-keyline-examples.svg" alt="Icon keyline examples" role="img" />
  <figcaption class="figure-caption">Keyline icon examples</figcaption>
</figure>

### Optical balance

In regard to icons, optical balance is the perceived size of an icon relative to other icons. The more that icons feel balanced with one another, the easier it will be to rely on other characteristics to provide visual hierarchy and flow in the UI. Icons that are not balanced can draw unnecessary attention to themselves, or seemingly disappear in the mix of other elements.

Here are a few considerations when trying to achieve optical balance.

* More detail equals more visual weight. As the *density* of the graphic increases, it will draw more attention. Try offsetting this by scaling detailed icons down.
* Rotate narrow icons 45º, which allows them to scale and have more visual weight.
* At times, optically adjusting an icon may mean less adherence to the grid or other spacing rules to the benefit of balance or clarity.

## Strokes

All icons use a **2px** stroke weight and are most commonly aligned to the inside of shapes. Lines use rounded caps, unless doing so would misrepresent the metaphor, or if you are trying to infer depth or element clipping. Round line joins are optional and also depend on the metaphor. For example, a checkmark is one continuous object and the round line infers fluidity, whereas clock hands are two joined objects and a miter join defines a joint.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="2px stroke weight and rounded stroke caps">
      <img class="figure-img" src="/img/icons-strokes.svg" alt="Icon stroke settings" role="img" />
      <figcaption class="figure-caption">2px stroke weight and rounded stroke caps</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Line with round join">
      <img class="figure-img" src="/img/icons-line-round-join.svg" alt="Line with rounded join" role="img" />
      <figcaption class="figure-caption">Line with round join</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Line with mitar join">
      <img class="figure-img" src="/img/icons-line-mitar.svg" alt="Line with mitar (square) join" role="img" />
      <figcaption class="figure-caption">Line with miter join</figcaption>
    </figure>
  </div>
</div>

## Border radius

The default border radius is **2px**, with **0px**, **1px**, or multiples of **2px** allowed to better represent the metaphor or parts of it. Clarity should always override consistency, and the guides are flexible when necessary.

<figure class="figure" role="figure" aria-label="Border radius options, 2px is default">
  <img class="figure-img" src="/img/icons-border-radius.svg" alt="Icons with 0px, 1px, 2px, 4px, 6px, and 100% border radius options" role="img" />
  <figcaption class="figure-caption">Border radius options, 2px is default</figcaption>
</figure>

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="A combination of 2px and 4px border radius helps the elements fit together better.">
      <img class="figure-img" src="/img/icons-border-radius-example.svg" alt="Icon with 2px and 4px border radius" role="img" />
      <figcaption class="figure-caption">A combination of 2px and 4px border radius helps the elements fit together better.</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="A combination of 0px and 4px best represents the subject matter.">
      <img class="figure-img" src="/img/icons-border-radius-alternates.svg" alt="Icon with 0px and 4px border radius" role="img" />
      <figcaption class="figure-caption">A combination of 0px and 4px best represents the subject matter.</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="A 1px border radius works well for angles that are less than 90º.">
      <img class="figure-img" src="/img/icons-border-radius-angle.svg" alt="Icon with 1px border radius" role="img" />
      <figcaption class="figure-caption">A 1px border radius works well for angles that are less than 90º.</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="This icon does not use a border radius because in doing so features critical to the meaning would be lost.">
      <img class="figure-img" src="/img/icons-border-radius-none.svg" alt="Icon with no border radius" role="img" />
      <figcaption class="figure-caption">This icon does not use a border radius, because doing so risks losing features critical to the icon’s meaning.</figcaption>
    </figure>
  </div>
</div>

## Angles

Use increments of **15º** to achieve consistency throughout the icon set. Angles can be combined in an icon to create more dynamic shapes and movement, while remaining consistent as a whole.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="15º angle increments">
      <img class="figure-img" src="/img/icons-angles.svg" alt="Angle settings" role="img" />
      <figcaption class="figure-caption">15º angle increments</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Icon with multiple angles">
      <img class="figure-img" src="/img/icons-angles-example.svg" alt="Icon with multiple angles" role="img" />
      <figcaption class="figure-caption">Icon with multiple angles</figcaption>
    </figure>
  </div>
</div>

## Shape

Sharp interior angles help icon clarity. A **1px** gap between elements is acceptable, but **2px** is preferred when possible — consistency will always help the icons feel more unified.

<figure class="figure" role="figure" aria-label="Icon with sharp interior angles and at least 1px spacing between elements">
  <img class="figure-img" src="/img/icons-shape-corners.svg" alt="Icon shape settings" role="img" />
  <figcaption class="figure-caption">Icon with sharp interior angles and at least 1px spacing between elements</figcaption>
</figure>

Design most icons in 2D. Depth and perspective should only be used when it’s absolutely necessary to clarify a concept, and even then **2px** strokes are used to add dimension instead of larger fill areas.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon with no depth"><img class="figure-img" src="/img/icons-depth-do.svg" alt="2D icon" role="img" /><figcaption class="figure-caption">Icon with no depth</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon with unnecessary depth"><img class="figure-img" src="/img/icons-depth-dont.svg" alt="3D icon" role="img" /><figcaption class="figure-caption">Icon with unnecessary depth</figcaption></figure> |

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon with depth clarifies concept"><img class="figure-img" src="/img/icons-depth-do-2.svg" alt="3D box icon" role="img" /><figcaption class="figure-caption">Icon with depth clarifies concept</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon with no depth is too vague"><img class="figure-img" src="/img/icons-depth-dont-2.svg" alt="Square icon" role="img" /><figcaption class="figure-caption">Icon with no depth is too vague</figcaption></figure> |

Simplify icons for clarity and legibility, avoiding embellishment or unnecessary details.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Simplified icon"><img class="figure-img" src="/img/icons-shape-simple.svg" alt="Simple house icon" role="img" /><figcaption class="figure-caption">Simplified icon</figcaption></figure> | <figure class="figure" role="figure" aria-label="Overly complex icon"><img class="figure-img" src="/img/icons-shape-complex.svg" alt="Complex house icon" role="img" /><figcaption class="figure-caption">Overly complex icon</figcaption></figure> |

Close counters that are less than `1px` to avoid distracting artifacts.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon with no small counters"><img class="figure-img" src="/img/icons-counter-do.svg" alt="Pencil icon" role="img" /><figcaption class="figure-caption">Icon with no small counters</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon with small, distracting counter"><img class="figure-img" src="/img/icons-counter-dont.svg" alt="Pencil icon" role="img" /><figcaption class="figure-caption">Icon with small, distracting counter</figcaption></figure> |

Use square caps and shape edges to directly indicate clipping or layering. Round should still be used when breaks and intersections are more stylistic.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon with square clipped cap"><img class="figure-img" src="/img/icons-clip-do.svg" alt="Duplicate icon" role="img" /><figcaption class="figure-caption">Icon with square clipped cap</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon with round clipped cap"><img class="figure-img" src="/img/icons-clip-dont.svg" alt="Duplicate icon" role="img" /><figcaption class="figure-caption">Icon with round clipped cap</figcaption></figure> |

## Concepts

### Design to the concept

The guidelines are helpful constraints to help focus on the *concept* without overthinking *style*. On the other hand, it’s critical to not let the same guidelines negatively impact a metaphor. A great example is a shield icon. While the default border radius is `2px`, using that here could make the icon feel too friendly, when really we want to emphasize robust and accurate security.

In another more literal example, an icon representing tabular data should have crisp edges. Why? Because the UI of tables in the product have crisp, 90º angles. This creates a 1:1 relationship between the icon and the object it represents, making it much easier for users to infer the intended meaning.

As with all of the guidelines, there will always be some level of subjectivity. Use your best judgement, and test when necessary.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Crisp shield icon"><img class="figure-img" src="/img/icons-concept-style-do.svg" alt="Shield icon" role="img" /><figcaption class="figure-caption">Crisp shield icon</figcaption></figure> | <figure class="figure" role="figure" aria-label="Soft shield icon"><img class="figure-img" src="/img/icons-concept-style-dont.svg" alt="Shield icon" role="img" /><figcaption class="figure-caption">Friendly shield icon</figcaption></figure> |
| <figure class="figure" role="figure" aria-label="Literal table icon"><img class="figure-img" src="/img/icons-concept-style-do-2.svg" alt="Table icon" role="img" /><figcaption class="figure-caption">Literal table icon</figcaption></figure> | <figure class="figure" role="figure" aria-label="Rounded table icon"><img class="figure-img" src="/img/icons-concept-style-dont-2.svg" alt="Table icon" role="img" /><figcaption class="figure-caption">Rounded table icon</figcaption></figure> |

### Icon meaning

Don’t use one icon to refer to multiple meanings. In some cases, there will still be areas in the UI where meaning will have to be inferred from context; for example, a × symbol may be used for closing a modal and at the same time represent a failed pipeline. In these instances, do everything possible to differentiate the icons.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon represents “podcast”"><img class="figure-img" src="/img/icons-concept-dup.svg" alt="Podcast icon" role="img" /><figcaption class="figure-caption">Icon represents “podcast”</figcaption></figure> | <figure class="figure" role="figure" aria-label="Podcast icon used for “messages”"><img class="figure-img" src="/img/icons-concept-dup-dont.svg" alt="Podcast icon" role="img" /><figcaption class="figure-caption">Podcast icon used for “messages”</figcaption></figure> |

Don’t use different icons to refer to one specific meaning.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Correct icon for “full screen”"><img class="figure-img" src="/img/icons-concept-meaning-do.svg" alt="Full screen icon" role="img" /><figcaption class="figure-caption">Correct icon for “full screen”</figcaption></figure> | <figure class="figure" role="figure" aria-label="Different icon for “full screen”"><img class="figure-img" src="/img/icons-concept-meaning-dont.svg" alt="Alternate full screen icon" role="img" /><figcaption class="figure-caption">Different icon for “full screen”</figcaption></figure> |

Don’t use an icon to explain a meaning which is not straight-forward. If an icon is not accompanied by a label, provide a quick explanation for users in a tooltip.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon meaning is available"><img class="figure-img" src="/img/icons-concept-clear.svg" alt="Got hook icon with label and tooltip" role="img" /><figcaption class="figure-caption">Icon meaning is available</figcaption></figure> | <figure class="figure" role="figure" aria-label="Is that a smiling cat?"><img class="figure-img" src="/img/icons-concept-unclear.svg" alt="Git hook icon" role="img" /><figcaption class="figure-caption">Is that a smiling cat?</figcaption></figure> |

### Modern metaphors

Try to avoid potentially antiquated concepts, especially when something more modern is recognizable.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Flat screen TV"><img class="figure-img" src="/img/icons-concept-new.svg" alt="Flat screen TV with play symbol" role="img" /><figcaption class="figure-caption">Flat screen TV</figcaption></figure> | <figure class="figure" role="figure" aria-label="Old tube TV"><img class="figure-img" src="/img/icons-concept-old.svg" alt="Tube TV with antenna" role="img" /><figcaption class="figure-caption">Old tube TV</figcaption></figure> |

## Icons with other elements

Todo: Add notes on aligning icons to other elements

Todo: Add image examples

Don’t frequently use the combination of an icon and a label. Use the combination only for the elements with high priority. For example, we use an icon + a label for the contextual navigation.

| **Do** | **Don’t** |
| --- | --- |
| Todo: Add example | Todo: Add example |

## Icon viewer

You can view all of the current icons in GitLab at the following link: [GitLab SVGs](http://gitlab-org.gitlab.io/gitlab-svgs/)

## Usage

Icons are used to stress visual weight for elements with a high priority or to explain the universal knowledge in a simple way.

The level of visual weight from heavy to light is: **Icon + label > Icon > label.**

Todo: Add live component block with code example

### Referencing icons in code

For more information on how icons are referenced in the product, go to [GitLab Docs - Icons and SVG Illustrations](https://docs.gitlab.com/ee/development/fe_guide/icons.html).
