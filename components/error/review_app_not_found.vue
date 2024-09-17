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
    <template #illustration>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 144 144"
        width="144"
        height="144"
      >
        <rect width="144" height="144" fill="#E7E4F2" rx="72" transform="matrix(-1 0 0 1 144 0)" />
        <path fill="#fff" d="M89 31.65 55 48v36l34 16.35v-68.7Z" />
        <path fill="#AEA5D6" d="M89 39h14v46a8 8 0 0 1-8 8h-6V39Z" />
        <path
          stroke="#171321"
          stroke-linecap="square"
          stroke-width="2"
          d="M89 93h6a8 8 0 0 0 8-8V39H89M55 53v-5l34-16.35v68.7L55 84V61"
        />
        <circle cx="47" cy="89" r="23" fill="#fff" />
        <path
          stroke="#171321"
          stroke-linecap="square"
          stroke-width="2"
          d="M67.717 98.99a23 23 0 1 0-4.1 5.913"
        />
        <circle cx="47" cy="89" r="15" fill="#FF9D73" />
        <path
          fill="#171321"
          fill-rule="evenodd"
          d="M44 81h-1v3h-4v2h2.184l.82 10.081.074.919h9.844l.075-.919L52.816 86H55v-2h-4v-3h-7Zm6.809 5H48v9h2.078l.731-9ZM46 95v-9h-2.81l.732 9H46Zm3-11h-4v-1h4v1Z"
          clip-rule="evenodd"
        />
        <path
          stroke="#171321"
          stroke-linecap="square"
          stroke-width="2"
          d="M93 108a21.992 21.992 0 0 0 15.556-6.444A21.992 21.992 0 0 0 115 86"
        />
      </svg>
    </template>
    <template #title>Missing review app</template>
    <template #text>
      <p>It looks like you are missing a review app. It might have been deleted.</p>
      <ol v-if="mergeRequestUrl" class="gl-leading-24">
        <li>
          Go back to <a :href="mergeRequestUrl">MR {{ mergeRequestIid }}</a>
        </li>
        <li>
          Re-run the latest <code>pages</code> job (part of the <code>deploy</code> stage), or
          <br />
          simply trigger a new pipeline
        </li>
      </ol>
      <p v-else>Unfortunately we don't know which review app you have been looking for...</p>
    </template>
  </layout>
</template>
