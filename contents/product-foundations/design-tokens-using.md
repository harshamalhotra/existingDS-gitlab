---
name: Design tokens usage guide
---

## In design

Using design tokens as Figma variables is now GA.

1. Use colors from [Design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Design-tokens?node-id=2194-34&t=S8Qzj2r4h5sg8dIK-0) as Figma variables instead of styles from **📙&nbsp;Component library**. ([How do I apply a Figma variable?](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs))
1. Let us know how you get on in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870). No problem too big, no feedback too small.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `text.color.default` can only be applied as a fill to a text element and not to a stroke or shape layer.

### Work with dark mode

To enable switching between light and dark modes in Figma, use **Design tokens library** with **📙&nbsp;Component library**. These libraries use Figma variables that adapt to the selected mode and sync directly with our design tokens in code.

Components in **📙&nbsp;Component library** are built using these variables from **Design tokens library**. Unlike color styles from  **📙&nbsp;Component library**, when you switch mode, variables automatically update to their scheme-specific values.

By default, Figma uses **Auto** mode which defaults to light theme. To change the mode, select **Apply variable mode** in either:

- the Page sidebar when nothing is selected
- the Appearance sidebar when an object is selected

<grid>
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the page section" label="'Apply variable mode' button in the Page sidebar" src="/img/design-tokens-figma-page-mode-select.png"></figure-img>
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the appearance section" label="'Apply variable mode' button in the frame appearance section" src="/img/design-tokens-figma-frame-appearance-mode-select.png"></figure-img>
</grid>

You should set the mode at the page or parent frame level. Elements with the **Auto** mode inherit the mode from their parent, which allows styles to cascade. In the GitLab product, the mode applies to the entire user interface.

