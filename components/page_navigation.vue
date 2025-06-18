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
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.replaceState?.(null, null, `#${id}`);
    },
  },
};
</script>

<template>
  <nav v-if="headings.length" aria-labelledby="page-navigation-title" class="page-navigation">
    <h2 id="page-navigation-title" class="gl-sr-only">On this page</h2>
    <ul>
      <li
        v-for="{ id, text, level } in headings"
        :key="id"
        :class="{
          '!gl-ml-5': level === 3,
        }"
      >
        <a :href="`#${id}`" :class="{ active: activeHeading === id }" @click.prevent="scrollTo(id)">
          {{ text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
