<script>
import { GlBadge } from '../helpers/gitlab_ui';

export default {
  components: {
    GlBadge,
  },
};
</script>

<template>
  <div class="md">
    <div class="gl-mb-2">
      <gl-badge icon="close" variant="danger">Don’t</gl-badge>
    </div>
    <slot></slot>
  </div>
</template>
