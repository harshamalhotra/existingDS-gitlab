---
name: Toggles
vueComponents:
  - GlToggle
related:
  - checkbox
  - radio-button
  - segmented-control
---

A toggle is a visual switch which acts as a boolean.

## Usage

Use toggles when there is a choice between two selections, it has a default state, the results are effective and noticeable immediately, and there is **no need** for a user to click a submit button.

Avoid using toggles when a submit button is needed. This confuses users and dilutes the experience by preventing instant results.

Use the following table to see when a toggle should be used over other alternative components.

|  | [Single checkbox](/components/checkboxes) | [Toggle](/components/toggle) | [Single-select dropdown](/components/dropdowns) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkboxes) | [Multi-select dropdown](/components/dropdowns) |
|---|---|---|---|---|---|---|---|
| Available options | 1 | 1 | >1 or unknown | >1 and <6 | >1 and <6 | >1 and <6 | >1 or unknown |
| Selectable options | 1 | 1 | 1 | 1 | 1 | >1 or even all | >1 or even all |
| Pre-selected options | Possible | Possible | Possible | Yes, 1 | Yes, 1 | Possible | Possible |
| Disabled options | Possible | Possible | Possible | Possible | No | Possible | Possible |
| Option descriptions | Possible | Possible | Possible | Possible | No | Possible | Possible |
| UI space | Little room | Not a problem | Little room | Not a problem | Not a problem | Not a problem | Little room |
| Example | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns | Project visibility setting | 7, 30, 90 days timeframe in analytics dashboards | Scopes selection in User settings > Applications | Add/remove labels |

### Labels

Toggle labels are set in bold, positioned above the element by default, and should describe what the control will do when the switch is on in a concise, direct, and short way.

In rare cases and exceptions, the label can be placed to the left of the input field. Examples include non inline positioned elements.

### Visual Design

Toggles should use high-contrast colors to indicate the states - On and Off.

## Demo

[[Example:toggle-default]]

[[Example:toggle-disabled]]

[[Example:toggle-loading]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for toggles](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/toggles-spec-previews/)
