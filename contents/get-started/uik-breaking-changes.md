---
name: Breaking changes
---

A breaking change is anything that would require a designer to take any action after updating. Examples include, but aren't limited to, changed dimensions, incompatibility with previously used properties, and lost overrides.

Breaking changes have different levels of impact. Each breaking change must include a level and specific explanation. If a breaking change to a single component or other design asset includes multiple changes at different levels of impact, default to using the highest impact.

- **Low impact**: A change has been made that has a low likelihood of introducing regression. For example, Auto Layout replaces a spacer component where the resulting spacing isn’t changed.
- **Medium impact**: A change has been made which requires validating the impact. For example, the size of a component has changed and may require layout adjustments in a design.
- **High impact**: A change has been made that breaks overrides, introduces new features that aren’t backwards compatible, or requires a designer to validate instances in their designs. For example, a new property causes text content to be lost, requiring it to be readded. High impact changes require a new version of the component, where the previous version is deprecated, but available for at least a milestone (see current notes on [deprecation](#deprecation)).
- **Extreme impact**: A change that requires an entirely new component library file and associated library. For example, styles are moved to their own file with an independent library consumed by the component library.

## Deprecation

When a component or style is deprecated it should remain available for at least one milestone before fully being removed from the UI kit. After that, it can be accessed through the file history and a read only (FYI) agenda item should be added to the next [UX weekly call](https://docs.google.com/document/d/1Y_t6Oq4vqwA2eHPaXx0H6HkZiZ4um_lWHsqJIDstnEE) to inform everyone of the deprecation and how to proceed.

For a component:

- In a new branch, move the component page to the **DEPRECATED** section at the bottom of the page list.
- Append '(⚠️ DEPRECATED)' to the page name. Note that even though the whole component page is being moved, there may be some things that can be reused and moved into the new version of the component. Be sure that components are linked and referenced from the correct location — the assets panel is a helpful place to test references.
- Append '(⚠️ DEPRECATED)' to the the component and any base components in the page.
- When the component has been deprecated due to breaking changes in a newer version, link to the new version from the deprecated page.
- Deprecated pages have a `$red-100` (`#FDD4CD`) background color and `$red-700` (`#AE1800`) for page headings and descriptions that aren't part of the component.
- In the component configuration, add '⚠️ DEPRECATED' to the 'How to use this component' field, and add the link to the new component (if applicable) to the 'Link to documentation' field.

For a style:

- In a new branch, move the style to the **⚠️ DEPRECATED** section at the bottom of the style list.
- Maintain the style name and structure. For example, 'UI/Display/md' → '⚠️ DEPRECATED/UI/Display/md'.
- In the style editor, add '⚠️ DEPRECATED' to the description field.

## Helpful tips

Before making a change to a component:

- In a new branch create an example for each possible component configuration and make changes to the supported overrides. A supported override is a change that's explicitly provided as a property, like toggling icon visibility or editing text, or inherently part of the component use, like changing a label color or swapping an avatar image. The [Regressor](https://www.figma.com/community/plugin/1213220990852681773) plugin\* is helpful for quickly generating a matrix of component configurations. The matrix of configurations and overrides can help you catch where overrides break or where there's regression in positioning or other attributes and behavior.
- The [Visual Difference](https://www.figma.com/community/plugin/1077953882260191737) plugin\* is helpful to take before and after snapshots of your matrix in order to detect visual changes.

For deprecated components:

- Make sure the link to the deprecated component is intact. That is, make sure you aren't just creating a new component called **DEPRECATED**.

\* Plugins aren't required, but they can benefit certain workflows.
