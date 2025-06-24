<script>
import { slugify } from '../helpers/slugify';

export default {
  name: 'PageNavigation',
  props: {
    contentSelector: {
      type: String,
      required: false,
      default: '.nuxt-content',
    },
  },
  data: () => ({
    headings: [],
    activeHeading: null,
    observer: null,
  }),
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.observer?.disconnect();
  },
  methods: {
    init() {
      this.extractHeadings();
      if (this.headings.length) this.setupScrollObserver();
    },
    extractHeadings() {
      const content = document.querySelector(this.contentSelector);
      if (!content) return;

      this.headings = [...content.querySelectorAll('h2, h3')].map((el) => {
        const text = el.textContent.trim();
        const id = el.id || slugify(text);

        if (!el.id) el.id = id;

        return {
          id,
          text,
          level: Number(el.tagName[1]),
          element: el,
        };
      });
    },
    setupScrollObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          const intersecting = entries.find((e) => e.isIntersecting);
          if (intersecting) {
            const heading = this.headings.find((h) => h.element === intersecting.target);
            if (heading) this.activeHeading = heading.id;
          }
        },
        { threshold: 0, rootMargin: '0% 0% -100% 0%' },
      );

      this.headings.forEach((h) => this.observer.observe(h.element));
    },
    scrollTo(id) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      window.history.replaceState?.(null, null, `#${id}`);
    },
  },
};
</script>

<template>
  <nav
    v-if="headings.length"
    aria-labelledby="page-navigation-title"
    class="gl-w-full lg:gl-border-l lg:gl-sticky lg:gl-top-0 lg:gl-max-h-screen lg:gl-w-30 lg:gl-shrink-0 lg:gl-grow-0 lg:gl-overflow-y-auto"
  >
    <h2 id="page-navigation-title" class="gl-sr-only">On this page</h2>
    <ul class="gl-m-0 gl-list-none gl-p-0">
      <li v-for="{ id, text, level } in headings" :key="id" class="gl-m-0">
        <a
          :href="`#${id}`"
          :aria-current="String(activeHeading === id)"
          class="gl-action-neutral-colors gl-block gl-border-l-4 gl-border-l-transparent gl-p-3 !gl-no-underline gl-border-l-solid focus:gl-focus-inset"
          :class="{
            '!gl-border-l-purple-500 gl-font-bold': activeHeading === id,
            '!gl-pl-6': level === 3,
          }"
          @click.prevent="scrollTo(id)"
        >
          {{ text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
