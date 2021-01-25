<script>
import contentTree from '../../content_tree.json'; // eslint-disable-line import/no-unresolved

const statusIcons = {
  upcoming: 'muted',
  'in-progress': 'info',
  complete: 'success',
};

export default {
  data() {
    return {
      contentTree,
    };
  },
  head: {
    title: 'Component status',
  },
  methods: {
    getBadgeVariant(status) {
      return statusIcons[status];
    },
    readableString(status) {
      const string = status.split('-').join(' ');
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="structure md">
      <h1>Component status</h1>
      <p>
        Components and their variants have statuses reflecting their state of completion, documented
        on this page. <br />
        Check back here anytime to see current component status information.
      </p>
      <p>
        See more detailed progress on our Design System
        <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
          >issue tracker</a
        >.
      </p>
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
            <tr v-for="component in contentTree.components" :key="component.id">
              <td colspan="2">
                <nuxt-link :key="`link-${component.id}`" :to="`/components/${component.id}`">{{
                  component.name
                }}</nuxt-link>
              </td>
              <!-- Figma -->
              <td class="app-styles">
                <a
                  v-if="component.figma"
                  :href="component.figma"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><gl-badge :variant="getBadgeVariant('complete')">Complete</gl-badge></a
                >
                <div v-else>
                  <gl-badge :variant="getBadgeVariant('upcoming')">Upcoming</gl-badge>
                </div>
              </td>
              <!-- Documentation -->
              <td class="app-styles">
                <nuxt-link :key="`link-${component.id}`" :to="`/components/${component.id}`"
                  ><gl-badge :variant="getBadgeVariant(component.docs)">{{
                    readableString(component.docs)
                  }}</gl-badge></nuxt-link
                >
              </td>
              <!-- Ready to use in production -->
              <!-- TODO: Add new link address after creating direct links to Vue component on pages -->
              <td class="app-styles">
                <nuxt-link
                  v-if="component.hasVueComponent"
                  :key="`link-${component.id}`"
                  :to="`/components/${component.id}`"
                  ><gl-badge :variant="getBadgeVariant('complete')">Complete</gl-badge></nuxt-link
                >
                <div v-else>
                  <gl-badge :variant="getBadgeVariant('upcoming')">Upcoming</gl-badge>
                </div>
              </td>
              <!-- GitLab UI -->
              <td class="app-styles">
                <a
                  v-if="component.gitlab_ui"
                  :href="component.gitlab_ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><gl-badge :variant="getBadgeVariant('complete')">Complete</gl-badge></a
                >
                <div v-else>
                  <gl-badge :variant="getBadgeVariant('in-progress')">In progress</gl-badge>
                </div>
              </td>
              <!-- Accessibility review -->
              <td class="app-styles">
                <div>
                  <gl-badge :variant="getBadgeVariant(component.a11y)">{{
                    readableString(component.a11y)
                  }}</gl-badge>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
</template>
