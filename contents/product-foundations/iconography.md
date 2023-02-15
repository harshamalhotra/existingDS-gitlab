---
name: Iconography
tabs:
  - route: section-slug-icons
    title: Icon explorer (beta)
---

One of our values is to create a distinct GitLab personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style.

Icons take inspiration from elements expressed as part of the GitLab brand.

- **Balance and structure.** Regardless of symmetry, icons should feel complete and in control. Icons act as visual anchors or guides and should be designed to either stop or direct the eye.
- **Modern and approachable.** Border radius and open counters help our icons combine beauty and utility with a touch of personality.
- **Crisp and intentional.** Icon elements should have purpose and place.
- **Simple and concise.** Design to minimize time to comprehension. In the same way the concept of “invisible UI” moves a user to task completion without getting hung up on visual elements or controls, icons should move users to concept and action without extra time spent deciphering a metaphor.

## Layout

### Pixel grid

Icon elements are aligned to the pixel grid. Elements within an icon, such as curves or diagonal lines, won’t always align exactly to the grid, and in these instances it’s better for the element to feel natural rather than forced.

Alignment considerations for a **1.5px** stroke are covered in the [Strokes](#strokes) section below.

| **Do** | **Don’t** |
| :---: | :---: |
| <figure-img alt="Crisp icon on pixel grid" label="Icon outside edges aligned to the pixel grid" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Blurry icon on pixel grid" label="Icon edges not horizontally aligned to the pixel grid<" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

### 16 pixel grid

The **16px** icon size is the default, and most icons are created at this size. Icons that use a **16×16 pixel** base grid have a **14px** live area surrounded on all sides by **1px** for padding and optical sizing.

<div class="row">
  <div class="col col-33">
    <figure-img alt="16px icon grid at 100% scale" label="16 pixel icon at 100%" src="/img/icons-100-scale.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Icon live area" label="Grid 14×14 pixel live area" src="/img/icons-grid-layout.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Icon padding" label="1px icon padding" src="/img/icons-padding.svg"></figure-img>
  </div>
</div>

### 12 pixel grid

The **12px** icon size is used for small, complimentary icons commonly used to indicate status where text or other context is available. Due to their small target size, these icons aren’t interactive unless paired with text or within a larger element. Icons that use a **12×12 pixel** base grid have a **10px** live area surrounded on all sides by **1px** for padding and optical sizing.

<div class="row">
  <div class="col col-33">
    <figure-img alt="12px icon grid at 100% scale" label="12 pixel icon at 100%" src="/img/icons-12-100-scale.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Icon live area" label="Grid 10×10 pixel live area" src="/img/icons-12-grid-layout.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Icon padding" label="1px icon padding" src="/img/icons-12-padding.svg"></figure-img>
  </div>
</div>

### Scaling

In nearly all instances icons should be used at the size they were created at and not scaled. This keeps the icons crisp and consistent in the UI.

## Keylines

A keyline grid is a set of guides to help maintain [optical balance](#optical-balance) (visual weight) between icons. Use it as a starting point and guide, but not a hard rule. There are four basic shapes that represent common icon scale and placement. Squares can fill the live area, while circles and rectangles can extend into the padding, which allows icons to be proportionately consistent.

<figure-img alt="Icon keyline grid" label="Keyline grid" src="/img/icons-keylines.svg"></figure-img>

<figure-img alt="Icon keyline shapes" label="Keyline icon shapes" src="/img/icons-keyline-shapes.svg"></figure-img>

<figure-img alt="Icon keyline examples" label="Keyline icon examples" src="/img/icons-keyline-examples.svg"></figure-img>

### Optical balance

In regard to icons, optical balance is the perceived size of an icon relative to other icons. The more that icons feel balanced with one another, the easier it will be to rely on other characteristics to provide visual hierarchy and flow in the UI. Icons that are not balanced can draw unnecessary attention to themselves, or seemingly disappear in the mix of other elements.

Here are a few considerations when trying to achieve optical balance.

- More detail equals more visual weight. As the *density* of the graphic increases, it will draw more attention. Try offsetting this by scaling detailed icons down.
- Rotate narrow icons 45º, which allows them to scale and have more visual weight.
- At times, optically adjusting an icon may mean less adherence to the grid or other spacing rules to the benefit of balance or clarity.

## Strokes

All icons use a **1.5px** stroke weight. Lines use rounded caps, unless doing so would misrepresent the metaphor, or if you are trying to infer depth or element clipping. Round line joins are optional and also depend on the metaphor. For example, a checkmark is one continuous object and the round line infers fluidity, whereas clock hands are two joined objects and a miter join defines a joint.

A **1.5px** stroke:

- Is more balanced with other UI elements and is similarly weighted to regular system font weights at body text sizes.
- Provides more room to convey abstract concepts and metaphors by allowing for both more detail where needed and extra space between elements for clarity.
- Works well in both light and dark UI.

Since icons use a **1.5px** stroke, there are a few alignment considerations:

- A stroke is either aligned to inside or center.
- Outside edges of closed shapes should align to whole pixels.
- A line should have at least one edge aligned to a whole pixel. This won't always be possible when two lines comprise an element that has to be centered within the grid or to other elements, but the line end points should always terminate on a whole pixel.

<div class="row">
  <div class="col col-33">
    <figure-img alt="Icon stroke settings" label="1.5px stroke weight and rounded stroke caps" src="/img/icons-strokes.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Line with rounded join" label="Line with round join" src="/img/icons-line-round-join.svg"></figure-img>
  </div>
  <div class="col col-33">
    <figure-img alt="Line with mitar (square) join" label="Line with mitar join" src="/img/icons-line-miter.svg"></figure-img>
  </div>
</div>

## Border radius

To have parity between inside and center aligned strokes with a **1.5px** weight, the border radius options are:

| **Stroke aligned inside** | **Stroke aligned center** |  **Result** |
| ------ | ------ | ------ |
| 0px | 0px | <img alt="0 border radius example" role="img" src="/img/icons-0-inside.svg" /> |
| 1px | 0.25px |  <img alt="1 pixel border radius example" role="img" src="/img/icons-1-inside.svg" /> |
| 2px (default) | 1.25px |  <img alt="2 pixel border radius example" role="img" src="/img/icons-2-inside.svg" /> |
| 3px | 2.25px |  <img alt="3 pixel border radius example" role="img" src="/img/icons-3-inside.svg" /> |

Clarity should always override consistency, and the guides are flexible when necessary to best represent the metaphor or parts of it.

<figure-img alt="Icons with 0px, 1px, 2px, 4px, 6px, and 100% border radius options" label="Border radius options, 2px is default" src="/img/icons-border-radius.svg"></figure-img>

<div class="row">
  <div class="col col-50">
    <figure-img alt="Icon with 2px and 4px border radius" label="A combination of 2px and 4px border radius helps the elements fit together better." src="/img/icons-border-radius-example.svg"></figure-img>
  </div>
  <div class="col col-50">
    <figure-img alt="Icon with 0px and 4px border radius" label="A combination of 0px and 4px best represents the subject matter." src="/img/icons-border-radius-alternates.svg"></figure-img>
  </div>
  <div class="col col-50">
    <figure-img alt="Icon with 1px border radius" label="A 1px border radius works well for angles that are less than 90º." src="/img/icons-border-radius-angle.svg"></figure-img>
  </div>
  <div class="col col-50">
    <figure-img alt="Icon with no border radius" label="This icon does not use a border radius because in doing so features critical to the meaning would be lost." src="/img/icons-border-radius-none.svg"></figure-img>
  </div>
</div>

## Angles

Use increments of **15º** to achieve consistency throughout the icon set. Angles can be combined in an icon to create more dynamic shapes and movement, while remaining consistent as a whole.

<figure-img alt="Angle settings" label="15º angle increments" src="/img/icons-angles.svg"></figure-img>

## Shape

Sharp interior angles help icon clarity. A **1px** gap between elements is acceptable, but **2px** is preferred when possible — consistency will always help the icons feel more unified.

<figure-img alt="Icon shape settings" label="Icon with sharp interior angles and at least 1px spacing between elements" src="/img/icons-shape-corners.svg"></figure-img>

Design most icons in 2D. Depth and perspective should only be used when it’s absolutely necessary to clarify a concept, and even then **2px** strokes are used to add dimension instead of larger fill areas.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="3D box icon" label="Icon with depth clarifies concept" src="/img/icons-depth-do-2.svg"></figure-img>| <figure-img alt="Square icon" label="Icon with no depth is too vague" src="/img/icons-depth-dont-2.svg"></figure-img> |

Simplify icons for clarity and legibility, avoiding embellishment or unnecessary details.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Simple house icon" label="Simplified icon" src="/img/icons-shape-simple.svg"></figure-img> | <figure-img alt="Complex house icon" label="Overly complex icon" src="/img/icons-shape-complex.svg"></figure-img> |

Remove or close counters that are less than `1px` to avoid distracting artifacts.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Pencil icon" label="Icon with no small counters" src="/img/icons-counter-do.svg"></figure-img> | <figure-img alt="Pencil icon" label="Icon with small, distracting counter" src="/img/icons-counter-dont.svg"></figure-img> |

Use square caps and shape edges to directly indicate clipping or layering. Round should still be used when breaks and intersections are more stylistic.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Duplicate icon" label="Icon with square clipped cap" src="/img/icons-clip-do.svg"></figure-img> | <figure-img alt="Duplicate icon" label="Icon with round clipped cap" src="/img/icons-clip-dont.svg"></figure-img> |

## Concepts

### Design to the concept

The guidelines are helpful constraints to help focus on the *concept* without overthinking *style*. On the other hand, it’s critical to not let the same guidelines negatively impact a metaphor. A great example is a shield icon. While the default border radius is `2px`, using that here could make the icon feel too friendly, when really we want to emphasize robust and accurate security.

In another more literal example, an icon representing tabular data should have crisp edges. Why? Because the UI of tables in the product have crisp, 90º angles. This creates a 1:1 relationship between the icon and the object it represents, making it much easier for users to infer the intended meaning.

As with all of the guidelines, there will always be some level of subjectivity. Use your best judgement, and test when necessary.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Shield icon" label="Crisp shield icon" src="/img/icons-concept-style-do.svg"></figure-img>| <figure-img alt="Shield icon" label="Soft shield icon" src="/img/icons-concept-style-dont.svg"></figure-img> |
| <figure-img alt="Table icon" label="Literal table icon" src="/img/icons-concept-style-do-2.svg"></figure-img> | <figure-img alt="Table icon" label="Rounded table icon" src="/img/icons-concept-style-dont-2.svg"></figure-img> |

### Icon meaning

GitLab icons should reflect positive or neutral metaphors. Avoid concepts related to violence or that generally have a negative meaning. Ask yourself, will this icon benefit all users? Is there any potential that its meaning could be confusing or cause anxiety? If there's any doubt, explore other options that are at least neutral in meaning.

#### Specific meaning, specific icon

Using an icon consistently to represent a single concept or action helps with overall learnability for a user. For example, the icon used to represent a feature or an object shouldn't be used to refer to other unrelated concepts or actions in the UI.

Avoid using different icons to refer to one specific meaning. For example, [pencil](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~pencil) should be used for editing or updating an item, rather than [pencil-square](https://gitlab-org.gitlab.io/gitlab-svgs/?q=pencil-square) which is used for composing.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Menu icon" label="Icon represents “menu”" src="/img/icons-concept-dup.svg"></figure-img> | <figure-img alt="Menu icon" label="menu icon used for “list”" src="/img/icons-concept-dup-dont.svg"></figure-img> |

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Full screen icon" label="Correct icon for “full screen”" src="/img/icons-concept-meaning-do.svg"></figure-img> | <figure-img alt="Alternate full screen icon" label="Different icon for “full screen”" src="/img/icons-concept-meaning-dont.svg"></figure-img> |

#### Icons with multiple meanings

There are, however, several icons whose design doesn't match a single metaphor, but multiple. In these cases, meaning must be provided in context. Examples of these cases are: 

- An '×' icon in a close button on a modal can also represent a failed status.
- An 'eye' icon to indicate a confidential issue can also be used to show a password, or to view a preview of an object.
- A 'chevron' icon in a [dropdown button](/components/button#dropdown-buttons) can also represent the expanded state of an [accordion](/components/accordion).

In addition to context, ensure that `aria-label` attributes and/or tooltips are used to communicate the icon meaning.

#### Unique metaphors and concepts

If an icon is not accompanied by a label or its use isn't clear based on the immediately surrounding context, then provide a quick explanation in a tooltip.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Got hook icon with label and tooltip" label="Icon meaning is available" src="/img/icons-concept-clear.svg"></figure-img> | <figure-img alt="Git hook icon" label="Is that a smiling cat?" src="/img/icons-concept-unclear.svg"></figure-img> |

#### Modern metaphors

Try to avoid potentially antiquated concepts, especially when something more modern is recognizable.

| **Do** | **Don’t** |
| --- | --- |
| <figure-img alt="Flat screen display with play symbol" label="Flat screen display" src="/img/icons-concept-new.svg"></figure-img> | <figure-img alt="Tube TV with antenna" label="Old tube TV" src="/img/icons-concept-old.svg"></figure-img> |

### Naming

Existing [GitLab SVGs icons](http://gitlab-org.gitlab.io/gitlab-svgs/) haven't historically followed a naming convention, so you may encounter different patterns until we're able to address them individually. Use the following guidelines for new icons:

- When an icon represents a recognizable object, use the name of the object. For example, an icon of a pencil that represents editing is named 'pencil'.
- When an icon represents an abstract metaphor or concept, choose a name that best represents the concept or use case. For example, an icon made of stacked shapes to represent an epic is named 'epic'.
- The file name should be lowercase and use hyphens as a separator between terms. For example, 'cloud-gear'.
- Icons in the [GitLab Product Icons](https://www.figma.com/community/file/1051267829358377715) Figma file contain keywords and usage details in the component description (each icon is a component) to help unite naming with use and concepts. We hope to eventually have similar capabilities in the [GitLab SVGs](http://gitlab-org.gitlab.io/gitlab-svgs/) website. 

## Usage

Icons are used to stress visual weight for elements with a high priority or to explain the universal knowledge in a simple way.

The level of visual weight from heavy to light is: **Icon + label > Icon > label.**

### Referencing icons in code

For more information on how icons are referenced in the product, go to [GitLab Docs - Icons and SVG Illustrations](https://docs.gitlab.com/ee/development/fe_guide/icons.html).

## Resources

- You can view all of the current icons at the [GitLab SVGs](http://gitlab-org.gitlab.io/gitlab-svgs/) site.
- View the [GitLab Product Icons](https://www.figma.com/community/file/1051267829358377715/GitLab-Product-Icons) Figma file.
