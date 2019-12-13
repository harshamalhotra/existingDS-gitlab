---
name: Dropdowns
vueComponents: 
  - GlDropdown
related: 
  - button
  - checkbox
  - dropdowns
  - forms
  - segmented-control
---

Dropdowns lists (or simply dropdowns) are used to provide the user with a list of options, which can be either actions or input values. Dropdown lists are triggered by dropdown [buttons](/components/button) or [form inputs](/components/forms).

## Usage

There are two main types of dropdowns:

|Type|Purpose|
|--- |--- |
|Plain dropdowns|These dropdowns usually present a list of actions. They can be thought of as a collection of buttons.|
|Checkmark dropdowns|These dropdowns are used as inputs. The individual rows in these dropdowns can show a checkmark to indicate that they have been selected or enabled. They are a collection of checkmarks. A dash (–) should be used instead of a checkmark when the row's value is present in some of the elements the dropdown is modifying but not others.|

Use the following table to see when a dropdown should be used over other alternative components.

|  | [Single checkbox](/components/checkboxes) | [Toggle](/components/toggle) | [Single-select dropdown](/components/dropdowns) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkboxes) | [Multi-select dropdown](/components/dropdowns) |
|---|---|---|---|---|---|---|---|
| Available options | 1 | 1 | >1 or unknown | >1 and <6 | >1 and <6 | >1 and <6 | >1 or unknown |
| Selectable options | 1 | 1 | 1 | 1 | 1 | >1 or even all | >1 or even all |
| Pre-selected options | Possible | Possible | Possible | Yes, 1 | Yes, 1 | Possible | Possible |
| Disabled options | Possible | Possible | Possible | Possible | No | Possible | Possible |
| Option descriptions | Possible | Possible | Possible | Possible | No | Possible | Possible |
| UI space | Little room | Not a problem | Little room | Not a problem | Not a problem | Not a problem | Little room |
| Example | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns | Project visibility setting | 7, 30, 90 days timeframe in analytics dashboards | Scopes selection in User settings > Applications | Add/remove labels |

### Behavior

By default, dropdowns are placed below and aligned to the left of the element they stem from. However, when there isn't enough space in the viewport, the dropdown should be moved above and/or be aligned to the right of the element it stems from.

If there are more rows than fit the dropdown, an overlay with a fade effect will be added at the top or bottom of the dropdown to indicate there are more rows to be scrolled. When reaching the end of the scrollable area, the overlay will be removed.

### Accessories

There are some special elements that can be included in dropdowns to better adapt them to different situations.

#### Dropdown header

A header can be added to make the dropdown's purpose clear. For example, the header _Assign milestone_ can be added to make it clear that selecting an option will modify an issue's milestone instead of applying a filter.

Todo: An example of a dropdown with a header.

#### Section headers

Section headers are used to categorize the options in a dropdown. A separator must always be included in between sections.

Todo: An example of a dropdown with section headers.

#### Filter box

If there are more than 10 elements in the list, it may be necessary to include a filter box.

Todo: An example of a dropdown with a filter box.

#### Fixed rows

A limited amount of rows that don't scroll can be fixed at the bottom of a dropdown. For example, the dropdown used to switch between issue boards has two fixed options at the bottom: _Create new board_ and _Delete board_.

Todo: An example of a dropdown with fixed rows.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout-specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Dropdowns](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/dropdown-spec-previews/)

## Resources

* [Drop down usability](https://baymard.com/blog/drop-down-usability)
