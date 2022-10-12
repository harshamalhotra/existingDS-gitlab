---
name: Grid
---

## Responsive UI

GitLab is a responsive experience that works well across all screen sizes, from mobile devices to large monitors. In order to provide a great user experience, the core functionality (browsing files, creating issues, writing comments, and so on) is available at all resolutions. However, due to size limitations, some secondary functionality may be hidden on smaller screens. This functionality is limited to rare actions that aren’t necessary on small devices.

### Breakpoints

These breakpoints define specifications for different screens, devices, and orientations.

- **`xs`**: <576px
- **`sm`**: ≥576px
- **`md`**: ≥768px
- **`lg`**: ≥992px
- **`xl`**: ≥1200px

## Page containers

Users can choose between two kinds of [layout width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) which set the behavior of page containers: **fixed** (default) or **fluid**.

The **fluid** layout does not impose any width restrictions to page containers, so elements expand across the screen to fill all available space.

The **fixed** layout applies the ideal maximum width to page containers according to the elements being displayed so they can be experienced using the most appropriate width.

[Breadcrumbs](/components/breadcrumb) always share the width of the page container that follows it.

### Fixed layout

In the fixed layout, there are three possible maximum widths for page containers. For each width, you must consider which one is best to consume and interact with the elements on the page. The following widths include a `16px` padding on both sides.

- **`990px`**: By default, all pages use this maximum width. It’s ideal for forms, simple pages, tables with few columns, or pages that focus on written content.
- **`1280px`**: For pages that have a lot of horizontal elements, such as content-heavy tables/lists or tables with a lot of columns.
- **Full-width** (100%): Exception for pages where the interaction benefits from more screen real-estate, such as charts/graphs and other data visualizations, or boards.

We recommend that you first try and use **`990px`** unless another width is more suited. A width can also be chosen based on consistency between similar views in different pages, even if another width would have been more suitable.

## Baseline grid

Adhering to a baseline grid allows us to be more efficient by removing decision making while maintaining a consistent rhythm between components and typography.

### Components

Using a baseline grid of 8px allows flexibility when scaling and defining our [spacing](/layout/spacing) without overloading the system with options. By using multiples of 8 to define dimensions, padding, and margins of components, we ensure every UI element aligns to the pixel grid.

<div class="baseline gl-mx-auto gl-mb-6">
  <div class="w-13 h-3"></div>
  <div class="w-13 h-5 c-blue-background-300"></div>
  <div class="w-13 h-3"></div>
  <div class="w-13 h-6 c-blue-background-300"></div>
  <div class="w-13 h-3"></div>
  <div class="w-13 h-7 c-blue-background-300"></div>
  <div class="w-13 h-3"></div>
  <div class="w-13 h-3"></div>
</div>

When text is used within a UI element, set the line-height to be consistent with the baseline grid and use padding to define the size of the component.

<div class="baseline gl-mx-auto">
  <div class="w-13 h-3"></div>
  <div class="w-13 h-3 c-orange-background-200"></div>
  <div class="w-13 h-3 c-green-background-200"></div>
  <div class="w-13 h-5 c-blue-background-300 label">Text</div>
  <div class="w-13 h-3 c-green-background-200"></div>
  <div class="w-13 h-3 c-orange-background-200"></div>
  <div class="w-13 h-3"></div>
  <div class="w-13 h-3"></div>
</div>

### Typography

All typography aligns to a 4px baseline grid. This allows for readable line heights at all sizes. See our [type scale documentation](/product-foundations/type-scales) for more information.

#### UI typography

<div class="baseline--typography distributed">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>Paragraph</p>
<span class="label">Label</span></div>

#### Markdown

<div class="baseline--typography">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>Paragraph</p>
</div>

#### Compact markdown

<div class="baseline--typography md compact">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>Paragraph</p>
</div>
