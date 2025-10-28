---
'@gitlab/ui': patch
---

Fix rendering bug in GlFormFields due to missing key. 
Focus was lost when adding fields. Also the ID associated with
fields would be incremented when it should stay constant.
Also make it possible to pass a custom ID attribute.
