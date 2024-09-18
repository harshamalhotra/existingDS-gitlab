<script>
import Layout from './layout.vue';

/**
 * This component is a special fallback page for our review apps.
 *
 * Our review apps get deployed under `/review-mr-<iid>`.
 * After a while the review app might be deleted and not accessible.
 *
 * If a reviewer now tries to access the review app,
 * it might result in a confusing, because they get the general 404 page.
 *
 * This works on GitLab pages thanks to the static/_redirect file
 *
 */
export default {
  components: { Layout },
  props: {
    mergeRequestIid: {
      type: String,
      required: true,
    },
    mergeRequestUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <layout>
    <template #title>Missing review app</template>
    <template #text>
      <p>It looks like you are missing a review app. It might have been deleted.</p>
      <ol v-if="mergeRequestUrl" class="gl-leading-24">
        <li>
          Go back to <a :href="mergeRequestUrl">MR {{ mergeRequestIid }}</a
          >.
        </li>
        <li>
          Re-run the latest <code>pages</code> job (part of the <code>deploy</code> stage), or
          <br />
          trigger a new pipeline.
        </li>
      </ol>
      <p v-else>Unfortunately we don't know which review app you have been looking for...</p>
    </template>
  </layout>
</template>
