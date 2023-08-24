---
name: Path
description: Paths are horizontal process flows composed of a series of stages.
components:
  - base-path
related:
  - tabs
  - stepper
---

## Examples

<story-viewer component="base-path"></story-viewer>

<story-viewer component="base-path" story="all-options"></story-viewer>

<todo>Add to Pajamas UI Kit.</todo>

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- When there is a process with unique content at each stage, for example, a [DevOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/). 

### When not to use

- To segment tasks that are related and linear, use a [stepper](/components/stepper) instead.
- To represent percentage of completion or progress of an activity, process, or task, use a [progress bar](/components/progress-bar) instead.

### Variants

1. **Simple Path**: A simple path only contains stages with labels.
1. **Counter Path**: A counter path contains stages with a counter [badge](/components/badge) showing the number of items it contains. If there are any ”All,” “Overview,” or “Summary” stages, then the counter of that stage should equal the sum total of all the others. Counters shouldn’t be included if they break this pattern.
1. **Metric Path**: A metric path contains stages with an abbreviated metric, such as 12d or 1.5h. The metric can be an integer or float, but should be limited to 5 digits maximum (and fewer when possible). Don’t use multiple metric types on a single path. For example, 1d and 6kg. 
1. **Combination Path**: Some processes may be more complicated and require a path with a combination of icons, counters, and metrics. An icon can also be used at a specific stage, such as an “Overview,” to make it stand out more. Try to limit path complication by only using necessary attributes.

### Accessibility

#### Keyboarding

| Key | Action |
|-----|--------|
| <kbd>Tab</kbd>  | When focus is outside of the path, moves focus to the active stage. If focus is on the active stage, moves focus to the content within the content of that stage |
| <kbd>→</kbd>    | Focuses and activates the next stage in the path. If the current tab is the last tab in the tab list, it activates the first tab. |
| <kbd>←</kbd>    | Focuses and activates the previous stage in the path. If the current tab is the first tab in the tab list, it activates the last tab. |
