<!-- eslint-disable-next-line vue/no-deprecated-functional-template -->
<template functional>
  <div class="gl-border gl-mb-5 gl-flex gl-flex-col gl-rounded-base">
    <div class="gl-grow gl-basis-0 gl-p-3">
      <slot name="preview"></slot>
    </div>
    <div class="gl-grow gl-basis-0 gl-rounded-b-base gl-bg-subtle gl-p-3 gl-font-monospace">
      <slot name="editor"></slot>
    </div>
  </div>
</template>
