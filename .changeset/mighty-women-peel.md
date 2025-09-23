---
'@gitlab/ui': minor
---

Refactor GlTokenSelector to accessible combobox widget

This non-breaking change refactors the `GlTokenContainer`
to move ARIA attributes down into the nested text input.
It also removes the `state` prop from `GlTokenContainer`. 
The `state` prop is already being passed to the parent
`GlTokenSelector` and was not being used. This was verified
through automated tests passing without having to refactor
or remove logic. It was further tested manually in Storybook.

This change was made to accommodate screen reader users who
were not hearing the child listbox options be announced.