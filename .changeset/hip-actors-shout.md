---
'@gitlab/ui': minor
---

`GlFormFields` can now render a fieldsets.

- Add `fieldset` property to `fields` prop in `GlFormFields` as a 
  condition for `label-for` binding on `GlFormGroup`.
- Update `GlFormFields` logic to only include label when `field.label`
  is provided
