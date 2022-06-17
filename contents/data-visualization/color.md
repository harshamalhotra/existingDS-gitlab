---
name: Color
---

## Data visualization palette

<note>View the [Foundations > Color](/product-foundations/colors) section for details about the UI, neutral, and theme palettes.</note>

Data visualization is critical content within GitLab. The presentation and interpretation of this content relies on visual nuance that is separate from the rest of the UI.

The data visualization palette is designed specifically for conveying different types of data. The meaning is derived from the data itself, not by color as a first measure. The palette is versatile enough to be applied in a number of [data types](#data-types) in both light and dark UI.

### Hues, steps, and variables

There are 5 hues, each with 11 steps for a total of 55 variables. The palette is designed for both light and dark UI where:

* Steps `50`—`500` meet or exceed a 3:1 contrast ratio on a dark `$gray-950` (`#1f1f1f`) surface.
* Steps `500`—`950` meet or exceed a 3:1 contrast ratio on a light `$white` (`#ffffff`) surface.

Because the `500` step has at least a 3:1 contrast ratio on both light and dark surfaces, there are 30 total variables that can be used for each surface.

<div class="color-palette row m-b-8">
  <div class="data-vis-blue col col-50">
    <h4 id="set-blue">Blue</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-blue-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-50</span>
          <span class="hex f-small">#e9ebff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-100</span>
          <span class="hex f-small">#d4dcfa</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-200</span>
          <span class="hex f-small">#b7c6ff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-300</span>
          <span class="hex f-small">#97acff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-400</span>
          <span class="hex f-small">#748eff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-500</span>
          <span class="hex f-small f-inverted">#5772ff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-600</span>
          <span class="hex f-small f-inverted">#445cf2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-700</span>
          <span class="hex f-small f-inverted">#3547de</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-800</span>
          <span class="hex f-small f-inverted">#232fcf</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-900</span>
          <span class="hex f-small f-inverted">#1e23a8</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-950</span>
          <span class="hex f-small f-inverted">#11118a</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-orange col col-50">
    <h4 id="set-orange">Orange</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-orange-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-50</span>
          <span class="hex f-small">#fae8d1</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-100</span>
          <span class="hex f-small">#f7d8b5</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-200</span>
          <span class="hex f-small">#f3c291</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-300</span>
          <span class="hex f-small">#eb9a5c</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-400</span>
          <span class="hex f-small">#e17223</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-500</span>
          <span class="hex f-small f-inverted">#d14e00</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-600</span>
          <span class="hex f-small f-inverted">#b24800</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-700</span>
          <span class="hex f-small f-inverted">#944100</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-800</span>
          <span class="hex f-small f-inverted">#6f3500</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-900</span>
          <span class="hex f-small f-inverted">#5c2b00</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-950</span>
          <span class="hex f-small f-inverted">#421e00</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-aqua col col-50">
    <h4 id="set-aqua">Aqua</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-aqua-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-50</span>
          <span class="hex f-small">#b8fff2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-100</span>
          <span class="hex f-small">#93fae7</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-200</span>
          <span class="hex f-small">#5eebdf</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-300</span>
          <span class="hex f-small">#25d2d2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-400</span>
          <span class="hex f-small">#0bb6c6</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-500</span>
          <span class="hex f-small f-inverted">#0094b6</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-600</span>
          <span class="hex f-small f-inverted">#0080a1</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-700</span>
          <span class="hex f-small f-inverted">#006887</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-800</span>
          <span class="hex f-small f-inverted">#004d67</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-900</span>
          <span class="hex f-small f-inverted">#003f57</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-950</span>
          <span class="hex f-small f-inverted">#00293d</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-green col col-50">
    <h4 id="set-green">Green</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-green-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-50</span>
          <span class="hex f-small">#ddfab7</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-100</span>
          <span class="hex f-small">#c9f097</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-200</span>
          <span class="hex f-small">#b0de73</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-300</span>
          <span class="hex f-small">#94c25e</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-400</span>
          <span class="hex f-small">#83ab4a</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-500</span>
          <span class="hex f-small f-inverted">#608b2f</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-600</span>
          <span class="hex f-small f-inverted">#487900</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-700</span>
          <span class="hex f-small f-inverted">#366800</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-800</span>
          <span class="hex f-small f-inverted">#275600</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-900</span>
          <span class="hex f-small f-inverted">#1a4500</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-950</span>
          <span class="hex f-small f-inverted">#0f3300</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-magenta col col-50">
    <h4 id="set-magenta">Magenta</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-magenta-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-50</span>
          <span class="hex f-small">#ffe3eb</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-100</span>
          <span class="hex f-small">#ffc9d9</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-200</span>
          <span class="hex f-small">#fcacc5</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-300</span>
          <span class="hex f-small">#ff85af</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-400</span>
          <span class="hex f-small">#f2639a</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-500</span>
          <span class="hex f-small f-inverted">#d84280</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-600</span>
          <span class="hex f-small f-inverted">#c52c6b</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-700</span>
          <span class="hex f-small f-inverted">#b31756</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-800</span>
          <span class="hex f-small f-inverted">#950943</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-900</span>
          <span class="hex f-small f-inverted">#7a0033</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-950</span>
          <span class="hex f-small f-inverted">#570028</span>
        </div>
      </div>
    </div>
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
* In a dark UI, all data visualization should be on a `$gray-950` (`#1f1f1f`) surface.

#### Visual separators

Colors meet or exceed a 3:1 contrast ratio against either a light or dark surface, but not necessarily each other. There are a few solutions, but the easiest is space between each element. This means at least a `1px` gap between elements, where the gap is the color of the surface. Alternately, a border of at least `1px` can be used on elements, where the border matches the surface color. Whether this is an actual gap, or border, the effect is the same.

#### Patterns

Pattern fills can create accessibility issues of their own, namely cognitive, and we currently do not support this as an option.

## Data types

### Sequential data

Sequential data uses steps within a single hue, and color lightness to indicate a range from low to high.

[Blue](#set-blue) is the default hue for charts with a single data range, and `$data-viz-blue-500` is the base step for both light and dark UI. Others hues can be used instead by following a similar pattern.

* Steps in a light UI go from `500` (low) to `950` (high) so that the higher the value, the darker it is and the more contrast it has against the light surface.
* Steps in a dark UI go from `500` (low) to `50` (high) so that the higher the value, the lighter is is and the more contrast it has against the dark surface.

<figure class="figure" role="figure" aria-label="Default color sequence in a light UI">
  <img src="/img/dv-sequential-blue-light-ui.svg" alt="Default color sequence" role="img" />
  <figcaption class="figure-caption">Default color sequence in a light UI</figcaption>
</figure>

<figure class="figure figure--dark" role="figure" aria-label="Default color sequence in a dark UI">
  <img src="/img/dv-sequential-blue-dark-ui.svg" alt="Default color sequence" role="img" />
  <figcaption class="figure-caption">Default color sequence in a dark UI</figcaption>
</figure>

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

<figure class="figure" role="figure" aria-label="Chevron-skipping pattern in a light UI">
  <img class="gl-mb-6" src="/img/dv-chevron-light-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img class="gl-mb-5" src="/img/dv-chips-light-ui.svg" alt="Step order from chevron-pattern for color sequence" role="img" />
  <figcaption class="figure-caption">Chevron-skipping pattern in a light UI</figcaption>
</figure>

<figure class="figure figure--dark" role="figure" aria-label="Chevron-skipping pattern in a dark UI">
  <img class="gl-mb-6" src="/img/dv-chevron-dark-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img class="gl-mb-5" src="/img/dv-chips-dark-ui.svg" alt="Step order from chevron pattern" role="img" />
  <figcaption class="figure-caption">Chevron-skipping pattern in a dark UI</figcaption>
</figure>

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

<figure class="figure" role="figure" aria-label="Cool to warm, and cool divergent sequences in a light UI">
  <img class="gl-mb-6" src="/img/dv-divergent-light-ui.svg" alt="Divergent pattern for color sequence" role="img" />
  <figcaption class="figure-caption">Cool to warm, and cool divergent sequences in a light UI</figcaption>
</figure>

<figure class="figure figure--dark" role="figure" aria-label="Cool to warm, and cool divergent sequences in a dark UI">
  <img class="gl-mb-6" src="/img/dv-divergent-dark-ui.svg" alt="Divergent pattern for color sequence" role="img" />
  <figcaption class="figure-caption">Cool to warm, and cool divergent sequences in a dark UI</figcaption>
</figure>

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
* For a dark UI, that is a contrast ratio of at least 3:1 on `$gray-950` (`#1f1f1f`)

## Resources

* [Inclusive Color Sequences for Data Viz in 6 Steps](https://medium.com/design-ibm/inclusive-color-sequences-for-data-viz-in-6-steps-712869b910c2) - Design at IBM
* [Re-approaching Color](https://design.lyft.com/re-approaching-color-9e604ba22c88) - Lyft Design
* [ColorBox](https://www.colorbox.io/) - Lyft Design
