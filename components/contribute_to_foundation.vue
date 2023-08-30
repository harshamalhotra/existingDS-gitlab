<script>
export default {
  gitlabOrgBaseUrl: 'https://gitlab.com/groups/gitlab-org/-/',
  props: {
    foundationLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="md typography">
    <h2>Contribute to Pajamas</h2>
    <p>
      Use an
      <nuxt-link to="/get-started/contributing#contribute-an-issue">issue</nuxt-link> or
      <nuxt-link to="/get-started/contributing#contribute-a-merge-request">merge request</nuxt-link>
      to collaborate on <strong>{{ foundationLabel }}</strong
      >.
    </p>

    <ul>
      <li>
        <a
          :href="`${$options.gitlabOrgBaseUrl}issues?label_name%5B%5D=foundation%3A%3A${foundationLabel}`"
        >
          Related {{ foundationLabel }} issues
        </a>
      </li>
      <li>
        <a
          :href="`${$options.gitlabOrgBaseUrl}merge_requests?label_name%5B%5D=foundation%3A%3A${foundationLabel}`"
        >
          Related {{ foundationLabel }} merge requests
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/new">
          Create a new issue
        </a>
      </li>
    </ul>

    <nuxt-link to="/get-started/contributing">Learn more about contributing to Pajamas</nuxt-link>
  </div>
</template>
