<script>
import PageContainer from './page_container.vue';
import PageHeader from './page_header.vue';

export default {
  components: {
    PageContainer,
    PageHeader,
  },
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
  <page-container class="gl-py-7">
    <page-header :heading="heading" :description="description" />
    <ul class="gl-m-0 gl-grid gl-list-none gl-gap-5 !gl-p-0 lg:gl-grid-cols-3">
      <li v-for="item in items" :key="item.path" class="gl-flex">
        <nuxt-link
          class="gl-border gl-flex gl-w-full gl-flex-col gl-gap-3 gl-rounded-base gl-border-section gl-bg-section gl-p-5 !gl-text-default !gl-no-underline hover:gl-border-strong"
          :to="item.path"
        >
          <span class="gl-block gl-font-bold gl-text-strong">{{ item.name }}</span>
          <span
            v-if="item.summary || item.description"
            class="gl-mb-0 gl-block gl-text-base gl-leading-20"
          >
            {{ item.summary || item.description }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </page-container>
</template>
