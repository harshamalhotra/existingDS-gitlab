<script>
export default {
  gitlabOrgBaseUrl: 'https://gitlab.com/groups/gitlab-org/-/',
  props: {
    componentLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="md typography">
    <h2>Contribute to Pajamas components</h2>
    <p>
      Use an
      <nuxt-link to="/get-started/contributing#contribute-an-issue">issue</nuxt-link> or
      <nuxt-link to="/get-started/contributing#contribute-a-merge-request">merge request</nuxt-link>
      to collaborate on the <strong>{{ componentLabel }}</strong> component.
    </p>

    <ul>
      <li>
        <a
          :href="`${$options.gitlabOrgBaseUrl}issues?label_name%5B%5D=component%3A${componentLabel}`"
        >
          Related {{ componentLabel }} issues
        </a>
      </li>
      <li>
        <a
          :href="`${$options.gitlabOrgBaseUrl}merge_requests?label_name%5B%5D=component%3A${componentLabel}`"
        >
          Related {{ componentLabel }} merge requests
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
