---
'@gitlab/ui': major
---

Refactor GlCollapsibleListbox button to combobox role

## Reason for this change

The GlCollapsibleListbox component wasn't announcing itself as a
combobox to screen readers. The component was also missing an
aria-activdescendant attribute.

## Breaking change updates

There are two breaking changes with this update. Both of these changes
affect screen reader usability and may cause automated accessibility
tests to fail in the future if not implemented:

1. See the [Custom toggle](https://design.gitlab.com/components/dropdown-combobox#custom-toggle-1) docs for details.
2. See the [Labeling the listbox](https://design.gitlab.com/components/dropdown-combobox#labeling-the-listbox) docs for details.
