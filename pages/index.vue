<template>
  <div class="index">
    <nuxt-child />
    <div class="content banner">
      <div class="banner__header text-center">
        <svg width="66" height="121" fill="none" class="animated fadeInDown">
          <path d="M25.8883 119.627l-14.5792-7.903C4.36013 107.909 0 100.552 0 92.5126V59.1303h29.9759v58.0447c0 2.18-2.1801 3.542-4.0876 2.452z" fill="#999"/>
          <path d="M44.8276 77.9334L6.54019 87.4712C0 89.1062 0 91.8313 0 91.8313V36.9209c0-12.5353 8.44775-23.4357 20.5744-26.4332L61.9956.132348c1.7713-.545016 3.4063.817524 3.4063 2.588822V51.5001c0 12.5354-8.4477 23.4357-20.5743 26.4333z" fill="#fff"/>
        </svg>
        <h1 class="banner__header--title f-display f-inverted">
          Pajamas
        </h1>
        <h2 class="banner__header--description f-inverted">Resources, components, and design guidelines behind GitLab</h2>
      </div>
      <img
        src="../assets/images/cover.png"
        class="banner__image animated"
      />
      <div class="overlay"></div>
    </div>
    <div class="p-t-10 p-b-10">
      <div class="content limited distributed contributing-box__content">
        <div class="contribute-row">
          <div class="contribute-copy">
            <h2>Everyone can contribute</h2>
            <p class="max-w-sm">
              GitLab is an <a target="_blank" href="https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/">open core</a> product and has over 2000 community contributors. When everyone can contribute consumers become contributors and we greatly increase the rate of human progress.
            </p>
            <p class="max-w-sm">
              To ensure that everyone can contribute to GitLab with confidence we provide everyone with the right resources and know-how. The Pajamas design system is the single source of truth for everything anyone needs to know about contributing to GitLab.
            </p>
          </div>
          <div class="contribute-img text-center">
            <img
              src="../assets/images/contribute.png"
              srcset="../assets/images/contribute@2x.png 2x"
              class="p-a-8"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark p-t-8 p-b-8">
      <div class="content limited distributed contributing-box__content">
        <div class="contribute-row">
          <div class="contribute-img text-center">
            <img
              src="../assets/images/content.svg"
              class="p-a-8"
            />
          </div>
          <div class="contribute-copy">
            <h2>Everything you need</h2>
            <p class="max-w-sm">
               Pajamas is here to make it as comfortable as possible for anyone to contribute towards GitLab. You will find information such as our principles, components, usage guidelines, branding, research methodologies, and more!
            </p>
            <p class="max-w-sm">
               Start by looking into our <a href="/components/status">interface components documentation</a>, including live vue components.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-t-6 p-b-10">
      <div class="content limited distributed contributing-box__content">
        <div class="contribute-row">
          <div class="contribute-copy">
            <h2>Contributing to the design system</h2>
            <p class="max-w-sm">
              We encourage any feedback and ideas towards the design system itself as well! If you are interested in contributing, check out our <a href="/contribute/get-started">guidelines</a> to get started. Have any questions? Open an issue on our <a target="_blank" href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues">Design System issue tracker</a>. Otherwise be sure to check out the resources below!
            </p>
          </div>
          <div class="contribute-img text-center">
            <img
              src="../assets/images/pajamas_stars.svg"
              class="p-a-10"
            />
          </div>
        </div>
        <div class="resources d-flex">
          <a
            href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
            target="_blank"
            class="card card--highlighted card--link text-center p-a-4"
          >
            <img
              src="../assets/images/resources/r-gitlab.png"
              srcset="../assets/images/resources/r-gitlab@2x.png 2x"
              class="a-center d-block m-b-3"
            />
            View repository
          </a>
          <a
            href="https://gitlab.com/gitlab-org/gitlab-design/blob/master/gitlab-pattern-library.sketch"
            target="_blank"
            class="card card--highlighted card--link text-center m-l-5 p-a-4"
          >
            <img
              src="../assets/images/resources/r-sketch.png"
              srcset="../assets/images/resources/r-sketch@2x.png 2x"
              class="a-center d-block m-b-3"
            />
            Download pattern library
          </a>
          <a
            href="https://about.gitlab.com/community/gitlab-first-look/"
            target="_blank"
            class="card card--highlighted card--link text-center m-l-5 p-a-4"
          >
            <img
              src="../assets/images/resources/r-first-look.png"
              srcset="../assets/images/resources/r-first-look@2x.png 2x"
              class="a-center d-block m-b-3"
            />
            Join GitLab First Look
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
