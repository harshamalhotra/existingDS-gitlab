<script>
import { mapState, mapActions, mapMutations } from 'vuex';

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
    ...mapState(['activeNavItem']),
    hasChildren() {
      return this.item.items?.length;
    },
    isExpanded() {
      return this.activeNavItem.startsWith(this.nextBasePath);
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
    ...mapActions(['toggleActiveNavItem']),
    ...mapMutations(['setActiveNavItem']),
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
  <li
    v-else-if="hasChildren"
    class="nav-sidebar__section"
    :class="{ 'nav-sidebar__section--expanded': isExpanded }"
  >
    <a
      v-if="hasChildren"
      role="menuitem"
      href="#"
      class="nav-sidebar__section-toggle gl-display-block"
      :class="`tree-indent-${depth}`"
      :aria-expanded="isExpanded"
      :aria-haspopup="true"
      @click.prevent="toggleActiveNavItem(nextBasePath)"
      >{{ item.title }}</a
    >
    <ul
      v-if="isExpanded"
      class="nav-sidebar__section-submenu"
      :class="`tree-indent-${depth}`"
      :aria-label="item.title"
      role="menu"
    >
      <menu-item
        v-for="child in item.items"
        :key="child.title"
        :item="child"
        :depth="depth + 1"
        :base-path="nextBasePath"
      />
    </ul>
  </li>
  <li v-else>
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
      role="menuitem"
      :to="path"
      :class="`tree-indent-${depth}`"
      class="nav-sidebar__section-items-anchor"
      @click.native="setActiveNavItem(nextBasePath)"
      >{{ item.title }}</nuxt-link
    >
  </li>
</template>
