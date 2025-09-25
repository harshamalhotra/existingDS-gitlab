---
'@gitlab/ui': patch
---

Guard base dropdown's `containsElement` method

This ensures that consumers' specs don't fail due to not having access
to the containsElement method that the BaseDropdown component
exposes.
