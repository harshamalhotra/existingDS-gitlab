<script>
import { GlIcon } from '../helpers/gitlab_ui';
import packageJson from '../package.json';

const {
  bugs: { url: issuesUrl },
} = packageJson;

export default {
  components: {
    GlIcon,
  },
  props: {
    issue: {
      type: String,
      default: '',
      required: false,
    },
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
    class="gl-mb-5 gl-flex gl-flex-wrap gl-gap-2 gl-rounded-default gl-bg-feedback-neutral gl-p-5 gl-text-base gl-leading-20 gl-text-feedback-neutral"
  >
    <div class="gl-flex gl-items-center gl-gap-3">
      <gl-icon name="document" :size="16" class="gl-fill-feedback-neutral" />
      <span class="gl-font-bold">TODO: </span>
    </div>
    <span class="gl-mr-auto">
      <slot></slot>
    </span>
    <a v-if="issue" class="gl-link" :href="issue">View issue</a>
    <a v-else class="gl-link" :href="newIssueUrl">Create an issue</a>
  </span>
</template>
