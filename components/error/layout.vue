<template>
  <div
    class="typography gl--flex-center gl-flex-direction-column gl-max-h-screen gl-h-screen gl-gap-4"
  >
    <slot name="illustration"></slot>
    <h1 class="gl-font-size-h1">
      <slot name="title"></slot>
    </h1>
    <slot name="text"></slot>
    <pre
      v-if="$scopedSlots.details"
      class="gl-text-left gl-font-sm gl-text-gray-500 gl-grow gl-overflow-scroll gl-max-w-1/2"
    ><slot name="details"></slot></pre>
  </div>
</template>
