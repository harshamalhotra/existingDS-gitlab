---
'@gitlab/ui': patch
---

Create shared logging utility for component development warnings

Implement centralized `logWarning` utility to standardize development
warnings across GitLab UI components. This improves debugging with
component-specific prefixes and simplifies maintenance by centralizing
logging behavior.

Key changes:
- Enhanced `logWarning` function with optional `context` parameter
- Migrated 5 components to use shared utility (GlTab, GlIcon,
  GlIllustration, GlFilteredSearch, GlCollapsibleListbox)
- Added test coverage for the utility
- Removed manual environment checks from components
