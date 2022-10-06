---
name: Color
---

## Chromatic palette

<note>View the [Data visualization > Color](/data-visualization/color) section for details about the data visualization palette.</note>

We have five primary chromatic hues and their color steps, totaling 55 color variables for use across the application. These colors give flexibility during the design process, while also providing a harmonious palette that looks consistent and in-line with our brand styles.

Though deciding which color to use depends on the situation, here are some general guidelines for using the chromatic palette hues:

- **Blue** indicates a current or active state. It communicates management, progress, connectivity, or organization.
- **Green** indicates success. It communicates save, create, add, available, done, approved, or resolved.
- **Orange** indicates attention is required. It communicates warning, pending, missing, or impeded progress.
- **Red** indicates a problem. It communicates a critical state, destructive action, error, failure, removal, stop, or decline.
- **Purple** is not assigned meaning in the same way the other chromatic hues are, and instead is associated with the GitLab brand. It communicates an affinity with the brand, and is used for things like illustrations or company-related announcements in the product.

<div class="row gl-mb-11">
  <color-palette
    class="col col-50 md gl-pb-7"
    background-class-prefix="c-background-"
    name="Blue"
    :shades="[
      {
        name: 'blue-50',
        code: '#e9f3fc',
      },
      {
        name: 'blue-100',
        code: '#cbe2f9',
      },
      {
        name: 'blue-200',
        code: '#9dc7f1',
      },
      {
        name: 'blue-300',
        code: '#63a6e9',
      },
      {
        name: 'blue-400',
        code: '#428fdc',
      },
      {
        name: 'blue-500',
        code: '#1f75cb',
        classes: ['color-priority', 'f-inverted']
      },
      {
        name: 'blue-600',
        code: '#1068bf',
        classes: ['f-inverted']
      },
      {
        name: 'blue-700',
        code: '#0b5cad',
        classes: ['f-inverted']
      },
      {
        name: 'blue-800',
        code: '#064787',
        classes: ['f-inverted']
      },
      {
        name: 'blue-900',
        code: '#033464',
        classes: ['f-inverted']
      },
      {
        name: 'blue-950',
        code: '#002850',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>
  <color-palette
    class="col col-50 md gl-pb-7"
    background-class-prefix="c-background-"
    name="Green"
    :shades="[
      {
        name: 'green-50',
        code: '#ecf4ee',
      },
      {
        name: 'green-100',
        code: '#c3e6cd',
      },
      {
        name: 'green-200',
        code: '#91d4a8',
      },
      {
        name: 'green-300',
        code: '#52b87a',
      },
      {
        name: 'green-400',
        code: '#2da160',
      },
      {
        name: 'green-500',
        code: '#108548',
        classes: ['color-priority', 'f-inverted']
      },
      {
        name: 'green-600',
        code: '#217645',
        classes: ['f-inverted']
      },
      {
        name: 'green-700',
        code: '#24663b',
        classes: ['f-inverted']
      },
      {
        name: 'green-800',
        code: '#0d532a',
        classes: ['f-inverted']
      },
      {
        name: 'green-900',
        code: '#0a4020',
        classes: ['f-inverted']
      },
      {
        name: 'green-950',
        code: '#072b15',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>
  <color-palette
    class="col col-50 md gl-mt-7 gl-pb-7"
    background-class-prefix="c-background-"
    name="Orange"
    :shades="[
      {
        name: 'orange-50',
        code: '#fdf1dd',
      },
      {
        name: 'orange-100',
        code: '#f5d9a8',
      },
      {
        name: 'orange-200',
        code: '#e9be74',
      },
      {
        name: 'orange-300',
        code: '#d99530',
      },
      {
        name: 'orange-400',
        code: '#c17d10',
      },
      {
        name: 'orange-500',
        code: '#ab6100',
        classes: ['color-priority', 'f-inverted']
      },
      {
        name: 'orange-600',
        code: '#9e5400',
        classes: ['f-inverted']
      },
      {
        name: 'orange-700',
        code: '#8f4700',
        classes: ['f-inverted']
      },
      {
        name: 'orange-800',
        code: '#703800',
        classes: ['f-inverted']
      },
      {
        name: 'orange-900',
        code: '#5c2900',
        classes: ['f-inverted']
      },
      {
        name: 'orange-950',
        code: '#421f00',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>
  <color-palette
    class="col col-50 md gl-mt-7"
    background-class-prefix="c-background-"
    name="Red"
    :shades="[
      {
        name: 'red-50',
        code: '#fcf1ef',
      },
      {
        name: 'red-100',
        code: '#fdd4cd',
      },
      {
        name: 'red-200',
        code: '#fcb5aa',
      },
      {
        name: 'red-300',
        code: '#f57f6c',
      },
      {
        name: 'red-400',
        code: '#ec5941',
      },
      {
        name: 'red-500',
        code: '#dd2b0e',
        classes: ['color-priority', 'f-inverted']
      },
      {
        name: 'red-600',
        code: '#c91c00',
        classes: ['f-inverted']
      },
      {
        name: 'red-700',
        code: '#ae1800',
        classes: ['f-inverted']
      },
      {
        name: 'red-800',
        code: '#8d1300',
        classes: ['f-inverted']
      },
      {
        name: 'red-900',
        code: '#660e00',
        classes: ['f-inverted']
      },
      {
        name: 'red-950',
        code: '#4d0a00',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>
  <color-palette
    class="col col-50 md gl-mt-7"
    background-class-prefix="c-background-"
    name="Purple"
    :shades="[
      {
        name: 'purple-50',
        code: '#f4f0ff',
      },
      {
        name: 'purple-100',
        code: '#e1d8f9',
      },
      {
        name: 'purple-200',
        code: '#cbbbf2',
      },
      {
        name: 'purple-300',
        code: '#ac93e6',
      },
      {
        name: 'purple-400',
        code: '#9475db',
      },
      {
        name: 'purple-500',
        code: '#7b58cf',
        classes: ['color-priority', 'f-inverted']
      },
      {
        name: 'purple-600',
        code: '#694cc0',
        classes: ['f-inverted']
      },
      {
        name: 'purple-700',
        code: '#5943b6',
        classes: ['f-inverted']
      },
      {
        name: 'purple-800',
        code: '#453894',
        classes: ['f-inverted']
      },
      {
        name: 'purple-900',
        code: '#2f2a6b',
        classes: ['f-inverted']
      },
      {
        name: 'purple-950',
        code: '#232150',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>
</div>

<div class="row gl-mb-11">
  <div class="col col-50 md">

## Neutral palette

The neutral palette is primarily used within components to help differentiate hierarchy. Use shades of gray as backgrounds, borders, and shadows to emphasize areas or set them apart.

<color-palette
    background-class-prefix="c-background-"
    :shades="[
      {
        name: 'white',
        code: '#ffffff',
      },
      {
        name: 'gray-10',
        code: '#f5f5f5',
      },
      {
        name: 'gray-50',
        code: '#f0f0f0',
      },
      {
        name: 'gray-100',
        code: '#dbdbdb',
      },
      {
        name: 'gray-200',
        code: '#bfbfbf',
      },
      {
        name: 'gray-300',
        code: '#999999',
      },
      {
        name: 'gray-400',
        code: '#868686',
      },
      {
        name: 'gray-500',
        code: '#666666',
        classes: ['f-inverted']
      },
      {
        name: 'gray-600',
        code: '#5e5e5e',
        classes: ['f-inverted']
      },
      {
        name: 'gray-700',
        code: '#525252',
        classes: ['f-inverted']
      },
      {
        name: 'gray-800',
        code: '#404040',
        classes: ['f-inverted']
      },
      {
        name: 'gray-900',
        code: '#303030',
        classes: ['f-inverted']
      },
      {
        name: 'gray-950',
        code: '#1f1f1f',
        classes: ['f-inverted']
      },
      {
        name: 'black',
        code: '#000000',
        classes: ['f-inverted']
      },
    ]"
    show-contrast-scores></color-palette>

  </div>

  <div class="col col-50 md">

## Transparency

Transparency is used only to indicate hover and active states within themes. Each theme has a series of four transparencies to utilize alpha levels ranging from 0.02 to 0.08.

<color-palette
    :shades="[
      {
        name: 't-gray-a-02',
        code: 'rgba($black, 0.02)',
      },
      {
        name: 't-gray-a-04',
        code: 'rgba($black, 0.04)',
      },
      {
        name: 't-gray-a-06',
        code: 'rgba($black, 0.06)',
      },
      {
        name: 't-gray-a-08',
        code: 'rgba($black, 0.08)',
      },
      {
        name: 't-gray-a-24',
        code: 'rgba($black, 0.24)',
      },
    ]"></color-palette>

  </div>
</div>

## Themes

A user may choose between ten different themes to customize the appearance of the application header and navigation sidebar in GitLab. Each theme draws inspiration from one of the primary chromatic colors, the neutral palette, or the corporate indigo color.

- Indigo and light indigo share the same `$t-indigo-` variables.
- Green and light green share the same `$t-green-` variables.
- Dark and light share the same `$t-gray-` variables.

<div class="row gl-mb-6">
  <div class="col col-25 md gl-pb-7">
    <color-palette
      name="Indigo / Light indigo"
      class="md"
      :shades="[
        {
          name: 't-indigo-50',
          code: '#f1f1ff',
        },
        {
          name: 't-indigo-100',
          code: '#dbdbf8',
        },
        {
          name: 't-indigo-200',
          code: '#c7c7f2',
        },
        {
          name: 't-indigo-300',
          code: '#a2a2e6',
        },
        {
          name: 't-indigo-400',
          code: '#8181d7',
        },
        {
          name: 't-indigo-500',
          code: '#6666c4',
          classes: ['f-inverted']
        },
        {
          name: 't-indigo-600',
          code: '#5252b5',
          classes: ['f-inverted']
        },
        {
          name: 't-indigo-700',
          code: '#41419f',
          classes: ['f-inverted']
        },
        {
          name: 't-indigo-800',
          code: '#303083',
          classes: ['f-inverted']
        },
        {
          name: 't-indigo-900',
          code: '#222261',
          classes: ['f-inverted']
        },
        {
          name: 't-indigo-950',
          code: '#14143d',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>
  <div class="col col-25 md gl-pb-7">
    <color-palette
      name="Blue"
      class="md"
      :shades="[
        {
          name: 't-blue-50',
          code: '#cdd8e3',
        },
        {
          name: 't-blue-100',
          code: '#b9cadc',
        },
        {
          name: 't-blue-200',
          code: '#a6bdd5',
        },
        {
          name: 't-blue-300',
          code: '#81a5c9',
        },
        {
          name: 't-blue-400',
          code: '#628eb9',
        },
        {
          name: 't-blue-500',
          code: '#4977a5',
          classes: ['f-inverted']
        },
        {
          name: 't-blue-600',
          code: '#346596',
          classes: ['f-inverted']
        },
        {
          name: 't-blue-700',
          code: '#235180',
          classes: ['f-inverted']
        },
        {
          name: 't-blue-800',
          code: '#153c63',
          classes: ['f-inverted']
        },
        {
          name: 't-blue-900',
          code: '#0b2640',
          classes: ['f-inverted']
        },
        {
          name: 't-blue-950',
          code: '#04101c',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>
  <div class="col col-25 md gl-pb-7">
    <color-palette
      name="Light blue"
      class="md"
      :shades="[
        {
          name: 't-light-blue-50',
          code: '#dde6ee',
        },
        {
          name: 't-light-blue-100',
          code: '#c1d4e6',
        },
        {
          name: 't-light-blue-200',
          code: '#a0bedc',
        },
        {
          name: 't-light-blue-300',
          code: '#74a3d3',
        },
        {
          name: 't-light-blue-400',
          code: '#4f8bc7',
        },
        {
          name: 't-light-blue-500',
          code: '#3476b9',
          classes: ['f-inverted']
        },
        {
          name: 't-light-blue-600',
          code: '#2268ae',
          classes: ['f-inverted']
        },
        {
          name: 't-light-blue-700',
          code: '#145aa1',
          classes: ['f-inverted']
        },
        {
          name: 't-light-blue-800',
          code: '#0e4d8d',
          classes: ['f-inverted']
        },
        {
          name: 't-light-blue-900',
          code: '#0c4277',
          classes: ['f-inverted']
        },
        {
          name: 't-light-blue-950',
          code: '#0a3764',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>
  <div class="col col-25 md gl-pb-7">
    <color-palette
      name="Green / Light green"
      class="md"
      :shades="[
        {
          name: 't-green-50',
          code: '#dde9de',
        },
        {
          name: 't-green-100',
          code: '#b1d6b5',
        },
        {
          name: 't-green-200',
          code: '#8cc497',
        },
        {
          name: 't-green-300',
          code: '#69af7d',
        },
        {
          name: 't-green-400',
          code: '#499767',
        },
        {
          name: 't-green-500',
          code: '#308258',
          classes: ['f-inverted']
        },
        {
          name: 't-green-600',
          code: '#25744c',
          classes: ['f-inverted']
        },
        {
          name: 't-green-700',
          code: '#1b653f',
          classes: ['f-inverted']
        },
        {
          name: 't-green-800',
          code: '#155635',
          classes: ['f-inverted']
        },
        {
          name: 't-green-900',
          code: '#0e4328',
          classes: ['f-inverted']
        },
        {
          name: 't-green-950',
          code: '#052e19',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>
  <div class="col col-25 md gl-mt-7">
    <color-palette
      name="Red"
      class="md"
      :shades="[
        {
          name: 't-red-50',
          code: '#f4e9e7',
        },
        {
          name: 't-red-100',
          code: '#ecd3d0',
        },
        {
          name: 't-red-200',
          code: '#e3bab5',
        },
        {
          name: 't-red-300',
          code: '#d59086',
        },
        {
          name: 't-red-400',
          code: '#c66e60',
        },
        {
          name: 't-red-500',
          code: '#ad4a3b',
          classes: ['f-inverted']
        },
        {
          name: 't-red-600',
          code: '#a13322',
          classes: ['f-inverted']
        },
        {
          name: 't-red-700',
          code: '#8f2110',
          classes: ['f-inverted']
        },
        {
          name: 't-red-800',
          code: '#761405',
          classes: ['f-inverted']
        },
        {
          name: 't-red-900',
          code: '#580d02',
          classes: ['f-inverted']
        },
        {
          name: 't-red-950',
          code: '#380700',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>
  <div class="col col-25 md gl-mt-7">
    <color-palette
      name="Light red"
      class="md"
      :shades="[
        {
          name: 't-light-red-50',
          code: '#faf2f1',
        },
        {
          name: 't-light-red-100',
          code: '#f6d9d5',
        },
        {
          name: 't-light-red-200',
          code: '#ebada2',
        },
        {
          name: 't-light-red-300',
          code: '#e07f6f',
        },
        {
          name: 't-light-red-400',
          code: '#d36250',
        },
        {
          name: 't-light-red-500',
          code: '#c24b38',
          classes: ['f-inverted']
        },
        {
          name: 't-light-red-600',
          code: '#b53a26',
          classes: ['f-inverted']
        },
        {
          name: 't-light-red-700',
          code: '#a02e1c',
          classes: ['f-inverted']
        },
        {
          name: 't-light-red-800',
          code: '#8b2212',
          classes: ['f-inverted']
        },
        {
          name: 't-light-red-900',
          code: '#751709',
          classes: ['f-inverted']
        },
        {
          name: 't-light-red-950',
          code: '#5c1105',
          classes: ['f-inverted']
        },
      ]"></color-palette>
  </div>

  <div class="col col-25 md gl-mt-7">
    <h3>Dark / Light</h3>
    <p>The dark and light (gray) themes use the <a href="#neutral-palette">neutral palette</a>.</p>
  </div>
</div>

## Accessibility

At GitLab, we are dedicated to continually improving the accessibility of the application. Pajamas satisfies the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) AA level for normal text. Learn more in [Accessibility](/accessibility/a11y).

- **Normal text** must have a contrast ratio of at least 4.5:1.
- **Large text** is defined as `14pt` Bold (`18.5px`) or `18pt` (`24px`) and must have a contrast ratio of at least 3:1.

### Passing level and contrast ratio

- **AAA** - Pass 7:1+
- **AA** - Pass 4.5:1+
- **AA+** - Pass, large text only 3:1+
- **F** - Doesn’t pass

Contrast ratios for each color step are calculated using white (`#fff`) and black (`#000`). The `50–400` steps all meet a 4.5:1 contrast ratio or higher against $gray-950 (`#1f1f1f`) or darker, while the `500–950` steps all meet a 4.5:1 contrast ratio against `$gray-10` (`#fafafa`) or lighter.

Use colors at least two steps apart to ensure distinguishable contrast for states and border/fill combinations.
