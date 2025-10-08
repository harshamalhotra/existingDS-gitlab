<script>
import { GlAlert } from '../helpers/gitlab_ui';

export default {
  components: {
    GlAlert,
  },
  props: {
    heading: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    deprecated: {
      type: Boolean,
      required: false,
      default: false,
    },
    section: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    typeOfItem() {
      return this.section === 'components' ? 'component' : 'pattern';
    },
  },
};
</script>

<template>
  <div class="gl-mb-7">
    <h1 id="skipTarget" class="gl-heading-display" tabindex="-1">
      {{ heading }}
    </h1>
    <div v-if="deprecated" class="gl-mb-3">
      <gl-alert :dismissible="false" variant="warning">
        Please refrain from using this {{ typeOfItem }} - it is deprecated and will be removed.
      </gl-alert>
    </div>
    <p v-if="description" class="gl-my-0 gl-max-w-prose gl-text-lg gl-leading-24">
      {{ description }}
    </p>
  </div>
</template>
