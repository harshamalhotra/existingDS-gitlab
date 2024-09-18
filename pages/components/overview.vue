<script>
export default {
  async asyncData({ $content }) {
    const componentList = await $content('components')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { componentList };
  },
  head: {
    title: 'Components overview',
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display !gl-mt-0 !gl-mb-4" tabindex="-1">
        Pajamas components
      </h1>
      <p class="gl-text-lg gl-leading-24">
        Pajamas components are written in Vue and designed in Figma. Select a component to learn
        more about how to use them for your design or development project.
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 !gl-p-0">
      <li v-for="component in componentList" :key="component.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="component.path"
        >
          <h3 class="gl-heading-3">{{ component.name }}</h3>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ component.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
