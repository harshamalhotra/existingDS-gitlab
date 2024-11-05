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

    <section aria-label="Content" class="gl-my-8">
      <div class="container">
        <div class="gl-grid gl-gap-7 gl-p-0 lg:gl-grid-cols-2">
          <div>
            <h2>Brand</h2>
            <p class="gl-text-base gl-leading-20">
              Guidelines, resources, and system behind the brand personality and visual identity of
              GitLab.
              <nuxt-link to="/brand-overview/introduction">Introduction →</nuxt-link>
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <p class="gl-text-base gl-leading-20">
              Foundations, components, patterns, content, and guidelines for building the GitLab UI.
              <nuxt-link to="/get-started/navigating-pajamas">Get started →</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="contribute" class="gl-my-8">
      <div class="container">
        <div
          class="gl-rounded-lg gl-border-1 gl-border-solid gl-border-default gl-bg-subtle gl-p-5 lg:-gl-mx-5"
        >
          <h2 id="contribute" class="gl-heading-4">Contribute</h2>
          <p class="gl-mb-5 gl-text-base gl-leading-20">
            It's our mission to enable everyone to contribute to and co-create the software that
            powers our world. This includes contributions to the brand, product design, UX, content,
            and more. Here are a few ways to get started.
          </p>
          <ul class="gl-m-0 gl-grid gl-list-none gl-gap-3 gl-p-0 md:gl-grid-cols-3">
            <li>
              <a
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img
                  src="../assets/images/resources/issues.svg"
                  class="gl-mx-auto gl-block"
                  alt=""
                />
                <span class="gl-mt-3 gl-block">Issue tracker</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img src="../assets/images/resources/code.svg" class="gl-mx-auto gl-block" alt="" />
                <span class="gl-mt-3 gl-block">Repository</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/community/file/781156790581391771/"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img
                  src="../assets/images/resources/figma.svg"
                  class="gl-mx-auto gl-block"
                  alt=""
                />
                <span class="gl-mt-3 gl-block">Pajamas UI Kit (Figma)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
