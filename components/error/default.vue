<script>
import Layout from './layout.vue';

export default {
  components: {
    Layout,
  },
};
</script>

<template>
  <layout>
    <template #illustration>
      <svg
        role="img"
        aria-hidden="true"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="36"
          cy="36"
          r="35"
          fill="#FCA326"
          stroke="#171321"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37 20v-1h-2v24h2V20Zm-1 33a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill="#171321"
        />
      </svg>
    </template>
    <template #title>An error occurred</template>
    <template #text><nuxt-link to="/">Go to homepage</nuxt-link> or try refreshing.</template>
    <template #details><slot name="details"></slot></template>
  </layout>
</template>
