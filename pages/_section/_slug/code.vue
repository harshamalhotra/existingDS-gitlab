<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="app-styles gl-pt-0">
    <div v-for="story in page.components" :key="story" class="container">
      <story-viewer :component="story" view-mode="docs" />
    </div>
  </div>
</template>
