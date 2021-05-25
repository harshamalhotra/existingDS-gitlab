<script>
export default {
  name: 'MenuItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      required: false,
      default: '',
    },
    depth: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    hasChildren() {
      return this.item.items?.length;
    },
    nextBasePath() {
      let { basePath: nextBasePath } = this;
      if (this.item.path) {
        nextBasePath += `/${this.item.path}`;
      }
      return nextBasePath;
    },
    isExternalLink() {
      return this.item.path && this.item.path.startsWith('http');
    },
    path() {
      if (!this.item.path) {
        return '';
      }
      if (this.isExternalLink) {
        return this.item.path;
      }
      return `${this.basePath}/${this.item.path}`;
    },
  },
  methods: {
    selectFirstSubItem(ev) {
      const { target } = ev;
      if (target && target.parentNode) {
        const detailsLinks = target.parentNode.querySelectorAll('a');
        if (detailsLinks.length > 0) {
          const firstLink = detailsLinks[0].getAttribute('href');
          if (firstLink) {
            const that = this;
            setTimeout(() => {
              that.$router.push({
                path: firstLink.replace(/#/, ''),
              });
            }, 1);
          }
        }
      }
    },
  },
};
</script>

<template>
  <ul v-if="depth === 0" class="nav-sidebar__section">
    <li>
      <span class="nav-sidebar__section-title">{{ item.title }}</span>
    </li>
    <menu-item
      v-for="child in item.items"
      :key="child.title"
      :item="child"
      :depth="depth + 1"
      :base-path="nextBasePath"
    />
  </ul>
  <li v-else>
    <details
      v-if="hasChildren"
      :open="$route.fullPath.startsWith(nextBasePath)"
      class="nav-sidebar__section"
    >
      <summary
        class="nav-sidebar__section-summary"
        :class="`tree-indent-${depth}`"
        @click="selectFirstSubItem"
      >
        {{ item.title }}
      </summary>
      <menu-item
        v-for="child in item.items"
        :key="child.title"
        :item="child"
        :depth="depth + 1"
        :base-path="nextBasePath"
      />
    </details>
    <template v-else>
      <a
        v-if="isExternalLink"
        :href="path"
        target="_blank"
        rel="noopener"
        :class="`tree-indent-${depth}`"
        class="nav-sidebar__section-items-anchor"
        >{{ item.title }}</a
      >
      <nuxt-link
        v-else
        :to="path"
        :class="`tree-indent-${depth}`"
        class="nav-sidebar__section-items-anchor"
        >{{ item.title }}</nuxt-link
      >
    </template>
  </li>
</template>
