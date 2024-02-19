---
name: Design tokens
---

Design tokens capture decisions and intent in code. They abstract out variables like color, typography, and spacing for consistent and meaningful use across tools and platforms.

## Why we use design tokens

Design tokens help us establish a single source of truth for how, when, and why an element from the design system is used. On the surface, a design token is a simple json key/value pair, but its value lays in pairing a design decision with an option that exists in the design system.

For example, choosing `color.gray.700` for text tells someone nothing about why that color was chosen, or how it may react to different modes like light, dark, or high contrast. But, if a token like `color.text.secondary` is applied, someone can understand that the text color is likely less prominent than the primary color regardless of mode. The design intent has been communicated and can't be changed without reconsidering the purpose.

More specifically, we use design tokens to:

- Codify design decisions — capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and application.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Types of design tokens

<todo>Define taxonomy, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Naming conventions

<todo>Define naming conventions, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token format

<todo>Define format, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token lifecycle

<todo>Document the governance and workflow for creating and updating tokens. This could be a good place to reference [Style Dictionary](https://amzn.github.io/style-dictionary).</todo>

## Using design tokens

<todo>Document usage, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>