If you design outside the design system, use color styles from **📙&nbsp;Component library**. For example, use `purple-400`. These colors remain static across modes, so document any special behaviors during [handoff](https://docs.gitlab.com/ee/development/contributing/design.html#handoff).

## In code

Use design tokens in code through these approaches, listed in order of preference:

1. **[Pajamas components](/product-foundations/design-tokens-technical-implementation#pajamas-components)**: The primary way to implement design tokens in your UI.
1. **[CSS utility classes](/product-foundations/design-tokens-technical-implementation#css-utilities)**: For custom styling needs not covered by Pajamas components.
1. **[CSS custom properties](/product-foundations/design-tokens-technical-implementation#css-custom-properties)**: For precise control over specific CSS properties.

If these options don't meet your needs, [reach out to the design system team](https://handbook.gitlab.com/handbook/engineering/development/dev/foundations/design-system/) to discuss potential improvements.

Using design tokens in code is explained in more detail in [design tokens technical implementation](/product-foundations/design-tokens-technical-implementation).

## Concepts

Our design tokens are organized into conceptual categories that reflect their purpose and usage within the user interface. These categories help create consistent, accessible, and meaningful user experiences across the product. Consider the context, user needs, and overall design consistency when designing custom elements that use design tokens. Use sufficient color contrast and provide text alternatives for all visual indicators.

### Actions

Actions are interactive elements that trigger or represent user actions. `action.*` design tokens give a common visual style for interactive elements across the GitLab UI.

To create bespoke interactive elements, combine background, foreground, and border color design tokens. Note that in some modes, borders might not be visible by default. This is intentional to provide accessible boundaries in modes like Windows High Contrast Mode.

Action design tokens support three contexts:

- `neutral`: Default for most actions.
- `confirm`: For positive outcome actions.
- `danger`: For potentially destructive actions.

Interactivity can be communicated through implementing states such as `hover`, `focus`, and `active`.

Consider using existing GitLab components (such as [button](/components/button), [pagination](/components/pagination), and [tabs](/components/tabs)) that already implement action design tokens. These provide consistent styling and behavior without custom implementation. For more information on available components, see the [components overview](/components).

<design-tokens-table group="action"></design-tokens-table>

### Controls

Controls enable user input and selection, typically within a [form](/patterns/forms). `control.*` design tokens apply consistent styling to form elements across the GitLab UI. They're also used for elements that appear or function like a form control, even though the underlying code or semantics may not always match a native HTML form element.

Control design tokens support implementations of:

- Input fields (text, email, password, and more).
- Checkboxes and radio buttons.
- Textareas and multiline inputs.
- Select menus.
- Form element validation, readonly, and disabled states.

Consider using existing GitLab components (such as [checkbox](/components/checkbox), [radio button](/components/radio-button), [select](/components/select), [textarea](/components/textarea), and [text input](/components/text-input)) that already implement control design tokens. These provide consistent styling and behavior without custom implementation. For more information on available components, see the [components overview](/components).

<design-tokens-table group="control"></design-tokens-table>

### Feedback

`feedback.*` design tokens are used to communicate dynamic information about the result of an action, event, or opportunity. Feedback often requires a user's attention or action.

Use feedback design tokens when:

- Notifying a user about a system event (for example, an error or successful action).
- Promoting a new feature or important information.
- Providing guidance or additional context.

Examples of custom feedback elements:

- A notice that alerts about unusual performance patterns, or an available dependancy update.
- An inline update providing compliance check feedback, or discovery of a new vulnerability.
- An addition to a collaboration activity stream.

```html
<!-- live-example -->
<div class="gl-grid gl-gap-3 gl-text-base">
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-strong gl-text-feedback-strong">
    <gl-icon class="gl-fill-feedback-strong" name="error" />
    <span class="gl-flex-1">feedback.strong</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-neutral gl-text-feedback-neutral">
    <gl-icon class="gl-fill-feedback-neutral" name="error" />
    <span class="gl-flex-1">feedback.neutral</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-info gl-text-feedback-info">
    <gl-icon class="gl-fill-feedback-info" name="error" />
    <span class="gl-flex-1">feedback.info</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-success gl-text-feedback-success">
    <gl-icon class="gl-fill-feedback-success" name="error" />
    <span class="gl-flex-1">feedback.success</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-warning gl-text-feedback-warning">
    <gl-icon class="gl-fill-feedback-warning" name="error" />
    <span class="gl-flex-1">feedback.warning</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-feedback-danger gl-text-feedback-danger">
    <gl-icon class="gl-fill-feedback-danger" name="error" />
    <span class="gl-flex-1">feedback.danger</span>
  </div>
</div>
```

<design-tokens-table group="feedback"></design-tokens-table>

### Highlighting

Highlighting is a way to emphasize or draw attention to content without implying any particular meaning. `highlight.*` design tokens help a user identify relevant information or relationships within the interface.

Highlight design tokens support two contexts:

- `match`: Drawing attention to matched results.
- `target`: Identifying referenced (targeted) elements or visualizing relationships between content or elements when one or more is the target.

Use highlight design tokens when:

- Temporary visual emphasis is needed that is informational rather than interactive.
- Visually connecting related elements without changing their meaning.

Examples of highlight elements:

- Matched search terms, filtered results, or autocomplete suggestions.
- Indicating which element is referenced in the URL.
- Highlighting a row on hover to emphasize the relationship of content within.
- Indicating which element is related to another that currently has the user's attention.

<design-tokens-table group="highlight"></design-tokens-table>

### Status

`status.*` design tokens represent the current state or condition of an element or system. A status item provides static information that doesn't typically require immediate action.

Use status design tokens when:

- Indicating the current state of an item (for example, in progress or completed).
- Showing a priority or importance level.
- Representing system health or connection status.

Examples of custom status elements:

- A color-coded indicator showing task urgency, or the current state of a CI pipeline.
- A small icon representing the confidentiality level of a document, or the visibility of a repository.
- Text communicating code test coverage as a percentage.


```html
<!-- live-example -->
 <div class="gl-grid gl-gap-3 gl-text-base">
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-neutral gl-text-status-neutral">
    <gl-icon class="gl-fill-status-neutral" name="error" />
    <span class="gl-flex-1">status.neutral</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-info gl-text-status-info">
    <gl-icon class="gl-fill-status-info" name="error" />
    <span class="gl-flex-1">status.info</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-success gl-text-status-success">
    <gl-icon class="gl-fill-status-success" name="error" />
    <span class="gl-flex-1">status.success</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-warning gl-text-status-warning">
    <gl-icon class="gl-fill-status-warning" name="error" />
    <span class="gl-flex-1">status.warning</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-danger gl-text-status-danger">
    <gl-icon class="gl-fill-status-danger" name="error" />
    <span class="gl-flex-1">status.danger</span>
  </div>
  <div class="gl-flex gl-gap-3 gl-items-center gl-p-3 gl-rounded-lg gl-bg-status-brand gl-text-status-brand">
    <gl-icon class="gl-fill-status-brand" name="error" />
    <span class="gl-flex-1">status.brand</span>
  </div>
</div>
```

<design-tokens-table group="status"></design-tokens-table>

### Containers

The following combinations are commonly used to visually wrap content. Each combination has a noticeable difference between the border and background. Container presentation is covered more in the section on how to [visually define content areas](/product-foundations/layout#visually-define-content-areas).

<table>
  <thead>
    <tr>
      <th>Appearance</th>
      <th>Design tokens</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border gl-border-default gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
       <code>background.color.default</code><br><code>border.color.default</code>
      </td>
      <td class="!gl-pt-6">Default combination when a background and border is needed</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-subtle gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.default</code><br><code>border.color.subtle</code>
      </td>
      <td class="!gl-pt-6">Container with visually less prominent borders on default background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-strong gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.default</code><br><code>border.color.strong</code>
      </td>
      <td class="!gl-pt-6">Container with visually pronounced borders on default background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-subtle gl-bg-subtle"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.subtle</code><br><code>border.color.subtle</code>
      </td>
      <td class="!gl-pt-6">Container with visually subdued border and background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-strong gl-bg-strong"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.strong</code><br><code>border.color.strong</code>
      </td>
      <td class="!gl-pt-6">Container with visually emphasized border and background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-section gl-bg-section"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.section</code><br><code>border.color.section</code>
      </td>
      <td class="!gl-pt-6">Container with mode-dependent visual presentation</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-base gl-border !gl-border-subtle gl-bg-disabled"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.disabled</code><br><code>border.color.subtle</code>
      </td>
      <td class="!gl-pt-6">Disabled container with visually muted appearance</td>
    </tr>
  </tbody>
</table>

## Considerations

### Choosing between feedback and status

Use these factors to decide between using feedback and status design tokens:

<table>
  <thead>
    <tr>
      <th>Characteristic</th>
      <th>Feedback</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Purpose</td>
      <td>Communicates changes or opportunities</td>
      <td>Informs about current state</td>
    </tr>
    <tr>
      <td>Timing</td>
      <td>Triggered by events or changes</td>
      <td>Always present</td>
    </tr>
    <tr>
      <td>User attention</td>
      <td>Often requires immediate action</td>
      <td>Doesn't require immediate action</td>
    </tr>
    <tr>
      <td>Persistence</td>
      <td>Often temporary</td>
      <td>Persistent until state changes</td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>Can relate to entire system</td>
      <td>Specific to particular element</td>
    </tr>
    <tr>
      <td>Interactivity</td>
      <td>May include interactive elements</td>
      <td>Typically non-interactive</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>
        <ul>
          <li>Notice of a performance issue.</li>
          <li>Dependency update alert.</li>
          <li>Compliance check results.</li>
          <li>New vulnerability notification.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Task urgency indicator.</li>
          <li>CI pipeline state.</li>
          <li>Repository visibility icon.</li>
          <li>Code coverage percentage.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Additional considerations:

1. Dynamic vs. static: Feedback is often dynamic and changing, while status tends to be more static, changing only when the underlying state changes.
1. Context: Consider the broader context of the user interface. Status is often used within components or alongside specific elements, while feedback might appear separately or overlay other content.
1. Combination use: In some cases, you might use both status and feedback design tokens together. For example, status design tokens to show the current state of a CI/CD pipeline, with feedback design tokens to communicate that a merged result pipeline has failed.
1. Active processes: For ongoing processes (like 'in progress' or 'syncing'), consider using status, as these represent the current state even though they're dynamic.

When in doubt, consider whether the information represents the current state of something (status) or is communicating a change or the result of an event (feedback). Remember that the primary goal is to provide clear, consistent, and meaningful information to the user in the context of GitLab.

### Patterns and matching

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1816">Document token pairing for color patterns and token matching for conceptual patterns.</todo>

### Accessibility considerations

<todo>Document accessibility considerations when matching design tokens.</todo>
