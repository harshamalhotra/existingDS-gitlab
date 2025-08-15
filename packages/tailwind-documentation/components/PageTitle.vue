<template>
  <div
    class="gl-mb-4 gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-y-3"
  >
    <div class="gl-pr-5">
      <h1 class="gl-text-size-h1">{{ route.meta.title }}</h1>
      <p v-if="supportsNegativeValues">
        Supports negative values.
        <a
          class="with-link-styles"
          :href="tailwindDocsLink + '#using-negative-values'"
          target="_blank"
          rel="noopener noreferrer"
          >Learn more.</a
        >
      </p>
    </div>
    <ButtonLink
      v-if="shouldShowTailwindDocsLink"
      :href="tailwindDocsLink"
      target="_blank"
      rel="noopener noreferrer"
      >Official Tailwind Documentation</ButtonLink
    >
  </div>
</template>

<script setup>
import camelCase from "lodash/camelCase";

const route = useRoute();
const resolvedUtilities = inject("resolvedUtilities");

const shouldShowTailwindDocsLink = computed(
  () => route.meta.tailwindDocsLink !== null,
);

const tailwindDocsLink = computed(() => {
  const path = route.meta.tailwindDocsLink || route.path;

  return `https://v3.tailwindcss.com/docs${path}`;
});

const supportsNegativeValues = computed(
  () => resolvedUtilities[camelCase(route.name)]?.supportsNegativeValues,
);
</script>
