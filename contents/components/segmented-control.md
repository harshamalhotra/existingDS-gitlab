---
name: Segmented control
vueComponents:
  - GlSegmentedControl
related:
  - buttons
  - dropdowns
  - radio-button
  - toggle
---

A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active. There must always be one option active.

## Usage

A segmented control is commonly used as an alternative to [dropdown](/components/dropdowns), [radio button](/components/radio-button), or [toggle](/components/toggle) components, but it comes with its own limitations. Because it takes up more space, a segmented control should only be used for up to 5 options. It is ideal when there are 2 or 3 because they visually expose the options available to a user. A segmented control should be used instead of a dropdown when there are only a few options and enough room to fit within the UI. It requires fewer interactions and is easier to use on mobile devices, thus having a smaller effect on the user’s cognitive load. Results are effective and visible immediately similar to a toggle.

A segmented control may replace a group of radio buttons or a toggle to allow users to choose between two or multiple options. In order to help choosing the right solution follow the table below.

Todo: Add replacement-comparison-table

### Labels

Label positioning rules are the same as they are for [forms](/components/forms). They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.

The label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (for example, switching between a day, week or month view in a calendar UI).

[[Example:segmented-control-whitespace]]

Button labels need to be as short as possible and should ideally be only one word. Sometimes, that can be done by removing the repeating word and using it as a label (above the segmented control). For example, instead of having button labels “Show whitespace” and “Hide whitespace” use “Whitespace” as a label and only “Show” and “Hide” as button labels.

Alternatively icons can be used to replace button labels.

### Sizing

The options must be equal in width and prominence. If there are 3 options, each of them should take 33% of the total width of segmented control.

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for the Segmented control](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/segmented-control-spec-previews/)
