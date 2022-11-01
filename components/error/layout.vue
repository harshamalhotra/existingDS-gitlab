<template>
  <div class="typography gl--flex-center gl-flex-direction-column gl-h-100vh">
    <slot name="illustration"></slot>
    <h1 class="gl-font-size-h1 gl-mb-4">
      <slot name="title"></slot>
    </h1>
    <p><slot name="text"></slot></p>
    <pre
      v-if="$scopedSlots.details"
      class="gl-text-center gl-font-sm gl-text-gray-500"
    ><slot name="details"></slot></pre>
  </div>
</template>
