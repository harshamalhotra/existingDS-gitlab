<script>
import logos from '../static/dist/logos.json';
import IllustrationLayout from '../components/illustration_layout.vue';

export default {
  name: 'LogosPage',
  components: {
    IllustrationLayout,
  },
  data() {
    return {
      logos,
    };
  },
};
</script>

<template>
  <illustration-layout :svgs="logos.logos" name="Logo" plural-name="Logos" />
</template>
