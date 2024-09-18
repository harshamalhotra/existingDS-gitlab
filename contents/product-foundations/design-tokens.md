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

Contextual design tokens are the most specific of the three categories. These design tokens are useful for capturing specific design intent for components, patterns, and experiments. They can reference either semantic or constant design tokens. In the first example that follows, the contextual design token `avatar.fallback.background.purple` references the constant design token `color.purple.50`, which in turn references the `#f4f0ff` hex value. In the second example, the constant design token `alert.warning.title.color` references the semantic design token `text.color.heading`, which in turn references the constant design token `color.neutral.950`, that finally resolves to the `#1f1e24` hex value.

<img class="gl-block gl-mx-auto gl-my-7" src="/img/design-tokens-contextual.svg" alt="Example contextual design tokens " />

Next, [learn how to read design tokens →](/product-foundations/design-tokens-reading)
