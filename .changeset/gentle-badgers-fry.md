---
'@gitlab/ui': minor
---

Color design tokens DTCG format conversion script

The Design Token Community Group (DTCG) Color Module promotes authoring
color design tokens with `colorSpace`, `components`, `alpha`, and `hex`
(optional) properties.

Figma uses decimal RGB color format to import/export design tokens to
Figma Variables.

These changes:

- Add a script to automate updating color string values (hex `#000` and
  rgba `rgba(0,0,0,0)`) to DTCG color module objects with sRGB color
  space
- Add preprocessor to style-dictionary to select `$value.hex` if present
  or compute CSS `rgba(0,0,0,0)` string from sRGB `$value.components`
  and `$value.alpha` properties.
- Update documentation to reflect DTCG color module object shape.
