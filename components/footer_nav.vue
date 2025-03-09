<script>
import PageContainer from './page_container.vue';

export default {
  components: {
    PageContainer,
  },
};
</script>
<template>
  <footer class="gl-pb-7 gl-leading-20">
    <page-container tag="nav" aria-label="Footer navigation">
      <ul class="gl-m-0 gl-flex gl-list-none gl-flex-wrap gl-justify-center gl-gap-3 gl-p-0">
        <li class="gl-border-r gl-pr-3">
          <edit-this-page-link
            edit-url="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main"
          >
            Page source
          </edit-this-page-link>
        </li>
        <li class="gl-border-r gl-pr-3">
          <edit-this-page-link
            edit-url="https://gitlab.com/-/ide/project/gitlab-org/gitlab-services/design.gitlab.com/edit/main/-"
          >
            Open in Web IDE
          </edit-this-page-link>
        </li>
        <li class="gl-border-r gl-pr-3">
          <nuxt-link to="/get-started/contributing">Contribute</nuxt-link>
        </li>
        <li class="gl-border-r gl-pr-3">
          <a href="https://about.gitlab.com/privacy/">Privacy statement</a>
        </li>
        <li>
          <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie settings</button>
        </li>
      </ul>
    </page-container>
  </footer>
</template>
