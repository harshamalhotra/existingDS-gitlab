<script>
import ContributeToComponent from '../../../components/contribute_to_component.vue';
import ContributeToFoundation from '../../../components/contribute_to_foundation.vue';

export default {
  components: {
    ContributeToComponent,
    ContributeToFoundation,
  },
  props: {
    componentLabel: {
      type: String,
      default: '',
      required: false,
    },
    foundationLabel: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<template>
  <div>
    <contribute-to-component v-if="componentLabel" :component-label="componentLabel" />
    <contribute-to-foundation v-else-if="foundationLabel" :foundation-label="foundationLabel" />
  </div>
</template>
