<script>
import { GlButton } from '../helpers/gitlab_ui';
import DarkModeToggle from './dark_mode_toggle.vue';

export default {
  components: {
    GlButton,
    DarkModeToggle,
  },
};
</script>

<template>
  <header class="gl-py-3">
    <div class="gl-m-auto gl-max-w-7xl gl-px-5">
      <div class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-3">
        <div class="gl-flex gl-items-center gl-gap-3">
          <nuxt-link
            to="/"
            class="gl-flex gl-items-center gl-gap-2 gl-font-bold gl-text-inherit gl-no-underline"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="GitLab"
            >
              <symbol id="logomark" height="24" width="24" viewBox="0 0 24 24">
                <path
                  d="M24.5071 9.4997L24.4735 9.4101L21.0815 0.562173C21.0128 0.388442 20.8907 0.241065 20.7327 0.141376C20.6148 0.0659156 20.4809 0.0191208 20.3417 0.00474133C20.2024 -0.00963816 20.0618 0.00879831 19.931 0.0585727C19.8002 0.108347 19.6828 0.188075 19.5884 0.291366C19.4939 0.394657 19.425 0.518639 19.3871 0.653373L17.0975 7.66292H7.82547L5.53587 0.653373C5.49767 0.51884 5.42858 0.395092 5.33408 0.291999C5.23958 0.188905 5.1223 0.109318 4.9916 0.0595846C4.86089 0.00985088 4.72037 -0.00865374 4.58124 0.00554699C4.44211 0.0197477 4.30823 0.0662602 4.19027 0.141376C4.03228 0.241065 3.91012 0.388442 3.84147 0.562173L0.451061 9.41171L0.415861 9.4997C-0.0722579 10.7754 -0.132392 12.1752 0.244523 13.488C0.621438 14.8009 1.41497 15.9556 2.50547 16.778L2.51827 16.7876L2.54706 16.81L7.70707 20.6772L10.2671 22.6116L11.8223 23.7876C12.0048 23.9254 12.2272 24 12.4559 24C12.6846 24 12.907 23.9254 13.0895 23.7876L14.6447 22.6116L17.2047 20.6772L22.4015 16.7876L22.4159 16.7764C23.5063 15.9543 24.2999 14.7999 24.6771 13.4874C25.0543 12.1749 24.9947 10.7753 24.5071 9.4997Z"
                  fill="#E24329"
                />
                <path
                  d="M24.5071 9.49969L24.4735 9.4101C22.8208 9.74922 21.2637 10.4497 19.9135 11.4613L12.4655 17.0932L17.2079 20.6772L22.4047 16.7876L22.4191 16.7764C23.509 15.9538 24.302 14.7993 24.6786 13.4868C25.0552 12.1743 24.995 10.775 24.5071 9.49969Z"
                  fill="#FC6D26"
                />
                <path
                  d="M7.70708 20.6772L10.2671 22.6116L11.8223 23.7876C12.0048 23.9254 12.2272 24 12.4559 24C12.6846 24 12.907 23.9254 13.0895 23.7876L14.6447 22.6116L17.2047 20.6772L12.4623 17.0933L7.70708 20.6772Z"
                  fill="#FCA326"
                />
                <path
                  d="M5.00947 11.4613C3.6598 10.4502 2.10312 9.75028 0.451061 9.41171L0.415861 9.49971C-0.0722579 10.7754 -0.132392 12.1752 0.244523 13.488C0.621438 14.8009 1.41497 15.9556 2.50547 16.7781L2.51827 16.7877L2.54706 16.8101L7.70707 20.6772L12.4527 17.0932L5.00947 11.4613Z"
                  fill="#FC6D26"
                />
              </symbol>
              <use class="logomark" xlink:href="#logomark" x="0" y="0" width="24" height="24" />
            </svg>
            <span> SVGs </span>
          </nuxt-link>
          <dark-mode-toggle />
        </div>
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
      </div>
    </div>
  </header>
</template>
