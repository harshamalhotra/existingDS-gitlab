---
'@gitlab/ui': minor
---

Update GlTokenSelector to proper combobox

The GlTokenSelector was not announcing its list of preset tokens
or user-added tokens to screen readers. This changeset updates the
component to a WAI-ARIA spec combobox (input plus listbox).
