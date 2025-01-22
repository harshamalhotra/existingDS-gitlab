---
name: Screen readers
---

**Principle:** Screen reader users should receive complete and accurate information about page content and interactions.

Testing with screen readers provides valuable insights into how assistive technology users experience content. While sighted users generally rely on visual cues, screen reader users navigate through audio feedback, and partially sighted users may use a combination of the two. This difference in perception often reveals accessibility issues that might be missed during visual inspection, from pronunciation errors to structural problems.

While this guide doesn't cover specific screen reader usage (see [resources](#resources) for detailed guides), it outlines key testing expectations. Remember that testing with actual users on their preferred devices provides the most accurate insights. Your experience as an occasional tester will differ from an experienced screen reader user, but regular testing remains valuable.

**Sections**

- [Alternative text](#alternative-text)
- [Form controls](#form-controls)
- [Calls to action](#calls-to-action)
- [Page structure](#page-structure)
- [Dynamic content](#dynamic-content)
- [Resources](#resources)

## Alternative text

Alternative text provides crucial information about images to screen reader users by providing a concise description of the image or its purpose. It also serves as fallback content when an image fails to load. Every image requires an `alt` attribute, though its content depends on context.

### Expected behavior

- All images include an `alt` attribute.
- Decorative images use empty alt text (`alt=""`). For example, a decorative border image used to visually divide content sections.
- Functional images describe their purpose (for example, `alt="next page"` for a navigation arrow).
- Complex images like charts have equivalent text content available.
- Context-specific descriptions that avoid redundant phrases like "image of".
- Inline SVGs are handled differently and use appropriate `title` and `desc` elements. Deque has a helpful post for [creating accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/).

### Identifying problems

- Missing `alt` attributes on an image:
  - Add appropriate alt text to all `img` elements.
  - Use empty alt (`alt=""`) for decorative images.
- Redundant or uninformative alt text:
  - Remove phrases like "image of" or "picture of".
  - Focus on conveying the image's purpose or content within the surrounding context.
- Lack of text alternatives for complex visuals:
  - Provide detailed descriptions in adjacent content.
  - Use `figure` and `figcaption` for charts and graphs.
  - Consider using accessible SVG with `title` and `desc` elements.
- Background images containing important content:
  - Move important images to foreground HTML elements or provide equivalent content in accessible text.
- Incorrect use of empty alt text on meaningful images:
  - Add descriptive alt text that conveys the image's purpose and considers the context.

## Form controls

Screen reader users need clear guidance about form expectations and relationships. While visual users can typically grasp form structure, screen reader and voice control users rely on proper labeling and ARIA attributes for context.

### Expected behavior

- A form control has an associated label describing its purpose.
- Related controls are grouped with appropriate `legend` elements (this may not be announced by every screen reader).
- For a form control that needs a description or formatting example use `aria-describedby`.
- A custom control matches native control behavior and announcement.

### Identifying problems

- Form controls lack proper labels:
  - Add `label` elements with meaningful text and ensure labels are properly associated using `for` attributes.
  - Use `aria-label` when visible labels aren't possible.
- Missing group labels for related controls:
  - Wrap related controls in `fieldset` elements.
  - Add descriptive `legend` elements.
- Unclear formatting requirements:
  - Add help text using `aria-describedby`.
- Custom controls that don't match expected behavior:
  - Follow WAI-ARIA design patterns if possible.
  - Implement expected keyboard interactions.
  - Test with multiple screen readers.

## Calls to action

Although headings are one of the most common ways screen reader users navigate, many also do so by viewing a list of the links within a page ([WebAIM Screen Reader User Survey 10 Results](https://webaim.org/projects/screenreadersurvey10/#finding)). A call to action (CTA) should let users know what to expect when the action is taken or a link is followed. For example, "discover more about the app" is clearer than "read more".

Repeated CTAs often make sense for visual users when the layout associates each with its own content block. When this is the case, consider using `aria-label` or `aria-describedby` to provide context for screen readers.

### What to expect

- The content of a CTA clearly communicates the result of that action.
- Repeated CTAs leverage `aria-label` or `aria-describedby` to add unique context.
- CTAs are focusable, using button and anchor elements.
- External links or actions that change the page layout are indicated or understood within the context so a user doesn't unexpectedly find themselves in a new place.

### Identifying problems

- Generic or ambiguous link text such as "click here", "read more", or "learn more":
  - Replace with specific, descriptive text that indicates the destination.
  - Include the topic or subject in the link text.
  - Ensure the link makes sense when read out of context.
- Similar content in CTAs without distinguishing context:
  - Add unique `aria-label` attributes that include surrounding content.
  - Use `aria-describedby` to reference nearby descriptive text.
  - Consider combining similar CTAs when appropriate.
- Non-interactive CTAs:
  - Use a semantic element such as `<button>` or `<a>`.
- Unclear destination or action outcomes:
  - Indicate when a link opens in a new window or tab if the context doesn't make it clear.
  - Include file types and sizes for downloadable content.

## Page structure

Semantic markup (see [MDN definition](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)) and proper heading hierarchy provide crucial navigation paths for screen reader users. These structural elements allow users to understand content organization and quickly move to desired sections.

### Expected behavior

- Content uses semantic HTML elements.
- ARIA roles clarify ambiguous elements.
- DOM structure follows logical reading order.
- Headings follow proper hierarchy.

### Identifying problems

- Non-semantic markup for structural elements:
  - Replace `div` elements with appropriate semantic elements.
  - Use HTML5 landmarks (`main`, `nav`, `aside`).
  - Add ARIA roles when semantic elements aren't possible.
- Missing ARIA roles on custom elements:
  - Add appropriate ARIA roles to clarify purpose.
- Illogical DOM structure:
  - Align visual order with DOM order.
  - Minimize CSS positioning that affects reading order.
- Incorrect heading hierarchy:
  - Ensure heading levels don't skip and are nested correctly.
  - Use headings to represent actual section structure.

## Dynamic content

Screen readers must announce dynamic content changes to keep users informed. This includes form validation, alerts, and interactive component states.

### Expected behavior

- Content updates use appropriate `aria-live` regions.
- Form errors clearly indicate location and resolution steps.
- Interactive components announce state changes.
- Users can easily reverse state changes.

### Identifying problems

- Silent content updates:
  - Implement `aria-live` regions for important updates and choose appropriate politeness levels.
- Unclear error notifications:
  - Use `role="alert"` for immediate attention.
  - Provide clear error messages and solutions.
  - Focus the first error when possible.
- State changes without announcements:
  - Add appropriate ARIA states (`aria-expanded`, `aria-selected`).
  - Use live regions for important state changes.
- Inability to return to previous states:
  - Provide clear mechanisms to reverse actions.
  - Maintain keyboard focus appropriately.

## Resources

- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Introduction to JAWS](https://webaim.org/articles/jaws/)
- [Introduction to NVDA](https://webaim.org/articles/nvda/)
- [Introduction to VoiceOver](https://webaim.org/articles/voiceover/)
- [WebAIM Alternative Text Guide](https://webaim.org/techniques/alttext/)
- [WebAIM Screen Reader Survey Results](https://webaim.org/projects/screenreadersurvey7/)
- [Getting Started with ARIA](https://a11yproject.com/posts/getting-started-aria/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
