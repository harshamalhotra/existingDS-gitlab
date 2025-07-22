<script>
import { slugify } from '../helpers/slugify';
import { debounceByAnimationFrame } from '../helpers/gitlab_ui';
import { getActiveHeadingIndex, mapHeadingPositionsToScrollTops } from './page_navigation_utils';

export default {
  name: 'PageNavigation',
  props: {
    contentSelector: {
      type: String,
      required: false,
      default: '.nuxt-content',
    },
    headingLevels: {
      type: Array,
      required: false,
      default: () => [2, 3],
      validator: (levels) =>
        levels.every((level) => Number.isInteger(level) && level >= 1 && level <= 6),
    },
  },
  data: () => ({
    headings: [],
    activeHeading: null,
  }),
  computed: {
    headingSelector() {
      return this.headingLevels.map((level) => `h${level}`).join(', ');
    },
  },
  created() {
    // Begin non-reactive properties.
    this.resizeObserver = null;
    this.contentElement = null;
    this.preventScrollUpdatingActiveHeading = false;
    this.realHeadingPositions = [];
    this.destroyFns = [];
    this.isScrollEndSupported = false;
    // End non-reactive properties.
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    for (const destroyFn of this.destroyFns) {
      destroyFn();
    }
  },
  methods: {
    init() {
      this.isScrollEndSupported = 'onscrollend' in window;
      this.contentElement = document.querySelector(this.contentSelector);

      if (!this.contentElement) return;

      this.extractHeadings();

      if (this.headings.length === 0) return;

      this.measureHeadings();

      this.onScroll();
      const onScrollDebounced = debounceByAnimationFrame(this.onScroll);
      document.addEventListener('scroll', onScrollDebounced);
      this.destroyFns.push(() => {
        document.removeEventListener('scroll', onScrollDebounced);
      });

      if (this.isScrollEndSupported) {
        document.addEventListener('scrollend', this.onScrollEnd);
        this.destroyFns.push(() => {
          document.removeEventListener('scrollend', this.onScrollEnd);
        });
      }

      const measureHeadingsDebounced = debounceByAnimationFrame(this.measureHeadings);
      this.resizeObserver = new ResizeObserver(() => {
        measureHeadingsDebounced();
        onScrollDebounced();
      });
      this.resizeObserver.observe(this.contentElement);
      this.destroyFns.push(() => {
        this.resizeObserver?.disconnect();
      });
    },
    extractHeadings() {
      this.headings = [...this.contentElement.querySelectorAll(this.headingSelector)].map((el) => {
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
    getScrollAndPositionData() {
      const { clientHeight, scrollHeight } = document.documentElement;

      return {
        headingPositions: this.realHeadingPositions,
        documentScrollHeight: scrollHeight,
        viewportHeight: clientHeight,
      };
    },
    measureHeadings() {
      const { scrollTop } = document.documentElement;

      this.realHeadingPositions = this.headings.map(({ element }) => {
        const { top } = element.getBoundingClientRect();
        return top + scrollTop;
      });
    },
    onScroll() {
      if (this.preventScrollUpdatingActiveHeading) return;

      const headingIndex = getActiveHeadingIndex({
        documentScrollTop: document.documentElement.scrollTop,
        ...this.getScrollAndPositionData(),
      });

      const activeHeading = this.headings[headingIndex];

      if (activeHeading) this.activeHeading = activeHeading.id;
    },
    onScrollEnd() {
      this.preventScrollUpdatingActiveHeading = false;
    },
    scrollTo(id) {
      const headingIndex = this.headings.findIndex((heading) => id === heading.id);

      if (headingIndex === -1) return;

      this.activeHeading = id;
      this.preventScrollUpdatingActiveHeading = this.isScrollEndSupported;

      const top = mapHeadingPositionsToScrollTops({
        ...this.getScrollAndPositionData(),
      })[headingIndex];

      window.scrollTo({
        top,
        behavior: 'auto',
      });

      window.history.replaceState(null, '', `#${id}`);
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
