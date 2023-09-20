---
name: Visual
---

**Principle**: Page elements are distinguishable, the flow is logical, and the content is adaptable.

Appearance and visual design aren't always subjective, and as it relates to accessibility there are many ways to measure the effectiveness of attributes like color, statefulness, hierarchy, and more.

**Sections**

- [Visual disabilities](#visual-disabilities)
- [Color](#color)
- [Page flow](#page-flow)
- [Resizing](#resizing)
- [Resources](#resources)

## Visual disabilities

Visual disabilities are diverse and can include [blindness, low-vision, and color blindness](https://webaim.org/articles/visual/). It's important to go beyond our own experience when designing or evaluating design, to provide more robust interfaces that can adapt to people's needs and customizations such as increased text size, increased zoom level, and high-contrast modes.

## Color

In his article, [Automated Lies, with one line of code](https://karlgroves.com/automated-lies-with-one-line-of-code/), Karl Groves states that "By volume, insufficient color contrast is the most common accessibility issue on the Web." In addition to being one of the most common issues, it can be one of the most straightforward to address. But contrast is only aspect to cover, we also need to consider how color communicates meaning, and how a consistent use of color benefits accessibility.

### Contrast

An evaluation of color contrast includes text, images of text used as meaningful content, and graphics used for interaction or as meaningful content (non-decorative). Contrast ratios can be calculated with a wide variety of tools some of which are listed in the [resources](#resources) below.

#### Text

To satisfy [WCAG 2.1 SC 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) text content needs a contrast ratio of:

- **4.5:1** between text and background
- **3:1** for 18pt and larger, or 14pt bold and larger text and background.

#### Points vs. pixels

WCAG uses points instead of pixels when referencing text size, noted in [WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#intent): 

> The ratio between sizes in points and CSS pixels is 1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px.

#### Graphics

Graphics like icons, illustrations, charts, and other non-text interactive elements only need a **3:1** contrast ratio against the background or sibling elements to satisfy [WCAG 2.1 SC 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

Even if a graphic is used as decoration, it should have enough contrast to be distinguished from surrounding content, and any meaningful details within a graphic should be distinguished from surrounding elements. Read the [data visualization color guidelines](/data-visualization/color) for more information about the use of color for data visualization.

#### Contrast of content and context

In some instances, contrast must be checked in more than one way. Take a button for example, the button text must have at least a **4.5:1** contrast ratio with the button background at all states, and the button background should have at least a **3:1** contrast ratio with the background when the background is necessary for understanding the bounds of the control or to distinguish it from surrounding elements.

Similarly, linked text that isn't underlined (or distinguished in a similar way) must have at least a **3:1** contrast ratio with surrounding text _and_ at least a **4.5:1** contrast ratio with the background.

#### Exceptions

Logos and text in logos are an exception to the contrast criteria, but when in our control we also aim for at least a **3:1** contrast ratio.


### Meaning

Color doesn't always have to be associated with meaning, but when it is it can't be the only means of conveying the meaning. For example, a red border on an invalid form field is insufficient by itself to indicate an error, but if error text and even an error icon is present, then the red border isn't the only way the error is communicated. Likewise, an icon that only changes color to indicate a status is insufficient, but if the icon itself were to change, or it was paired with a clear text message, then color alone isn't being relied on. Not all users discern colors in the same way, so it's imperative that color is used to enhance meaning along with other elements.

Color shouldn't be used as the only means of conveying the meaning of content. For example, a red border on an invalid form field is insufficient by itself to indicate an error. If accompanied by error text and an error icon, then the red border isn't the only way the error is communicated.

Likewise, an icon that only changes color to indicate a status is insufficient. If the icon itself were to change, or it is paired with a meaningful text, then color alone isn't being relied on. 

Not all users discern colors in the same way, so it's imperative that color is used to enhance meaning along with other elements. Refer to the [WCAG SC 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) docs for more information.

### Consistency

A consistent use of color will help a user identify interactive, status, or other feedback patterns across a site. For example, blue is used for interactive elements like buttons and links, while green is used when a task is successful.

### Expected results

- All text must have a contrast ratio of 4.5:1 or higher.
- All text states (hover, focus, and active) must have a 4.5:1 contrast ratio. The exception is disabled states, and for those we aim to have a contrast ratio of 3:1 even though as of WCAG 2.1 there isn't a specific criteria to satisfy.
- Even though logos don't need to meet the contrast ratio, they should have appropriate `alt` text. If possible though, it's better when a logo is legible and easily distinguished from its surroundings.
- Decorative text that conveys no information is excluded. For example, words that form a graphical pattern or that are part of a larger illustration where they are inconsequential.
- Color can not be the only attribute that conveys meaning.
- The [chromatic color palette](/product-foundations/color#chromatic-palette) is used consistently and aligns with prescribed meanings.

## Page flow

A page should have a logical flow that provides visual cues for hierarchy and content sectioning. The use of visual weight and spacing increases scannability and enhances relationships. As much as possible, the natural reading order and DOM order should align, which benefits a keyboard-only or screen reader user. Responsive behavior shouldn't alter the flow or hierarchy.

### Expected results

- Headings help logically structure a page by providing visual hierarchy and meaningful sections.
- The reading order is closely aligned with the DOM order. If there was no CSS or visual cues, would the content make sense in the current order?
- Dynamic content, like alerts, feedback, or loading states make sense in the page hierarchy and don't unnecessarily break the flow.
- Content reflows predictably when responsive.
- If text references other page elements based on location, it must make sense responsively. For example, if the text says "reference the status table to the right," but in a smaller viewport the table is below, then the text should be more general.

## Resizing

Text scaling is a capability that many users take advantage of either through browser or system settings. In fact, per [WCAG SC 1.4.4 Resize Text (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) a user should be able to resize text "up to 200 percent without loss of content or functionality." This doesn't apply to images of text or captions used as alternate media for video or audio.

### Expected results

- If a user updated a system setting to increase text size, all text content should be readable and available up to 200 percent. 
  - Text that truncates should still easily be available in it's full form regardless of modality (mouse, keyboard, touch).
  - Text should reflow appropriately and be legible, scrollable, and not have any loss in function or impede the legibility or function of other elements.
- System and browser settings are different, however, the above also applies when a user has updated browser settings to increase text or UI size up to 200 percent.
- The above is true regardless of translation.

## Resources

- [Supporting the Design Phase with Accessibility Heuristics Evaluations](https://www.deque.com/blog/supporting-the-design-phase-with-accessibility-heuristics-evaluations/) - Article from Denis Boudreau of Deque that outlines ten accessibility heuristics that can be applied during the design process along with a helpful checklist (PDF).
- [Colour Contrast Analyzer (CCA)](https://www.tpgi.com/color-contrast-checker/) - TPGi's free colour contrast checker app for Windows or Mac.
- [ColorSlurp](https://colorslurp.com/) - Color picker app with accessibility and palette features.
- [Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/) - A tool from WebAIM to check contrast between link color and surrounding text, and link color and background.
- [Axe for Designers](https://www.figma.com/community/plugin/1085612091163821851) - A Figma plugin from Deque to check contrast and more.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) - A color blindness simulator app for iOS and Mac.
- Additional resources can be found in the Color section of the [Accessibility Cache](https://jeldergl.gitlab.io/accessibility-cache/#color).
