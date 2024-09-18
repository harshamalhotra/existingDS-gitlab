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
      <h1 id="skipTarget" class="gl-heading-display !gl-mb-4 !gl-mt-0" tabindex="-1">
        Pajamas components
      </h1>
      <p class="gl-text-lg gl-leading-24">
        Pajamas components are written in Vue and designed in Figma. Select a component to learn
        more about how to use them for your design or development project.
      </p>
    </div>
    <ul class="gl-m-0 gl-grid gl-list-none gl-gap-5 !gl-p-0 lg:gl-grid-cols-3">
      <li v-for="component in componentList" :key="component.path" class="gl-flex">
        <nuxt-link
          class="gl-w-full gl-rounded-base gl-border-1 gl-border-solid gl-border-default gl-bg-default gl-p-5 !gl-text-default !gl-no-underline hover:gl-border-strong"
          :to="component.path"
        >
          <h3 class="gl-heading-3">{{ component.name }}</h3>
          <p class="gl-mb-0 gl-mt-2 gl-text-base gl-leading-20">
            {{ component.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
