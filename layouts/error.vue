<script>
import PageNotFound from '../components/page_not_found.vue';

export default {
  components: { PageNotFound },
  layout: 'no_footer',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n');
    },
  },
};
</script>
<template>
  <page-not-found v-if="error.statusCode === 404" />
  <div v-else class="typography gl--flex-center gl-flex-direction-column gl-h-100vh">
    <svg
      role="img"
      aria-hidden="true"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="36"
        cy="36"
        r="35"
        fill="#FCA326"
        stroke="#171321"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 20v-1h-2v24h2V20Zm-1 33a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#171321"
      />
    </svg>
    <h1 class="gl-font-size-h1 gl-mb-4">An error occurred</h1>
    <p><nuxt-link to="/">Go to homepage</nuxt-link> or try refreshing.</p>
    <pre v-if="details" class="gl-text-center gl-font-sm gl-text-gray-500">{{ details }}</pre>
  </div>
</template>
