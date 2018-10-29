<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Grid</h1>

      <h2>Responsive UI</h2>
      <p>GitLab is a responsive experience that works well across all screen sizes, from mobile devices to large monitors. In order to provide a great user experience, the core functionality (browsing files, creating issues, writing comments, etc.) is available at all resolutions. However, due to size limitations, some secondary functionality may be hidden on smaller screens. This functionality is limited to rare actions that aren’t necessary on small devices.</p>
      <h3>Breakpoints</h3>
      <p>These breakpoints define specifications for different screens, devices, and orientations.</p>
      <p class="todo">Todo: Define breakpoints</p>

      <h2>Page containers</h2>
      <p>Users can choose between two kinds of <a 
        href="https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width" 
        target="_blank"
      >layout width</a> which set the behavior of page containers: <strong>fixed</strong> (default) or <strong>fluid</strong>.
      </p><p>The <strong>fluid</strong> layout does not impose any width restrictions to page containers, so elements expand across the screen to fill all available space.
      </p><p>The <strong>fixed</strong> layout applies the ideal maximum width to page containers according to the elements being displayed so they can be experienced using the most appropriate width.</p>

      <p><a href="/components/breadcrumbs">Breadcrumbs</a> always share the width of the page container that follows it.</p>

      <h3>Fixed layout</h3>
      <p>In the fixed layout, there are three possible maximum widths for page containers. For each width, you must consider which one is best to consume and interact with the elements on the page. The following widths include a <code>16px</code> padding on both sides.</p>
      <ul>
        <li><strong><code>990px</code></strong>: By default, all pages use this maximum width. It’s ideal for forms, simple pages, tables with few columns, or pages that focus on written content.</li>
        <li><strong><code>1280px</code></strong>: For pages that have a lot of horizontal elements, such as content-heavy tables/lists or tables with a lot of columns.</li>
        <li><strong>Full-width</strong> (100%): Exception for pages where the interaction benefits from more screen real-estate, such as charts/graphs and other data visualizations, or boards.</li>
      </ul>
      <p>We recommend that you first try and use <strong><code>990px</code></strong> unless another width is more suited. A width can also be chosen based on consistency between similar views in different pages, even if another width would have been more suitable.</p>

      <h2>Baseline grid</h2>
      <p>Adhering to a baseline grid allows us to be more efficient by removing decision making while maintaining a consistent rhythm between components and typography.
      </p><h3>Components</h3>
      <p>Using a baseline grid of 8px allows flexibility when scaling and defining our <a href="/layout/spacing">spacing</a> without overloading the system with options. By using multiples of 8 to define dimensions, padding, and margins of components, we ensure every UI element aligns to the pixel grid.</p>
      <div class="baseline a-center m-b-6">
        <div class="w-13 h-3"></div>
        <div class="w-13 h-5 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-6 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-7 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3"></div>
      </div>
      <p>When text is used within a UI element, set the line-height to be consistent with the baseline grid and use padding to define the size of the component.</p>
      <div class="baseline a-center">
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3 c-orange-background-200"></div>
        <div class="w-13 h-3 c-green-background-200"></div>
        <div class="w-13 h-5 c-blue-background-300 label">Text</div>
        <div class="w-13 h-3 c-green-background-200"></div>
        <div class="w-13 h-3 c-orange-background-200"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3"></div>
      </div>
      <h3>Typography</h3>
      <p>All typography aligns to a 4px baseline grid. This allows for readable line heights at all sizes. See our <a href="/foundations/typography">typography</a> for more information about how to use our type scale.</p>
      <h4>UI typography</h4>
      <div class="baseline--typography distributed">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>Paragraph</p>
        <span class="label">Label</span>
      </div>
      <h4>Markdown</h4>
      <div class="baseline--typography">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>Paragraph</p>
      </div>
      <h4>Compact markdown</h4>
      <div class="baseline--typography md compact">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>Paragraph</p>
      </div>
    </div>
  </div>
</template>
