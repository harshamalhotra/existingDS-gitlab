---
name: Design tokens
---

Design tokens capture decisions and intent in code. Design tokens abstract out variables like color, typography, and spacing for consistent and meaningful user interface (UI) design across tools and platforms.

## Why we use design tokens

Design tokens help us establish a single source of truth for how, when, and why a foundational element from the design system is used. On the surface, a design token is a simple json key/value pair, but its usefulness is in pairing a design decision with an option that exists in the design system.

For example, choosing `color.neutral.700` for text tells someone nothing about why that color was chosen, or how it may react to different modes like light, dark, or high contrast. But, if a design token like `color.text.secondary` is applied, someone can understand that the text color is likely less prominent than the primary color regardless of mode. The design intent has been communicated. Changing the design token requires reconsidering the purpose.

More specifically, we use design tokens to:

- Inventory design primitives.
- Codify design decisions — capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and application.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Categories

We group design tokens into three categories — **constant**, **semantic**, and **contextual** — that each serve a different purpose.

<note>Naming examples are hypothetical and will be updated after [&13205](https://gitlab.com/groups/gitlab-org/-/epics/13205) is complete.</note>

### Constant design tokens

Constant design tokens (constants) are the rudimentary, unchanging key/value pairs found at the lowest level of the design system that capture essential attributes like color and spacing. Constant design tokens are not intended to be used directly. Instead, they act as the building blocks that are referenced in semantic and contextual design tokens.

**Examples**

| Constant design token | Value |
| ------ | ------ |
| `color.neutral.700` | `#737278` |
| `space.2` | `4px` |

### Semantic design tokens

Semantic design tokens reference constant design tokens to encapsulate global design decisions for everything from text to surfaces, and spacing to elevation. Semantic design tokens use a naming strategy that helps clarify design intent and use while remaining independent of the particular constant design tokens being referenced.

**Examples**

| Semantic design token | Value in light mode | Value in dark mode |
| ------ | ------ | ------ |
| `color.text.secondary` | `color.neutral.500` | `color.neutral.300` |
| `color.surface.background.info` | `color.blue.50` | `color.neutral.900` |

In the example above, `color.text.secondary` references the `color.neutral.500` constant design token for its light mode value, and in dark mode it references the `color.neutral.300` constant design token. In both modes the design intent is the same — the text should appear as secondary. Instead of communicating something like "this text should be dark gray," it communicates "this text needs to feel secondary to other text (which happens to be dark gray in this mode and light gray in another mode)." The abstraction enables the intent to be the same regardless of what values are used or the context it happens to be in.

### Contextual design tokens

Contextual design tokens are the most specific of the three categories. These design tokens are useful for capturing specific design intent for components, patterns, and experiments. They can reference either semantic or constant design tokens.

**Examples**

| Contextual design token | Value in light mode | Value in dark mode |
| ------ | ------ | ------ |
| `tab.color.text.inactive` | `color.text.secondary` |  `color.text.secondary` |
| `button.color.default.border.hover` | `color.blue.700` | `color.blue.300` |

In the examples above, `tab.color.text.inactive` references a single semantic design token which has its own changes per mode, while `button.color.default.border.hover` references a different constant design token for each mode.

## Naming conventions

<todo>Define naming conventions, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token format

<todo>Define format, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token lifecycle

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1654">Document the governance and workflow for creating and updating design tokens. This could be a good place to reference [Style Dictionary](https://amzn.github.io/style-dictionary).</todo>

## Using design tokens

We are experimenting with a small subset of design tokens, with the intention of introducing more design tokens over time.

### In code

<todo>Document usage, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

### In design

<note>We are currently piloting using design tokens in Figma. We're asking that only those part of the pilot use the library. Sign up to the pilot and learn more in the [issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1771).</note>

Design tokens are used by [applying Figma variables](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs) to elements on the canvas.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `color.text.secondary` can only be applied as a fill to a text element and not a stroke or shape layer.
