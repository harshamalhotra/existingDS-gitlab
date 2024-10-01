<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-mt-0! gl-mb-4! gl-heading-display" tabindex="-1">
        {{ heading }}
      </h1>
      <p v-if="description" class="gl-text-lg gl-leading-24">
        {{ description }}
      </p>
    </div>
    <ul class="gl-m-0 gl-grid gl-list-none gl-gap-5 !gl-p-0 lg:gl-grid-cols-3">
      <li v-for="item in items" :key="item.path" class="gl-flex">
        <nuxt-link
          class="gl-w-full gl-rounded-base gl-border-1 gl-border-solid gl-border-default gl-bg-default gl-p-5 !gl-text-default !gl-no-underline hover:gl-border-strong"
          :to="item.path"
        >
          <span class="gl-block gl-font-bold">{{ item.name }}</span>
          <span
            v-if="item.summary || item.description"
            class="gl-mb-0 gl-mt-2 gl-block gl-text-base gl-leading-20"
          >
            {{ item.summary || item.description }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
