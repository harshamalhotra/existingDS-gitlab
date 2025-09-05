---
'@gitlab/ui': patch
---

Reverts spacing-scale and border-radius design tokens

The introduction of spacing-scale and border-radius design tokens broke the assets
compilation in GitLab. We are reverting these changes for now.
