<script>
export default {
  data() {
    return {
      diagramInitialized: false,
    };
  },
  async mounted() {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({});
    await mermaid.run({
      nodes: [this.$el],
      suppressErrors: true,
    });
    this.diagramInitialized = true;
  },
};
</script>

<template>
  <div :class="{ 'gl-opacity-0': !diagramInitialized }">
    <slot></slot>
  </div>
</template>
