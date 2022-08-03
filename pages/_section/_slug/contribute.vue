<script>
import ContributeToComponent from '../../../components/contribute_to_component.vue';

export default {
  components: {
    ContributeToComponent,
  },
  props: {
    componentLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <contribute-to-component :component-label="componentLabel" class="gl-pt-3" />
</template>
