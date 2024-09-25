<template>
  <div class="index typography">
    <nuxt-child />
    <section aria-labelledby="skipTarget" class="homepage-hero gl-m-5">
      <div class="container gl-grid gl-min-h-48 gl-place-items-center gl-text-center">
        <div>
          <img src="../assets/pajamas-logo.svg" alt="" width="56" height="96" />
          <h1 id="skipTarget" class="gl-my-3! homepage-hero-heading gl-heading-display">
            Pajamas Design System
          </h1>
          <p class="gl-text-lg">Resources, components, and design guidelines behind GitLab</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="everyone-can-contribute" class="gl-my-10">
      <div class="container">
        <div class="gl-grid gl-place-items-center gl-gap-7 lg:gl-grid-cols-2">
          <div class="lg:gl-order-last">
            <img
              alt=""
              src="../assets/images/contribute.png"
              srcset="../assets/images/contribute@2x.png 2x"
            />
          </div>
          <div>
            <h2 id="everyone-can-contribute" class="gl-heading-2">Everyone can contribute</h2>
            <p class="gl-mb-3 gl-text-base gl-leading-20">
              GitLab is an
              <a
                target="_blank"
                href="https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/"
                >open core</a
              >
              product and has over 4,000 community contributors. When everyone can contribute,
              consumers become contributors and we greatly increase the rate of human progress.
            </p>
            <p class="gl-text-base gl-leading-20">
              To ensure that everyone can contribute to GitLab with confidence we provide everyone
              with the right resources and know-how. The Pajamas design system is the single source
              of truth for everything anyone needs to know about contributing to GitLab.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="everything-you-need" class="gl-my-10">
      <div class="container">
        <div class="gl-grid gl-place-items-center gl-gap-7 lg:gl-grid-cols-2">
          <div>
            <img alt="" src="../assets/images/content.svg" />
          </div>
          <div>
            <h2 id="everything-you-need" class="gl-heading-2">Everything you need</h2>
            <p class="gl-mb-3 gl-text-base gl-leading-20">
              Pajamas is here to make it as comfortable as possible for anyone to contribute towards
              GitLab. You will find information such as our principles, components, usage
              guidelines, branding, research methodologies, and more!
            </p>
            <p class="gl-text-base gl-leading-20">
              Start by looking into the component documentation, including live examples.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="contributing" class="gl-my-10">
      <div class="container">
        <div class="gl-grid gl-place-items-center gl-gap-7 lg:gl-grid-cols-2">
          <div class="lg:gl-order-last">
            <img alt="" src="../assets/images/pajamas_stars.svg" />
          </div>
          <div>
            <h2 id="contributing" class="gl-heading-2">Contributing to the design system</h2>
            <p class="gl-text-base gl-leading-20">
              We encourage any feedback and ideas towards the design system itself as well! If you
              are interested in contributing, check out our
              <a href="/get-started/contributing">guidelines</a> to get started. Have any questions?
              Open an issue on our
              <a
                target="_blank"
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
                >Design System issue tracker</a
              >. Otherwise, be sure to check out the resources below!
            </p>
          </div>
        </div>
      </div>
    </section>

    <nav class="gl-my-10">
      <div class="container">
        <ul class="gl-m-0 gl-grid gl-list-none gl-grid-cols-3 gl-gap-3 gl-p-0">
          <li>
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
              target="_blank"
              class="gl-block gl-rounded-base gl-p-3 gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-solid.png"
                class="gl-mx-auto gl-block"
                alt=""
              />
              <span class="gl-mt-3 gl-block">View the issue tracker</span>
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
              target="_blank"
              class="gl-block gl-rounded-base gl-p-3 gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-outline.png"
                class="gl-mx-auto gl-block"
                alt=""
              />
              <span class="gl-mt-3 gl-block">Explore the repository</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/community/file/781156790581391771/"
              target="_blank"
              class="gl-block gl-rounded-base gl-p-3 gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-figma.png"
                class="gl-mx-auto gl-block"
                alt=""
              />
              <span class="gl-mt-3 gl-block">Duplicate our Figma UI Kit</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
