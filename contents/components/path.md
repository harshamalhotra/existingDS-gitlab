---
name: Path
description: Paths are horizontal process flows composed of a series of stages.
docs: in-progress
vueComponents:
  - GlPath
related:
  - tabs
---

## Usage
 
### Do

- Use paths rather than tabs when there is a process with unique content at each stage, for example, a [DevOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/).

### Don't

- Nest paths.
- Use as an indicator of a user’s progress within a process, for example, in a checkout flow.

## Types

Paths are designed to be flexible. Therefore, there are a number of options and combinations which can be used to represent a process as accurately as possible.

### Simple path

A simple path only contains stages with labels.

[[Example:path-basic]]

### Counter path

A counter path contains stages with a counter [badge](/components/badge) showing the number of items it contains. If there are any ”All,” “Overview,” or “Summary” stages, then the counter of that stage should equal the sum total of all the others. Counters shouldn’t be included if they break this pattern.

Todo: Add demo

### Metric path

A metric path contains stages with an abbreviated metric, such as 12d or 1.5h. The metric can be an integer or float, but should be limited to 5 digits maximum (and fewer when possible). Don’t use multiple metric types on a single path. For example, 1d and 6kg. 

[[Example:path-with-metric]]

### Combination path

Some processes may be more complicated and require a path with a combination of icons, counters, and metrics. An icon can also be used at a specific stage, such as an “Overview,” to make it stand out more. Try to limit path complication by only using necessary attributes.

[[Example:path-full]]

## Custom ordering

Todo: Add usage documentation about custom ordering. See https://gitlab.com/gitlab-org/gitlab/-/issues/216227 for progress.

## Specifications

### Design

Paths share similar overflow properties as [tabs](/components/tabs).

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add design specs link

### Accessibility

#### Keyboarding

| Key    | Action                                                                                                                                                                                                       |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Tab`    | When focus is outside of the path, moves focus to the active stage. If focus is on the active stage, moves focus to the content within the content of that stage |
| `→`      | Focuses and activates the next stage in the path. If the current tab is the last tab in the tab list, it activates the first tab. |
| `←`      | Focuses and activates the previous stage in the path. If the current tab is the first tab in the tab list, it activates the last tab. |

