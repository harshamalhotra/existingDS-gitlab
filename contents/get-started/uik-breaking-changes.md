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

- Move it to the **DEPRECATED** section at the bottom of the page list.
- Append '(⚠️ DEPRECATED)' to the page name.
- When the component has been deprecated due to breaking changes in a newer version, link to the new version from the deprecated page.
- Deprecated pages have a `$red-100` (`#FDD4CD`) background color and `$red-700` (`#AE1800`) for page headings and descriptions that aren't part of the component.
- In the component configuration, add '⚠️ DEPRECATED' to the 'How to use this component' field, and add the link to the new component (if applicable) to the 'Link to documentation' field.

For a style:

- Move the style to the **⚠️ DEPRECATED** section at the bottom of the style list.
- Maintain the style name and structure. For example, 'UI/Display/md' → '⚠️ DEPRECATED/UI/Display/md'.
- In the style editor, add '⚠️ DEPRECATED' to the description field.
