---
name: Iconography
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
| <figure class="figure" role="figure" aria-label="Icon aligned to the pixel grid"><img class="figure-img" src="/img/icons-pixel-grid-do.svg" alt="Crisp icon on pixel grid" role="img" /><figcaption class="figure-caption">Icon outside edges aligned to the pixel grid</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon not horizontally aligned to the pixel grid"><img class="figure-img" src="/img/icons-pixel-grid-dont.svg" alt="Blurry icon on pixel grid" role="img" /><figcaption class="figure-caption">Icon edges not horizontally aligned to the pixel grid</figcaption></figure> |

### 16 pixel grid

The **16px** icon size is the default, and most icons are created at this size. Icons that use a **16×16 pixel** base grid have a **14px** live area surrounded on all sides by **1px** for padding and optical sizing.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="16 pixel icon at 100%">
      <img class="figure-img" src="/img/icons-100-scale.svg" alt="16px icon grid at 100% scale" role="img" />
      <figcaption class="figure-caption">16 pixel icon at 100%</figcaption>
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

### 12 pixel grid

The **12px** icon size is used for small, complimentary icons commonly used to indicate status where text or other context is available. Due to their small target size, these icons aren’t interactive unless paired with text or within a larger element. Icons that use a **12×12 pixel** base grid have a **10px** live area surrounded on all sides by **1px** for padding and optical sizing.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="12 pixel icon at 100%">
      <img class="figure-img" src="/img/icons-12-100-scale.svg" alt="12px icon grid at 100% scale" role="img" />
      <figcaption class="figure-caption">12 pixel icon at 100%</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Grid 10×10 pixel live area">
      <img class="figure-img" src="/img/icons-12-grid-layout.svg" alt="Icon live area" role="img" />
      <figcaption class="figure-caption">Grid 10×10 pixel live area</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="1px icon padding">
      <img class="figure-img" src="/img/icons-12-padding.svg" alt="Icon padding" role="img" />
      <figcaption class="figure-caption">1px icon padding</figcaption>
    </figure>
  </div>
</div>

### Scaling

In nearly all instances icons should be used at the size they were created at and not scaled. This keeps the icons crisp and consistent in the UI.

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
    <figure class="figure" role="figure" aria-label="1.5px stroke weight and rounded stroke caps">
      <img class="figure-img" src="/img/icons-strokes.svg" alt="Icon stroke settings" role="img" />
      <figcaption class="figure-caption">1.5px stroke weight inside aligned and rounded stroke caps</figcaption>
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
      <img class="figure-img" src="/img/icons-line-miter.svg" alt="Line with mitar (square) join" role="img" />
      <figcaption class="figure-caption">Line with miter join</figcaption>
    </figure>
  </div>
</div>

## Border radius

To have parity between inside and center aligned strokes with a **1.5px** weight, the border radius options are:

| **Stroke aligned inside** | **Stroke aligned center** |  **Result** |
| ------ | ------ | ------ |
| 0px | 0px | <img src="/img/icons-0-inside.svg" alt="0 border radius example" role="img" /> |
| 1px | 0.25px |  <img src="/img/icons-1-inside.svg" alt="1 pixel border radius example" role="img" /> |
| 2px (default) | 1.25px |  <img src="/img/icons-2-inside.svg" alt="2 pixel border radius example" role="img" /> |
| 3px | 2.25px |  <img src="/img/icons-3-inside.svg" alt="3 pixel border radius example" role="img" /> |

Clarity should always override consistency, and the guides are flexible when necessary to best represent the metaphor or parts of it.

<figure class="figure" role="figure" aria-label="Border radius options, 2px is default">
  <img class="figure-img" src="/img/icons-border-radius.svg" alt="Icons with 0px, 1px, 2px, 4px, 6px, and 100% border radius options" role="img" />
  <figcaption class="figure-caption">Border radius options, 2px is default</figcaption>
</figure>

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="A combination of 2px and 4px border radius helps the elements fit together better.">
      <img class="figure-img" src="/img/icons-border-radius-example.svg" alt="Icon with 2px and 4px border radius" role="img" />
      <figcaption class="figure-caption">A combination of 1px and 2px border radius helps the elements fit together better.</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="A combination of 0px and 4px best represents the subject matter.">
      <img class="figure-img" src="/img/icons-border-radius-alternates.svg" alt="Icon with 0px and 4px border radius" role="img" />
      <figcaption class="figure-caption">A combination of 0px and 3px best represents the subject matter.</figcaption>
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

<figure class="figure" role="figure" aria-label="15º angle increments">
  <img class="figure-img" src="/img/icons-angles.svg" alt="Angle settings" role="img" />
  <figcaption class="figure-caption">15º angle increments</figcaption>
</figure>

## Shape

Sharp interior angles help icon clarity. A **1px** gap between elements is acceptable, but **2px** is preferred when possible — consistency will always help the icons feel more unified.

