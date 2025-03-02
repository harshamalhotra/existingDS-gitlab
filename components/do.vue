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
    <div class="app-styles gl-mb-2">
      <gl-badge icon="check" variant="success">Do</gl-badge>
    </div>
    <slot></slot>
  </div>
</template>
