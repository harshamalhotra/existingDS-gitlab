---
name: Design tokens overview
---

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens.svg" alt="Example design tokens in use" />

Design tokens are a methodology to pair design decisions with options from the design system. Design tokens abstract out variables like color, typography, and spacing for consistent and meaningful user interface (UI) design across tools and platforms. The following is a basic example of a design token, where `design.token.name` is the name, and `#abcdef` is the value.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-name-value.svg" alt="Example design token name and value pair" />

## Why we use design tokens

Design tokens help simplify design and development decisions in part by codifying attributes and use in their names. For example, the name of the design token `text.color.subtle` quickly communicates it's to be used for text color, and is likely less prominent in appearance than other available options.

More specifically, we use design tokens to:

- Catalogue design constants.
- Codify design decisions — capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and use for both stable and experimental design.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Categories

Our design tokens are grouped into three categories — **constant**, **semantic**, and **contextual** — that each serve a different purpose. Categories organize design tokens, but they don't impact how tokens are named. The specificity of design tokens increases from constant to semantic to contextual, with contextual being the most specific. Constant design tokens are referenced by other tokens whereas semantic and contextual design tokens are those applied during design and development.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-specificity.svg" alt="Design token specificity" />

### Constant design tokens

Constant design tokens (constants) are the rudimentary, unchanging key/value pairs found at the lowest level of the design system that capture essential attributes like color and spacing. Constant design tokens are not intended to be used directly. Instead, they act as the building blocks that are referenced in semantic and contextual design tokens. In the following example, the constant design token name `color.purple.100` references the `#e1d8f9` hex code for the value.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-constant.svg" alt="Example constant design token" />

### Semantic design tokens

Semantic design tokens reference constant design tokens to encapsulate global design decisions for everything from text to surfaces, and spacing to elevation. Semantic design tokens use a naming strategy that helps clarify design intent and use. In the following example, the semantic design token name `status.brand.background.color`references the constant design token `color.purple.100` for the value, which in turn references the `#e1d8f9` hex code.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-semantic.svg" alt="Example semantic design token" />

### Contextual design tokens

Contextual design tokens are the most specific of the three categories. These design tokens are useful for capturing specific design intent for components, patterns, and experiments. They can reference either semantic or constant design tokens. In the first example that follows, the contextual design token `avatar.fallback.background.purple` references the constant design token `color.purple.50`, which in turn references the `#f4f0ff` hex value. In the second example, the constant design token `alert.warning.title.color` references the semantic design token `text.color.heading`, which in turn references the constant design token `color.neutral.950`, that finally resolves to the `#18171d` hex value.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-contextual.svg" alt="Example contextual design tokens " />

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

- A notice that alerts about unusual performance patterns, or an available dependency update.
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
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border gl-border-default gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
       <code>background.color.default</code><br><code>border.color.default</code>
      </td>
      <td class="!gl-pt-6">Default combination when a background and border is needed</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-subtle gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.default</code><br><code>border.color.subtle</code>
      </td>
      <td class="!gl-pt-6">Container with visually less prominent borders on default background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-strong gl-bg-default"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.default</code><br><code>border.color.strong</code>
      </td>
      <td class="!gl-pt-6">Container with visually pronounced borders on default background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-subtle gl-bg-subtle"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.subtle</code><br><code>border.color.subtle</code>
      </td>
      <td class="!gl-pt-6">Container with visually subdued border and background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-strong gl-bg-strong"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.strong</code><br><code>border.color.strong</code>
      </td>
      <td class="!gl-pt-6">Container with visually emphasized border and background</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-section gl-bg-section"><br></div></td>
      <td class="!gl-pt-6">
        <code>background.color.section</code><br><code>border.color.section</code>
      </td>
      <td class="!gl-pt-6">Container with mode-dependent visual presentation</td>
    </tr>
    <tr>
      <td class="!gl-p-6"><div class="gl-py-7 gl-px-12 gl-rounded-default gl-border !gl-border-subtle gl-bg-disabled"><br></div></td>
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

Next, [learn how to read design tokens →](/product-foundations/design-tokens-reading)
