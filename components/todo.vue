<script>
import { GlIcon } from '@gitlab/ui';
import packageJson from '../package.json';

const {
  bugs: { url: issuesUrl },
} = packageJson;

export default {
  components: {
    GlIcon,
  },
  computed: {
    newIssueUrl() {
      const { $route } = this;
      const title = this.$scopedSlots.default()[0].text;
      return `${issuesUrl}/new?issue[title]=${title}%20for%20${$route.params.slug}&issue[description]=/label%20~%22component%3A${$route.params.slug}%22`;
    },
  },
};
</script>

<template>
  <span
    class="admonition admonition--todo gl-rounded-base app-styles gl-rounded-base gl-flex-wrap gl-mb-5"
  >
    <div class="gl-display-flex gl-align-items-center">
      <gl-icon name="document" :size="16" class="gl-mr-3 gl-text-gray-500" />
      <span class="gl-mr-2 admonition-type">TODO: </span>
    </div>
    <span class="gl-mr-auto">
      <slot></slot>
    </span>
    <a class="gl-link" :href="newIssueUrl">Create an issue</a>
  </span>
</template>
