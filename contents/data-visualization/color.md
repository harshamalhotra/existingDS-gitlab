---
name: Color
---

## Data visualization palette

<note>View the [Foundations > Color](/product-foundations/color) section for details about the UI, neutral, and theme palettes.</note>

Data visualization is critical content within GitLab. The presentation and interpretation of this content relies on visual nuance that is separate from the rest of the UI.

The data visualization palette is designed specifically for conveying different types of data. The meaning is derived from the data itself, not by color as a first measure. The palette is versatile enough to be applied in a number of [data types](#data-types) in both light and dark UI.

### Hues, steps, and variables

There are 5 hues, each with 11 steps for a total of 55 variables. The palette is designed for both light and dark UI where:

* Steps `50`—`500` meet or exceed a 3:1 contrast ratio on a dark `$gray-950` (`#1f1e24`) surface.
* Steps `500`—`950` meet or exceed a 3:1 contrast ratio on a light `$white` (`#ffffff`) surface.

Because the `500` step has at least a 3:1 contrast ratio on both light and dark surfaces, there are 30 total variables that can be used for each surface.

<div class="gl-display-grid gl-grid-template-columns-2 gl-gap-7 gl-mb-9">
  <color-palette
    class="md"
    name="Blue"
    :shades="[
      {
        name: 'data-viz-blue-50',
        code: '#e9ebff',
      },
      {
        name: 'data-viz-blue-100',
        code: '#d2dcff',
      },
      {
        name: 'data-viz-blue-200',
        code: '#b7c6ff',
      },
      {
        name: 'data-viz-blue-300',
        code: '#97acff',
      },
      {
        name: 'data-viz-blue-400',
        code: '#7992f5',
      },
      {
        name: 'data-viz-blue-500',
        code: '#617ae2',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-blue-600',
        code: '#4e65cd',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-blue-700',
        code: '#3f51ae',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-blue-800',
        code: '#374291',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-blue-900',
        code: '#303470',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-blue-950',
        code: '#2a2b59',
        classes: ['f-inverted']
      },
    ]"></color-palette>

  <color-palette
    class="md"
    name="Orange"
    :shades="[
      {
        name: 'data-viz-orange-50',
        code: '#fae8d1',
      },
      {
        name: 'data-viz-orange-100',
        code: '#f5d6b3',
      },
      {
        name: 'data-viz-orange-200',
        code: '#eebd8c',
      },
      {
        name: 'data-viz-orange-300',
        code: '#e99b60',
      },
      {
        name: 'data-viz-orange-400',
        code: '#e07e41',
      },
      {
        name: 'data-viz-orange-500',
        code: '#c95d2e',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-orange-600',
        code: '#b14f18',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-orange-700',
        code: '#92430a',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-orange-800',
        code: '#6f3500',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-orange-900',
        code: '#5e2f05',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-orange-950',
        code: '#4b2707',
        classes: ['f-inverted']
      },
    ]"></color-palette>
  
  <color-palette
    class="md"
    name="Aqua"
    :shades="[
      {
        name: 'data-viz-aqua-50',
        code: '#b5fefd',
      },
      {
        name: 'data-viz-aqua-100',
        code: '#93f2ef',
      },
      {
        name: 'data-viz-aqua-200',
        code: '#5edee3',
      },
      {
        name: 'data-viz-aqua-300',
        code: '#32c5d2',
      },
      {
        name: 'data-viz-aqua-400',
        code: '#00acc4',
      },
      {
        name: 'data-viz-aqua-500',
        code: '#0090b1',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-aqua-600',
        code: '#007b9b',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-aqua-700',
        code: '#006381',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-aqua-800',
        code: '#00516c',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-aqua-900',
        code: '#004059',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-aqua-950',
        code: '#00344b',
        classes: ['f-inverted']
      },
    ]"></color-palette>

  <color-palette
    class="md"
    name="Green"
    :shades="[
      {
        name: 'data-viz-green-50',
        code: '#ddfab7',
      },
      {
        name: 'data-viz-green-100',
        code: '#c6ed94',
      },
      {
        name: 'data-viz-green-200',
        code: '#b0d97b',
      },
      {
        name: 'data-viz-green-300',
        code: '#94c25e',
      },
      {
        name: 'data-viz-green-400',
        code: '#81ac41',
      },
      {
        name: 'data-viz-green-500',
        code: '#619025',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-green-600',
        code: '#4e7f0e',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-green-700',
        code: '#366800',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-green-800',
        code: '#275600',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-green-900',
        code: '#1a4500',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-green-950',
        code: '#133a03',
        classes: ['f-inverted']
      },
    ]"></color-palette>

  <color-palette
    class="md"
    name="Magenta"
    :shades="[
      {
        name: 'data-viz-magenta-50',
        code: '#ffe3eb',
      },
      {
        name: 'data-viz-magenta-100',
        code: '#ffccdb',
      },
      {
        name: 'data-viz-magenta-200',
        code: '#fcacc5',
      },
      {
        name: 'data-viz-magenta-300',
        code: '#f88aaf',
      },
      {
        name: 'data-viz-magenta-400',
        code: '#e86e9a',
      },
      {
        name: 'data-viz-magenta-500',
        code: '#cf4d81',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-magenta-600',
        code: '#b93d71',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-magenta-700',
        code: '#9a2e5d',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-magenta-800',
        code: '#7c214f',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-magenta-900',
        code: '#661e3a',
        classes: ['f-inverted']
      },
      {
        name: 'data-viz-magenta-950',
        code: '#541d31',
        classes: ['f-inverted']
      },
    ]"></color-palette>

  </div>