<figure class="figure" role="figure" aria-label="Icon with sharp interior angles and at least 1px spacing between elements">
  <img class="figure-img" src="/img/icons-shape-corners.svg" alt="Icon shape settings" role="img" />
  <figcaption class="figure-caption">Icon with sharp interior angles and at least 1px spacing between elements</figcaption>
</figure>

Design most icons in 2D. Depth and perspective should only be used when it’s absolutely necessary to clarify a concept, and even then **2px** strokes are used to add dimension instead of larger fill areas.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon with depth clarifies concept"><img class="figure-img" src="/img/icons-depth-do-2.svg" alt="3D box icon" role="img" /><figcaption class="figure-caption">Icon with depth clarifies concept</figcaption></figure> | <figure class="figure" role="figure" aria-label="Icon with no depth is too vague"><img class="figure-img" src="/img/icons-depth-dont-2.svg" alt="Square icon" role="img" /><figcaption class="figure-caption">Icon with no depth is too vague</figcaption></figure> |

Simplify icons for clarity and legibility, avoiding embellishment or unnecessary details.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Simplified icon"><img class="figure-img" src="/img/icons-shape-simple.svg" alt="Simple house icon" role="img" /><figcaption class="figure-caption">Simplified icon</figcaption></figure> | <figure class="figure" role="figure" aria-label="Overly complex icon"><img class="figure-img" src="/img/icons-shape-complex.svg" alt="Complex house icon" role="img" /><figcaption class="figure-caption">Overly complex icon</figcaption></figure> |

Remove or close counters that are less than `1px` to avoid distracting artifacts.

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

GitLab icons should reflect positive or neutral metaphors. Avoid concepts related to violence or that generally have a negative meaning. Ask yourself, will this icon benefit all users? Is there any potential that its meaning could be confusing or cause anxiety? If there's any doubt, explore other options that are at least neutral in meaning.

#### Specific meaning, specific icon

Using an icon consistently to represent a single concept or action helps with overall learnability for a user. For example, the icon used to represent a feature or an object shouldn't be used to refer to other unrelated concepts or actions in the UI.

Avoid using different icons to refer to one specific meaning. For example, [pencil](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~pencil) should be used for editing or updating an item, rather than [pencil-square](https://gitlab-org.gitlab.io/gitlab-svgs/?q=pencil-square) which is used for composing.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Icon represents “menu”"><img class="figure-img" src="/img/icons-concept-dup.svg" alt="Menu icon" role="img" /><figcaption class="figure-caption">Icon represents “menu”</figcaption></figure> | <figure class="figure" role="figure" aria-label="menu icon used for “list”"><img class="figure-img" src="/img/icons-concept-dup-dont.svg" alt="menu icon" role="img" /><figcaption class="figure-caption">Menu icon used for “list”</figcaption></figure> |

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Correct icon for “full screen”"><img class="figure-img" src="/img/icons-concept-meaning-do.svg" alt="Full screen icon" role="img" /><figcaption class="figure-caption">Correct icon for “full screen”</figcaption></figure> | <figure class="figure" role="figure" aria-label="Different icon for “full screen”"><img class="figure-img" src="/img/icons-concept-meaning-dont.svg" alt="Alternate full screen icon" role="img" /><figcaption class="figure-caption">Different icon for “full screen”</figcaption></figure> |

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
| <figure class="figure" role="figure" aria-label="Icon meaning is available"><img class="figure-img" src="/img/icons-concept-clear.svg" alt="Got hook icon with label and tooltip" role="img" /><figcaption class="figure-caption">Icon meaning is available</figcaption></figure> | <figure class="figure" role="figure" aria-label="Is that a smiling cat?"><img class="figure-img" src="/img/icons-concept-unclear.svg" alt="Git hook icon" role="img" /><figcaption class="figure-caption">Is that a smiling cat?</figcaption></figure> |

#### Modern metaphors

Try to avoid potentially antiquated concepts, especially when something more modern is recognizable.

| **Do** | **Don’t** |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Flat screen display"><img class="figure-img" src="/img/icons-concept-new.svg" alt="Flat screen display with play symbol" role="img" /><figcaption class="figure-caption">Flat screen display</figcaption></figure> | <figure class="figure" role="figure" aria-label="Old tube TV"><img class="figure-img" src="/img/icons-concept-old.svg" alt="Tube TV with antenna" role="img" /><figcaption class="figure-caption">Old tube TV</figcaption></figure> |

## Usage

Icons are used to stress visual weight for elements with a high priority or to explain the universal knowledge in a simple way.

The level of visual weight from heavy to light is: **Icon + label > Icon > label.**

### Referencing icons in code

For more information on how icons are referenced in the product, go to [GitLab Docs - Icons and SVG Illustrations](https://docs.gitlab.com/ee/development/fe_guide/icons.html).

## Resources

- You can view all of the current icons at the [GitLab SVGs](http://gitlab-org.gitlab.io/gitlab-svgs/) site.
- View the [GitLab Product Icons](https://www.figma.com/community/file/1051267829358377715/GitLab-Product-Icons) Figma file.
