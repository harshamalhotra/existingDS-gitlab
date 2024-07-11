---
name: Using design tokens
---

## In design

Using design tokens as Figma variables is moving to open-beta following a successful invite-only pilot.

It's easy to opt in to the beta.

1. Add [Beta:&nbsp;Design&nbsp;tokens&nbsp;library](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?node-id=2194-34&t=S8Qzj2r4h5sg8dIK-0) to your files. ([How do I add a library to my file?](https://help.figma.com/hc/en-us/articles/1500008731201-Enable-or-disable-a-library-in-a-design-file))
1. Use colors as Figma variables instead of styles from **📙&nbsp;Component&nbsp;library**. ([How do I apply a Figma variable?](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs))
1. Let us know how you get on in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870). No problem too big, no feedback too small.

In the future, color styles will be removed from the component library and these Figma variables will be updated to support dark mode.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `text.color.default` can only be applied as a fill to a text element and not to a stroke or shape layer.

## In code

<note>A pilot for design tokens in code has been completed as part of this [issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1776), and we're currently doing more exploration with a small subset of components as part of this [issue](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2583). More details about officially using design tokens will be coming soon, but in the meantime carry on with your typical development process.</note>

## Patterns and matching

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1816">Document token pairing for color patterns and token matching for conceptual patterns.</todo>
