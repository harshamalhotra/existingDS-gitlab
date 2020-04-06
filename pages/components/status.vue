<script>
import contentTree from '../../content_tree.json'; // eslint-disable-line import/no-unresolved

const statusIcons = {
  upcoming: '🚫',
  'in-progress': '⚠',
  built: '⚒',
  integrated: '✅',
  deprecated: '❌',
};

export default {
  data() {
    return {
      contentTree,
    };
  },
  methods: {
    getStatusIcon(status) {
      return statusIcons[status];
    },
  },
  head: {
    title: 'Component status',
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="structure md">
      <h1>Component status</h1>
      <p>Components and their variants have statuses reflecting their state of completion, documented on this page. <br />
        Check back here anytime to see current component status information.</p>
      <p>See more detailed progress on our Design System <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues">issue tracker</a>.</p>
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
            <td>Create, Build, and Style stages are not yet finished</td>
          </tr>
          <tr>
            <td>⚒</td>
            <td>Built</td>
            <td>Complete and ready to use but not yet in production</td>
          </tr>
          <tr>
            <td>✅</td>
            <td>Integrated</td>
            <td>Integrated into production</td>
          </tr>
          <tr>
            <td>❌</td>
            <td>Deprecated</td>
            <td>No longer in use</td>
          </tr>
        </tbody>
      </table>

      <table
        class="m-t-6 m-b-6"
        style="width: 65%;"
      >
        <tbody>
          <tr>
            <th class="header">Icon</th>
            <th class="header">Badge</th>
            <th class="header">Description</th>
          </tr>
          <tr>
            <td>🆕</td>
            <td>New</td>
            <td>Newly available, integrate with caution</td>
          </tr>
          <tr>
            <td class="app-styles"><span class="badge badge-primary">Vue</span></td>
            <td>Vue component</td>
            <td>Exists within GitLab-UI</td>
          </tr>
        </tbody>
      </table>

      <h2>Status</h2>
      <table
        class="m-t-6 m-b-6"
        style="width: 65%;"
      >
        <tbody>
          <tr>
            <th class="header">Foundations</th>
            <th class="header">Status</th>
          </tr>
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree['product-foundations']"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/product-foundations/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                {{getStatusIcon(component.status)}}
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
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
                {{getStatusIcon(component.status)}}
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
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree.regions"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/regions/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                {{getStatusIcon(component.status)}}
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
          <tr>
            <th class="header">Content</th>
            <th class="header">Status</th>
          </tr>
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree.content"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/content/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                {{getStatusIcon(component.status)}}
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
          <tr>
            <th class="header">Accessibility</th>
            <th class="header">Status</th>
          </tr>
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree.accessibility"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/accessibility/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                {{getStatusIcon(component.status)}}
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
          <tr>
            <th class="header">Usability</th>
            <th class="header">Status</th>
          </tr>
          <template v-if="contentTree">
            <tr
              v-for="component in contentTree.usability"
              :key="component.id"
            >
              <td>
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/usability/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <td class="app-styles">
                {{getStatusIcon(component.status)}}
                <b-badge
                  v-if="component.hasVueComponent"
                  variant="primary"
                >Vue</b-badge>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
