<script>
import illustrations from '../static/dist/illustrations.json';
import IllustrationLayout from '../components/illustration_layout.vue';

export default {
  name: 'IllustrationPage',
  components: {
    IllustrationLayout,
  },
  data() {
    return {
      illustrations,
    };
  },
};
</script>

<template>
  <illustration-layout
    :svgs="illustrations.illustrations"
    name="Illustration"
    plural-name="Illustrations"
  />
</template>
