<script>
import contentTree from '../../content_tree.json'; // eslint-disable-line import/no-unresolved

const statusIcons = {
  upcoming: '🚫',
  'in-progress': '⚠',
  complete: '✅',
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
        style="width: 50%;"
      >
        <tbody>
          <tr>
            <th class="header">Icon</th>
            <th class="header">Status</th>
          </tr>
          <tr>
            <td>🚫</td>
            <td>Upcoming</td>
          </tr>
          <tr>
            <td>⚠️</td>
            <td>In progress</td>
          </tr>
          <tr>
            <td>✅</td>
            <td>Complete</td>
          </tr>
        </tbody>
      </table>

      <h2>Status</h2>
      <table class="m-t-6 m-b-6 status-table">
        <template v-if="contentTree">
          <tbody>
            <tr>
              <th class="header" colspan="2">Component</th>
              <th class="header">Figma</th>
              <th class="header">Docs - Usage</th>
              <th class="header">Docs - Vue</th>
              <th class="header">GitLab UI</th>
              <th class="header">Accessibility</th>
            </tr>
            <tr
              v-for="component in contentTree.components"
              :key="component.id"
            >
              <td colspan="2">
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/components/${component.id}`"
                >{{ component.name }}</nuxt-link>
              </td>
              <!-- Figma -->
              <td class="app-styles">
                <a
                  v-if="component.figma"
                  :href="component.figma"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{getStatusIcon('complete')}}</a>
                <div v-else>
                  {{getStatusIcon('upcoming')}}
                </div>
              </td>
              <!-- Documentation -->
              <td class="app-styles">
                <nuxt-link
                  :key="`link-${component.id}`"
                  :to="`/components/${component.id}`"
                >{{getStatusIcon(component.docs)}}</nuxt-link>
              </td>
              <!-- Ready to use in production -->
              <!-- TODO: Add new link address after creating direct links to Vue component on pages -->
              <td class="app-styles">
                <nuxt-link
                  v-if="component.hasVueComponent"
                  :key="`link-${component.id}`"
                  :to="`/components/${component.id}`"
                >{{getStatusIcon('complete')}}</nuxt-link>
                <div v-else>{{getStatusIcon('upcoming')}}</div>
              </td>
              <!-- GitLab UI -->
              <td class="app-styles">
                <a
                  v-if="component.gitlab_ui"
                  :href="component.gitlab_ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{getStatusIcon('complete')}}</a>
                <div v-else>
                  {{getStatusIcon('in-progress')}}
                </div>
              </td>
              <!-- Accessibility review -->
              <td class="app-styles">
                <div>{{getStatusIcon(component.a11y)}}</div>
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
</template>
