<template>
  <div class="index typography">
    <nuxt-child />
    <div class="banner">
      <div class="banner__header gl-text-center">
        <svg
          aria-hidden="true"
          width="66"
          height="121"
          fill="none"
          class="animated fadeInDown"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m26.052 120.631-14.617-7.95a21.948 21.948 0 0 1-8.344-8.045A21.994 21.994 0 0 1 0 93.457V59.678h30.165v58.496a2.753 2.753 0 0 1-1.336 2.438 2.731 2.731 0 0 1-2.777.019Z"
            fill="#DEC9F0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.042 78.614 6.527 88.225C0 89.887 0 92.633 0 92.633V37.16a27.488 27.488 0 0 1 5.81-16.9 27.42 27.42 0 0 1 14.963-9.74L62.4.085a2.738 2.738 0 0 1 3.164 1.513c.177.386.263.808.25 1.233v49.186a27.488 27.488 0 0 1-5.822 16.874 27.42 27.42 0 0 1-14.95 9.724Z"
            fill="url(#a)"
          />
          <defs>
            <linearGradient
              id="a"
              x1="0"
              y1="46.331"
              x2="65.815"
              y2="46.331"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7144C6" />
              <stop offset=".59" stop-color="#8045C9" />
              <stop offset="1" stop-color="#8E46CC" />
            </linearGradient>
          </defs>
        </svg>
        <h1 id="skipTarget" class="banner__header--title f-display">Pajamas</h1>
        <p class="banner__header--description">
          Resources, components, and design guidelines behind GitLab
        </p>
      </div>
      <img alt="" src="../assets/images/cover-gradient.png" class="banner__image animated" />
    </div>
    <div class="gl-pt-11 gl-pb-11">
      <div class="container distributed">
        <div class="two-column two-column--alt">
          <div class="two-column-start">
            <img
              alt=""
              class="two-column-image"
              src="../assets/images/contribute.png"
              srcset="../assets/images/contribute@2x.png 2x"
            />
          </div>
          <div class="two-column-end">
            <h2>Everyone can contribute</h2>
            <p>
              GitLab is an
              <a
                target="_blank"
                href="https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/"
                >open core</a
              >
              product and has over 4,000 community contributors. When everyone can contribute,
              consumers become contributors and we greatly increase the rate of human progress.
            </p>
            <p>
              To ensure that everyone can contribute to GitLab with confidence we provide everyone
              with the right resources and know-how. The Pajamas design system is the single source
              of truth for everything anyone needs to know about contributing to GitLab.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="gl-bg-gray-10 gl-border-gray-50 gl-border-solid gl-border-0 gl-border-t-1 gl-border-b-1 gl-pt-9 gl-pb-9"
    >
      <div class="container distributed">
        <div class="two-column">
          <div class="two-column-start">
            <img alt="" class="two-column-image" src="../assets/images/content.svg" />
          </div>
          <div class="two-column-end">
            <h2>Everything you need</h2>
            <p>
              Pajamas is here to make it as comfortable as possible for anyone to contribute towards
              GitLab. You will find information such as our principles, components, usage
              guidelines, branding, research methodologies, and more!
            </p>
            <p>Start by looking into the component documentation, including live examples.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gl-pt-11 gl-pb-11">
      <div class="container distributed">
        <div class="two-column two-column--alt">
          <div class="two-column-start">
            <img
              alt=""
              class="two-column-image two-column-image--small"
              src="../assets/images/pajamas_stars.svg"
            />
          </div>
          <div class="two-column-end">
            <h2>Contributing to the design system</h2>
            <p>
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
    </div>
    <div class="gl-pt-9 gl-pb-9">
      <div class="container distributed">
        <div class="row gl-mt-9">
          <div class="col col-33">
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-solid.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> View the issue tracker </span>
            </a>
          </div>
          <div class="col col-33">
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-outline.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> Explore the repository </span>
            </a>
          </div>
          <div class="col col-33">
            <a
              href="https://www.figma.com/community/file/781156790581391771/"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-figma.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> Duplicate our Figma UI Kit </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
