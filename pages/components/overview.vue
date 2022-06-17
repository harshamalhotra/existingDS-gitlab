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
  <div class="content limited gl-mt-7 gl-mb-7 app-styles">
    <div class="structure md">
      <h1>Pajamas components</h1>
      <p class="mt-4">
        Pajamas components are written in Vue and designed in Figma. Select a component to learn
        more about how to use them for your design or development project.
      </p>
      <ul class="components-list mt-4 gl-display-grid gl-list-style-none gl-pl-0!">
        <li v-for="component in componentList" :key="component.path" class="gl-display-flex">
          <nuxt-link
            class="component-card gl-text-decoration-none! gl-text-black-normal! gl-rounded-base gl-bg-white gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-gray-100"
            :to="component.path"
          >
            <h3 class="component-name">{{ component.name }}</h3>
            <p class="component-description gl-mb-0 gl-mt-2 gl-reset-line-height gl-font-lg">
              {{ component.description }}
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
