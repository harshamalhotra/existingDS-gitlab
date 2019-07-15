<script>
export default {
  props: {
    related: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    hasRelatedPatterns() {
      return this.relatedPatterns && this.relatedPatterns.length > 0;
    },
    relatedPatterns() {
      return this.related.map(item => {
        let slug;
        let url;
        if (item.startsWith('/')) {
          url = item;
          slug = item.split('/').pop();
        } else {
          slug = item;
          url = `/components/${slug}`;
        }
        return {
          slug,
          url,
          // capitalize first letter, replace hyphens with spaces
          label: (slug.charAt(0).toLocaleUpperCase() + slug.substring(1)).split('-').join(' '),
        };
      });
    },
  },
};
</script>

<template>
  <div v-if="hasRelatedPatterns">
    <div class="md">
      <h2 id="related-patterns">Related</h2>
      <ul>
        <li v-for="pattern in relatedPatterns" :key="pattern.slug">
          <a :href="pattern.url">{{ pattern.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
