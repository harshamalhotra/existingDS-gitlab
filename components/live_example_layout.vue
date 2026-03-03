<script>
import uniqueId from 'lodash/uniqueId';
import { GlButton, GlCard } from '../helpers/gitlab_ui';

export default {
  name: 'LiveExampleLayout',
  components: {
    GlButton,
    GlCard,
  },
  data() {
    return {
      isSourceVisible: false,
    };
  },
  computed: {
    sourcePanelId() {
      return uniqueId('source-code-panel-');
    },
  },
  methods: {
    toggleSource() {
      this.isSourceVisible = !this.isSourceVisible;
      // Keep focus on the button after toggling
      this.$nextTick(() => {
        if (this.$refs.toggleButton && this.$refs.toggleButton.$el) {
          this.$refs.toggleButton.$el.focus();
        }
      });
    },
  },
};
</script>

<template>
  <gl-card
    class="gl-mb-5"
    body-class="background-example-pattern gl-@container"
    footer-class="!gl-p-0 !gl-pt-2"
  >
    <template #default>
      <div class="gl-relative gl-z-2">
        <slot name="preview"></slot>
      </div>
    </template>
    <template #footer>
      <gl-button
        ref="toggleButton"
        category="tertiary"
        variant="confirm"
        size="small"
        :aria-expanded="isSourceVisible ? 'true' : 'false'"
        :aria-controls="sourcePanelId"
        @click="toggleSource"
      >
        {{ isSourceVisible ? 'Hide source' : 'Show source' }}
      </gl-button>
      <div
        v-show="isSourceVisible"
        :id="sourcePanelId"
        class="gl-grow gl-basis-0 gl-p-3 gl-font-monospace"
      >
        <slot name="editor"></slot>
      </div>
    </template>
  </gl-card>
</template>
