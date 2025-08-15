<script>
import NotFound from '../components/error/not_found.vue';
import Default from '../components/error/default.vue';
import ReviewAppNotFound from '../components/error/review_app_not_found.vue';

export default {
  components: {
    NotFound,
    Default,
    ReviewAppNotFound,
  },
  layout: 'no_footer',
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    reviewAppMRIid() {
      if (process.server) {
        return null;
      }

      const match = window.location.toString().match(/review-mr-(\d+)/);
      if (match) {
        return match[1];
      }
      return null;
    },
    reviewAppMRUrl() {
      if (!this.reviewAppMRIid) {
        return null;
      }
      return `https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/${this.reviewAppMRIid}/pipelines`;
    },
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n\n');
    },
    showDefaultError() {
      // Deal with a missing review app
      if (this.reviewAppMRIid) {
        return false;
      }
      // 404s in production, we want to render our 404 page
      if (this.error?.statusCode === 404 && process.env.NODE_ENV === 'production') {
        return false;
      }
      return true;
    },
  },
};
</script>
<template>
  <default v-if="showDefaultError">
    <template v-if="details" #details>{{ details }}</template>
  </default>
  <review-app-not-found
    v-else-if="reviewAppMRIid"
    :merge-request-iid="reviewAppMRIid"
    :merge-request-url="reviewAppMRUrl"
  />
  <not-found v-else />
</template>