</div>

## Usage

### Color sequence

We categorize data into three general types: [sequential](#sequential-data), [categorical](#categorical-data), and [divergent](#divergent-data). Each type uses color differently to best present the data.

A color sequence helps colorblind users distinguish data visualization content. With 5 hues in the palette, we can alternate both the hue and steps to create sequences with color and contrast differences.

Data types are covered in more detail below, but here’s a general summary of how each uses color sequences:

* **Sequential data** uses steps within a single hue to present a single data range.
* **Categorical data** uses hues to differentiate categories, and like sequential data, steps within each hue to present a data range.
* **Divergent data** uses hue transitions to present data ranges on either side of a common central point.

### Surfaces, visual separators, and patterns

Per [WCAG 2.1 Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html), UI components and graphical objects must have a contrast ratio of at least 3:1 against adjacent colors. This means sufficient contrast against the surface (background), and each other.

#### Surfaces

* In a light UI, all data visualization should be on a `$white` (`#ffffff`) surface.
* In a dark UI, all data visualization should be on a `$gray-950` (`#1f1e24`) surface.

#### Visual separators

Colors meet or exceed a 3:1 contrast ratio against either a light or dark surface, but not necessarily each other. There are a few solutions, but the easiest is space between each element. This means at least a `1px` gap between elements, where the gap is the color of the surface. Alternately, a border of at least `1px` can be used on elements, where the border matches the surface color. Whether this is an actual gap, or border, the effect is the same.

#### Patterns

Pattern fills can create accessibility issues of their own, namely cognitive, and we currently do not support this as an option.

## Data types

### Sequential data

Sequential data uses steps within a single hue, and color lightness to indicate a range from low to high.

Blue is the default hue for charts with a single data range, and `$data-viz-blue-500` is the base step for both light and dark UI. Others hues can be used instead by following a similar pattern.

* Steps in a light UI go from `500` (low) to `950` (high) so that the higher the value, the darker it is and the more contrast it has against the light surface.
* Steps in a dark UI go from `500` (low) to `50` (high) so that the higher the value, the lighter is is and the more contrast it has against the dark surface.

<figure-img label="Default color sequence in a light UI" src="/img/dv-sequential-blue-light-ui.svg"></figure-img>

<figure-img dark label="Default color sequence in a dark UI" src="/img/dv-sequential-blue-dark-ui.svg"></figure-img>

<todo>Include example of chart with sequential data</todo>

**Potential applications:** stacked bar charts, heat maps, choropleth maps, funnels, cycle diagrams, clusters, pyramids, etc.

### Categorical data

Categorical data (also known as qualitative or thematic) uses hue to differentiate categories (qualitative), and lightness to differentiate a data range (quantitative).

A chevron-skipping sequence is used to alternate both hue and lightness to increase contrast between sibling elements.

The default sequence loops through different steps of each hue in the following order:

1. Blue
1. Orange
1. Aqua
1. Green
1. Magenta

Blue is always the default starting point, and `$data-viz-blue-500` is the base step for both light and dark UI.

<figure-img label="Chevron-skipping pattern in a light UI">
  <img class="gl-mb-5" src="/img/dv-chevron-light-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img src="/img/dv-chips-light-ui.svg" alt="Step order from chevron-pattern for color sequence" role="img" />
</figure-img>

<figure-img dark label="Chevron-skipping pattern in a dark UI">
  <img class="gl-mb-5" src="/img/dv-chevron-dark-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img src="/img/dv-chips-dark-ui.svg" alt="Step order from chevron pattern" role="img" />
</figure-img>

<todo>Include example of chart with categorical data</todo>

<todo>Add a sequence generator</todo>

**Potential applications:** bar charts, pie charts, line graphs, stacked area charts, etc.

### Divergent data

Divergent data moves in opposite directions from a central point. Color is used to indicate distance from the center by stepping darker in a light UI to each end, while stepping lighter in a dark UI to each end.

The pattern for selecting values skips every other step by default, and has a range of 11 steps including the central point. For data with a smaller range, the pattern could be a subset that starts at the same central point, but does not extend as far to each end. For data with a larger range, add skipped values into the sequence, starting from the center out.

The number of steps required to make a useful progression would not meet 3:1 contrast ratios by using fill alone (each hue has 6 steps with enough contrast for each surface), so a border that uses the `500` value from the relative hue surrounds low-contrast fills.

There are two divergent options, choose the one that works best with the type of data being shown.

* A cool to warm hue transition is helpful for showing a decrease vs. increase from a central point, where the warm steps show the increase.
* A cool to cool hue transition could be useful for showing data based on a central point, where either end of the range does not necessarily have positive or negative connotation.

<figure-img label="Cool to warm, and cool divergent sequences in a light UI" src="/img/dv-divergent-light-ui.svg"></figure-img>

<figure-img dark label="Cool to warm, and cool divergent sequences in a dark UI" src="/img/dv-divergent-dark-ui.svg"></figure-img>

<todo>Include example of chart with divergent data</todo>

**Potential applications:** butterfly charts, choropleth maps, sparklines, etc.

### Data associated with system status

Colors are often associated with system status in data visualizations (for example, green for success and red for failure). However, because using green and red together can be problematic for some color blindness conditions, try to utilize the recommended palette as a first pass.

When representing a success status alone against the generic data, use `$data-viz-blue-500` for all and `$data-viz-green-700` for success.

If it's necessary to show success and failure states together in the same graph, `$data-viz-green-500` and `$data-viz-magenta-600` is the recommended combination (`$data-viz-green-500` and `$data-viz-magenta-400` in a dark UI). To avoid indicating status by color alone, use text and additional visual indicators when possible to clarify the status. To ensure sufficient contrast ratio, follow the [color guidelines](#usage) for specific data types. 

<todo>Include example of recommended color combinations</todo>

## Accessibility

At GitLab, we are dedicated to continually improving the accessibility of the application. Color is no exception. Every step of every hue in the data visualization palette has been evaluated to satisfy a 3:1 contrast ratio against a light or dark surface.

* For light UI, that is a contrast ratio of at least 3:1 on `$white` (`#ffffff`).
* For a dark UI, that is a contrast ratio of at least 3:1 on `$gray-950` (`#1f1e24`)

## Resources

* [Inclusive Color Sequences for Data Viz in 6 Steps](https://medium.com/design-ibm/inclusive-color-sequences-for-data-viz-in-6-steps-712869b910c2) - Design at IBM
* [Re-approaching Color](https://design.lyft.com/re-approaching-color-9e604ba22c88) - Lyft Design
* [ColorBox](https://www.colorbox.io/) - Lyft Design
