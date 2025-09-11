---
name: Animated icon
description: The Animated Icon component is used to display animated visual representations that enhance user experience by conveying actions, statuses, or interactive elements more effectively than static icons. It is intended for dynamic visual feedback in the UI.
extendedNotice:
  contactPreset: animation
---

## Examples

<story-viewer component="base-animated-icon" story="morph" title="Morphed by action (click) icons"></story-viewer>

<story-viewer component="base-animated-icon" story="infinite" title="Infinite animated by action (hover) icons"></story-viewer>

## Guidelines

### When to use

- To indicate loading states or transitions.
- To provide visual emphasis for an interactive element.
- To enhance engagement with subtle motion feedback.

| Icon name | User action | When to use |
| --- | --- | --- |
| `GlAnimatedChevronRightDownIcon`, `GlAnimatedChevronLgRightDownIcon` | Click, expand a section | Accordion component, settings section, global navigation section |
| `GlAnimatedChevronDownUpIcon`, `GlAnimatedChevronLgDownUpIcon` | Click | Comment block, CRUD component, dropdown component |
| `GlAanimatedDuoChatIcon` | Hover | GitLab Duo chat button |
| `GlAnimatedLoaderIcon` | — | Loading state, GitLab Duo writing an answer |
| `GlAnimatedNotificationIcon` | Click | Subscribe/unsubscribe button |
| `GlAnimatedSidebarIcon` | Click | Show/hide a sidebar button |
| `GlAnimatedSmileIcon` | Hover | Add reaction button |
| `GlAnimatedSortIcon` | Click | Sort button |
| `GlAnimatedStarIcon` | Click | Star/unstar button |
| `GlAnimatedTodoIcon` | Click | Add/remove from todo list button |
| `GlAnimatedUploadIcon` | Hover | Drop zone |

### When not to use

- For essential UI actions where animation might cause unnecessary distraction.
- In places where a static icon can sufficiently communicate the message.
- If excessive animations could negatively impact performance.

### Categories

<todo>Add descriptions for morphed and infinitely animated icon categories.</todo>

### Accessibility

- Use `aria-label` to describe the purpose of the animation for screen readers.
- Ensure that animations are subtle and do not trigger motion sensitivity issues.
- Allow users to disable animations where necessary.

## Code reference

<story-viewer component="base-animated-icon" title="Animated icons" view-mode="docs"></story-viewer>
