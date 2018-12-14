<template>
  <div>
    <nuxt-child />
    <div class="content banner">
      <div class="banner__header text-center">
        <h1 class="banner__header--title f-display f-inverted">
          GitLab Design System
        </h1>
        <h2 class="banner__header--description f-inverted">Design guidelines and UI components for GitLab</h2>
      </div>
      <img
        src="../assets/images/cover.png"
        class="banner__image"
      />
      <div class="overlay"></div>
    </div>
    <div class="content limited m-t-10 m-b-10">
      <div class="distributed principles a-center max-w-sm">
        <div class="principle m-b-7">
          <img
            src="../assets/images/principles/professional-productive.png"
            srcset="../assets/images/principles/professional-productive@2x.png 2x"
            class="a-center"
          />
          <div class="principle__content m-l-5">
            <h2>Productive</h2>
            <p>GitLab is an application to support what people do, day in, day out. We need to respect the importance of their work, and avoid gimicky details.</p>
          </div>
        </div>
        <div class="principle m-b-7">
          <img
            src="../assets/images/principles/minimal-efficient.png"
            srcset="../assets/images/principles/minimal-efficient@2x.png 2x"
          />
          <div class="principle__content m-l-5">
            <h2>Minimal</h2>
            <p>While work can get complicated, GitLab is about bringing a sharp focus, helping our customers know what matters now.</p>
          </div>
        </div>
        <div class="principle">
          <img
            src="../assets/images/principles/human-quirky.png"
            srcset="../assets/images/principles/human-quirky@2x.png 2x"
          />
          <div class="principle__content m-l-5">
            <h2>Human</h2>
            <p>We need to build empathy with our users, understand their state of mind, and connect with them on a human level. Quirkiness is part of our DNA; we should embrace it in the right moments and contexts.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content contribute p-t-8 p-b-8">
      <div class="content limited distributed contributing-box__content">
        <img
          src="../assets/images/contribute.png"
          srcset="../assets/images/contribute@2x.png 2x"
          class="a-center d-block m-t-8 m-b-5"
        />
        <h2 class="text-center">Everyone can contribute</h2>
        <p class="a-center max-w-sm">In an effort to continue improving our design system, we encourage any feedback and ideas! If you are interested in contributing, check out our <a href="/getting-started/contributing">guidelines</a> to get started. Have any questions? Open an issue on our <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">Design System issue tracker</a>.
        </p>
      </div>
    </div>
    <div class="content limited p-t-10 p-b-10">
      <div class="resources d-flex">
        <a
          href="https://gitlab.com/gitlab-org/design.gitlab.com"
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
          href="https://about.gitlab.com/community/gitlab-first-look//"
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
</template>
