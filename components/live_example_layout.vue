<script>
import uniqueId from 'lodash/uniqueId';
import { GlButton } from '../helpers/gitlab_ui';

export default {
  name: 'LiveExampleLayout',
  components: {
    GlButton,
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
  <div class="gl-border gl-mb-5 gl-flex gl-flex-col gl-rounded-base">
    <div class="background-example-pattern gl-grow gl-basis-0 gl-p-4">
      <slot name="preview"></slot>
    </div>
    <div class="gl-border-t gl-rounded-b-base gl-bg-subtle">
      <div class="gl-px-3 gl-py-2">
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
      </div>
      <div
        v-show="isSourceVisible"
        :id="sourcePanelId"
        class="gl-grow gl-basis-0 gl-p-3 gl-font-monospace"
      >
        <slot name="editor"></slot>
      </div>
    </div>
  </div>
</template>
