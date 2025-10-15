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
    <template #title>Something seems to be missing</template>
    <template #text>
      <p>
        <nuxt-link to="/">Go to homepage</nuxt-link> or
        <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new"
          >create an issue</a
        >.
      </p>
    </template>
  </layout>
</template>
