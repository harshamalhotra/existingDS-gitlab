<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="structure md">
      <h1>Component status</h1>
      <p>Components and their variants have statuses reflecting their state of completion, documented on this page. <br/>
      Check back here anytime to see current component status information.</p>
      <p>See more detailed progress on our Design System <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">issue tracker</a>.</p>
      <h2>Legend</h2>
      <table class="m-t-6 m-b-6" style="width: 65%;">
        <tbody>
          <tr>
            <th class="header">Icon</th>
            <th class="header">Status</th>
            <th class="header">Description</th>
          </tr>
          <tr>
            <td>🛑</td>
            <td>Planned</td>
            <td>Upcoming shortly</td>
          </tr>
          <tr>
            <td>🍊</td>
            <td>Work in progress</td>
            <td>Not finished yet</td>
          </tr>
          <tr>
            <td>🎉</td>
            <td>New</td>
            <td>Newly available, implement with caution</td>
          </tr>
          <tr>
            <td>✅</td>
            <td>Ready</td>
            <td>Ready to implement</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Components</h2>
      <!-- <p>A paragraph.</p> -->
      <table class="m-t-6 m-b-6" style="width: 65%;">
        <tbody>
          <tr>
            <th class="header">Styles</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../styles/Colors">Colors</a></td>
            <td>✅</td>
          </tr>
          <tr>
            <td><a href="../styles/iconography">Iconography</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/motion">Motion</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/illustration">Illustration</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/typography">Typography</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/cursors">Cursors</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <th class="header">Component</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../components/alerts">Alerts</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/avatar">Avatars</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/badges">Badges</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/breadcrumbs">Breadcrumbs</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/buttons">Buttons</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/code-snippets">Code snippets</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/data-tables">Data tables</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/data-visualization">Data visualization</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/date-picker">Date picker</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/dropdowns">Dropdowns</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/file-uploader">File uploader</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/forms">Forms</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/forms">Forms</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/labels">Labels</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/lists">Lists</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/modals">Modals</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/notifications">Notifications</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/pagination">Pagination</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/popovers">Popovers</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/search">Search</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/segmented-contro.">Segmented control</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/skeleton-loader">Skeleton loader</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/spinner">Spinner</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/tabs">Tabs</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../components/tags">Tags</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/toggles">Toggles</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/tooltips">Tooltips</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <th class="header">Regions</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../regions/empty-states">Empty states</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/filters">Filters</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/navigation">Navigation</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/search">Search</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <th class="header">Content</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../content/voice-tone">Voice & tone</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../content/terminology">Terminology</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../content/punctuation">Punctuation</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <th class="header">Usability</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../components/a11y">Accessibility</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/i18n">Internationalization</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/helping-users">Helping users</a></td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>


      <!-- <h2>Styles</h2>
      <table class="m-t-6 m-b-6">
        <thead>
          <tr>
            <th class="header">Styles</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="../styles/Colors">Colors</a></td>
            <td>✅</td>
          </tr>
          <tr>
            <td><a href="../styles/iconography">Iconography</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/motion">Motion</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/illustration">Illustration</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/typography">Typography</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../styles/cursors">Cursors</a></td>
            <td>🍊</td>
          </tr>
        </tbody>
      </table> -->

      <!-- <h2>Regions</h2>
      <table class="m-t-6 m-b-6">
        <thead>
          <tr>
            <th class="header">Regions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="../regions/empty-states">Empty states</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/filters">Filters</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/xx">Navigation</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../regions/xx">Search</a></td>
            <td>🍊</td>
          </tr>
        </tbody>
      </table> -->

      <!-- <h2>Content</h2>
      <table class="m-t-6 m-b-6">
        <thead>
          <tr>
            <th class="header">Content</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="../content/voice-tone">Voice & tone</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../content/terminology">Terminology</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td><a href="../content/punctuation">Punctuation</a></td>
            <td>🍊</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>🍊</td>
          </tr>
        </tbody>
      </table> -->

      <!-- <h2>Usability</h2>
      <table class="m-t-6 m-b-6">
        <thead>
          <tr>
            <th class="header">Usability</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="../components/accessibility">Accessibility</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/internationalization">Internationalization</a></td>
            <td>🛑</td>
          </tr>
          <tr>
            <td><a href="../components/helping-users">Helping users</a></td>
            <td>✅</td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div> 
</template>
