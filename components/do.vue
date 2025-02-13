<script>
import { GlIcon } from '../helpers/gitlab_ui';

export default {
  components: {
    GlIcon,
  },
};
</script>

<template>
  <div class="md">
    <strong
      class="app-styles gl-mb-2 gl-flex gl-items-center gl-gap-2 gl-font-bold gl-text-success"
    >
      <gl-icon name="check" variant="success" />
      Do:
    </strong>
    <slot></slot>
  </div>
</template>
