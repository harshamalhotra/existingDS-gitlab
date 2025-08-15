<template>
  <!-- Sticky header on mobile is 3.25rem tall -->
  <div class="gl-h-full gl-pt-[3.25rem] md:gl-pt-0">
    <SidebarMenu />
    <div class="gl-flex gl-h-full gl-flex-col gl-pt-7 md:gl-pl-34">
      <main class="gl-container gl-mx-auto gl-shrink-0 gl-grow">
        <div class="gl-px-4 sm:gl-px-6 md:gl-px-8">
          <slot />
        </div>
      </main>
      <footer
        class="gl-flex gl-shrink-0 gl-flex-col gl-items-center gl-justify-center gl-gap-2 gl-p-5 lg:gl-flex-row"
      >
        <a
          class="with-link-styles"
          target="_blank"
          rel="noopener noreferrer"
          :href="pageSourceHref"
          >View Page Source</a
        >
        <span class="gl-hidden lg:gl-block">|</span>
        <p>
          This documentation is specific to the GitLab Tailwind configuration.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const pageSourceHref = computed(
  () =>
    `https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/packages/tailwind-documentation/pages${route.path}.vue`,
);
</script>
