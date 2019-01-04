<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="structure md">
      <h1>Component status</h1>
      <p>Components and their variants have statuses reflecting their state of completion, documented on this page. <br />
        Check back here anytime to see current component status information.</p>
      <p>See more detailed progress on our Design System <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">issue tracker</a>.</p>
      <h2>Legend</h2>
      <table
        class="m-t-6 m-b-6"
        style="width: 65%;"
      >
        <tbody>
          <tr>
            <th class="header">Icon</th>
            <th class="header">Status</th>
            <th class="header">Description</th>
          </tr>
          <tr>
            <td>🚫</td>
            <td>Upcoming</td>
            <td>Planned, not started yet</td>
          </tr>
          <tr>
            <td>⚠️</td>
            <td>In progress</td>
            <td>Not finished yet</td>
          </tr>
          <tr>
            <td>🆕</td>
            <td>New</td>
            <td>Newly available, implement with caution</td>
          </tr>
          <tr>
            <td>✅</td>
            <td>Implemented</td>
            <td>Ready to use</td>
          </tr>
        </tbody>
      </table>

      <h2>Status</h2>
      <!-- <p>A paragraph.</p> -->
      <table
        class="m-t-6 m-b-6"
        style="width: 65%;"
      >
        <tbody>
          <tr>
            <th class="header">Foundations</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../../foundations/colors">Colors</a></td>
            <td>✅</td>
          </tr>
          <tr>
            <td><a href="../../foundations/iconography">Iconography</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../foundations/motion">Motion</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../foundations/illustration">Illustration</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../foundations/typography">Typography</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../foundations/interactions">Interactions</a></td>
            <td>✅</td>
          </tr>
          <tr>
            <td><a href="../../foundations/saving-and-feedback">Saving and feedback</a></td>
            <td>🚫</td>
          </tr>
          <tr>
            <th class="header">Component</th>
            <th class="header">Status</th>
          </tr>
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree.components"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/components/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                <template v-if="component.hasInfo">
                  ⚠️
                </template>
                <template v-else>
                  🚫
                </template>
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
          <tr>
            <th class="header">Regions</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../../regions/empty-states">Empty states</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/filters">Filters</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/navigation">Navigation</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/search">Search</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <th class="header">Content</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../../content/voice-tone">Voice & tone</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../content/terminology">Terminology</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../content/punctuation">Punctuation</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <th class="header">Usability</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td><a href="../../usability/a11y">Accessibility</a></td>
            <td>🚫</td>
          </tr>
          <tr>
            <td><a href="../../usability/i18n">Internationalization</a></td>
            <td>🚫</td>
          </tr>
          <tr>
            <td><a href="../../usability/helping-users">Helping users</a></td>
            <td>⚠️</td>
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
            <td><a href="../../styles/Colors">Colors</a></td>
            <td>✅</td>
          </tr>
          <tr>
            <td><a href="../../styles/iconography">Iconography</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../styles/motion">Motion</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../styles/illustration">Illustration</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../styles/typography">Typography</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../styles/cursors">Cursors</a></td>
            <td>⚠️</td>
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
            <td><a href="../../regions/empty-states">Empty states</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/filters">Filters</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/xx">Navigation</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../regions/xx">Search</a></td>
            <td>⚠️</td>
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
            <td><a href="../../content/voice-tone">Voice & tone</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../content/terminology">Terminology</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td><a href="../../content/punctuation">Punctuation</a></td>
            <td>⚠️</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>⚠️</td>
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
            <td><a href="../../components/accessibility">Accessibility</a></td>
            <td>🚫</td>
          </tr>
          <tr>
            <td><a href="../../components/internationalization">Internationalization</a></td>
            <td>🚫</td>
          </tr>
          <tr>
            <td><a href="../../components/helping-users">Helping users</a></td>
            <td>✅</td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTree: null,
    };
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult;
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
</script>
