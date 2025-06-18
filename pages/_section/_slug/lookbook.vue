<script>
const NAME_MAPPING = {
  alert: 'alert',
  avatar: 'avatar',
  badge: 'badge',
  banner: 'banner',
  button: 'button',
  'broadcast-message': 'broadcast_banner',
  card: 'card',
  'progress-bar': 'progress',
  spinner: 'spinner',
};

export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    componentName() {
      return NAME_MAPPING[this.page.slug];
    },
  },
};
</script>

<template>
  <div class="gl-pb-4 gl-pt-0">
    <div v-if="componentName">
      <lookbook-viewer :component="componentName" />
      <p class="gl-pt-4">
        <b>
          Find <a :href="inspectUrl">more scenarios</a> of the {{ componentName }} component in our
          Lookbook.
        </b>
      </p>
    </div>
    <div v-else>
      <i>The {{ page.slug }} component is not available as ViewComponent.</i>
    </div>
  </div>
</template>
