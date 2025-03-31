<script>
import { GlButton } from '../helpers/gitlab_ui';
import DarkModeToggle from './dark_mode_toggle.vue';
import GitlabLogo from './gitlab_logo.vue';

export default {
  components: {
    GlButton,
    DarkModeToggle,
    GitlabLogo,
  },
};
</script>

<template>
  <header class="gl-py-3">
    <div class="gl-m-auto gl-max-w-7xl gl-px-5">
      <div class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-3">
        <nuxt-link
          to="/"
          class="gl-flex gl-items-center gl-gap-2 gl-font-bold gl-text-inherit gl-no-underline hover:gl-text-inherit hover:gl-no-underline"
        >
          <gitlab-logo />
          <span
            class="gl-ml-2 gl-inline-block gl-border-l-1 gl-border-default gl-pl-3 gl-border-l-solid"
          >
            SVGs
          </span>
        </nuxt-link>
        <div class="gl-flex gl-items-center gl-gap-3">
          <ul class="gl-m-0 gl-flex gl-list-none gl-flex-wrap gl-p-0">
            <li>
              <nuxt-link #default="{ navigate }" to="/" custom>
                <gl-button category="tertiary" @click="navigate"> Icons </gl-button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link #default="{ navigate }" to="/file_icons" custom>
                <gl-button category="tertiary" @click="navigate"> File icons </gl-button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link #default="{ navigate }" to="/illustrations" custom>
                <gl-button category="tertiary" @click="navigate"> Illustrations </gl-button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link #default="{ navigate }" to="/logos" custom>
                <gl-button category="tertiary" @click="navigate"> Logos </gl-button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link #default="{ navigate }" to="/render_tests" custom>
                <gl-button category="tertiary" @click="navigate"> Render tests </gl-button>
              </nuxt-link>
            </li>
            <li>
              <gl-button category="tertiary" href="https://gitlab.com/gitlab-org/gitlab-svgs">
                Repo →
              </gl-button>
            </li>
          </ul>
          <dark-mode-toggle />
        </div>
      </div>
    </div>
  </header>
</template>
