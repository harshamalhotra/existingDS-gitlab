---
name: Color
---

## Color use

There are three color palettes used in the product:

1. [UI](#ui) - For all surfaces, content, and user interface (UI) elements.
1. [Themes](#themes) - For user preferences and to differentiate GitLab instances.
1. [Data visualization](/data-visualization/color) - For all data visualization, including charts and graphs.

Colors are [constant design tokens](/product-foundations/design-tokens#constant-design-tokens) that keep use predictable and consistent. The main function of color is to optimize the visual presentation of content by establishing a meaningful hierarchy, indicating interaction, and communicating meaning. The following principles help to think about color use consistently.

### Design principles

The same palettes are used for light and dark UI, though they may be applied differently in each. The following principles and considerations apply generally, and to light and dark UI respectively.

- Surfaces are top lit by a single, invisible, pure white light source.
- Surfaces reflect light and don't emit it or glow.
- Forward elements are lighter and receding ones are darker.
- UI elements, like buttons and alerts, rely on chromatic hues and neutrals for meaning and hierarchy, and adapt contrast based on the surface.

| Light UI | Dark UI |
| ------ | ------ |
| Surfaces are made of light materials and text uses darker colors. | Surfaces are made of dark materials and text uses lighter colors. Some elements will feel dimmed, while others feel inverted. |
| Shadows and borders are stronger indicators of depth than brightness. | Brightness is a stronger indicator of depth than shadows or borders. |
| More color may be needed to indicate meaning or draw attention to an element as more light is being cast from the display. | Color stands out more in dark UI, and as a result, less of it may be needed to convey the same meaning or draw the same amount of attention as in light UI. |

## UI

### Chromatic

We have five primary chromatic color ramps that include a total 55 colors for use across the application. These colors give flexibility during the design process, while also providing a harmonious palette that looks consistent and in-line with our brand styles.

Though deciding which color to use depends on the situation, here are some general guidelines for using the chromatic hues:

#### Blue

Blue indicates a current or active state. It communicates management, progress, connectivity, or organization.

<story-viewer component="tokens-color-base-light" story="blue" title="Tokens"></story-viewer>

#### Green

Green indicates success. It communicates save, create, add, available, done, approved, or resolved.

<story-viewer component="tokens-color-base-light" story="green" title="Tokens"></story-viewer>

#### Orange

Orange indicates attention is required. It communicates warning, pending, missing, or impeded progress.

<story-viewer component="tokens-color-base-light" story="orange" title="Tokens"></story-viewer>

#### Red

Red indicates a problem. It communicates a critical state, destructive action, error, failure, removal, stop, or decline.

<story-viewer component="tokens-color-base-light" story="red" title="Tokens"></story-viewer>

#### Purple

Purple is not assigned meaning in the same way the other chromatic hues are, and instead is associated with the GitLab brand. It communicates an affinity with the brand, and is used for things like illustrations or company-related announcements in the product.

<story-viewer component="tokens-color-base-light" story="purple" title="Tokens"></story-viewer>

#### Neutral

Neutrals are primarily used for surfaces and within components to help differentiate hierarchy. Use shades of gray as backgrounds, borders, and shadows to emphasize areas or set them apart.

<story-viewer component="tokens-color-base-light" story="gray" title="Tokens"></story-viewer>

### Transparency

Transparency is used only to effectively shade an element in relation to the surface below. See [blend modes and opacity](#blend-modes-and-opacity).

#### Gray

<story-viewer component="tokens-color-transparency" story="gray" title="Tokens"></story-viewer>

#### White

<story-viewer component="tokens-color-transparency" story="white" title="Tokens"></story-viewer>

## Themes

A user may choose between ten different themes to customize the appearance of the navigation in GitLab. Each theme draws inspiration from one of the hues in the UI palette.

### Indigo / Light indigo

Indigo and light indigo share the same `$theme-indigo-` SCSS variables.

<story-viewer component="tokens-color-themes-light" story="theme-indigo" title="Tokens"></story-viewer>

### Green / Light green

Green and light green share the same `$theme-green-` SCSS variables.

<story-viewer component="tokens-color-themes-light" story="theme-green" title="Tokens"></story-viewer>

### Blue

<story-viewer component="tokens-color-themes-light" story="theme-blue" title="Tokens"></story-viewer>

### Light blue

<story-viewer component="tokens-color-themes-light" story="theme-light-blue" title="Tokens"></story-viewer>

### Red

<story-viewer component="tokens-color-themes-light" story="theme-red" title="Tokens"></story-viewer>

### Light red

<story-viewer component="tokens-color-themes-light" story="theme-light-red" title="Tokens"></story-viewer>

### Dark / Light

The dark and light (gray) themes use the [neutral palette](#neutral).

## Interactive states

Color changes can be used to emphasize user actions. When used, they must be combined with other visual feedback. For example, `:focus` color changes are normally accompanied with a focus ring.

Typical state changes (light UI):

- `:hover` a color becomes one step darker than at rest.
- `:focus` a color becomes one step darker than at rest, matching `:hover` color.
- `:active` a color becomes two steps darker than at rest.
- Where there aren't enough steps to follow this pattern, prioritize `:hover` and `:focus` becoming a step darker.

<figure-img alt="Example button state color changes" label="Interactive color state example" src="/img/color-interactive.svg">
  <template #caption>
    A primary confirm button example with a <code>$blue-500</code> fill at rest (1), a <code>$blue-600</code> fill for hover and focus (2, 3), and a <code>$blue-700</code> fill when active (4). The color changes are combined with other visual feedback (cursor, focus ring) to communicate information about the interactive state.
  </template>
</figure-img>

## Blend modes and opacity

It's preferred to used solid colors (no transparency or effects) for the highest level of predictability and consistency. However, there are limited instances where transparency (alpha) or `mix-blend-mode` can be used. For example, a component or element that can be placed on multiple surface colors, where the surface color may conflict with the component color or reduce contrast below a [satisfactory contrast ratio](/accessibility/visual#contrast).

A [tertiary button](/components/button#categories) is one component that uses a `mix-blend-mode` because the background on hover can be the same, or have similar lightness to, the surface color. Likewise, the chevron icons in the [navigation sidebar](/usability/navigation-sidebar) in GitLab use `mix-blend-mode` to maintain at least a 3:1 contrast ratio against various theme background colors.

If a specific hex value is desired, use a solid color instead of approximating it with transparency or a blend mode.

## Accessibility

### Text presentation

At GitLab, we are dedicated to continually improving the accessibility of the application. Pajamas satisfies the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) AA level for normal text. Learn more in [Accessibility](/accessibility/a11y).

- **Normal text** - Must have a contrast ratio of at least 4.5:1.
- **Large text** - Defined as `14pt` Bold (`18.5px`) or `18pt` (`24px`) and must have a contrast ratio of at least 3:1.
- **AAA** - Pass 7:1+.
- **AA** - Pass 4.5:1+.
- **AA+** - Pass, large text only 3:1+.
- **F** - Doesn’t pass.

Contrast ratios for each color step are calculated against light (`$white`/`#fff`) and dark (`$gray-950`/`#1f1e24`) foreground colors. The `50–400` steps all meet a 4.5:1 contrast ratio or higher against `$gray-950` (`#1f1e24`) or darker, while the `500–950` steps all meet a 4.5:1 contrast ratio against `$gray-10` (`#fbfafd`) or lighter.

Color should never be the only visual means of communicating information ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)).
