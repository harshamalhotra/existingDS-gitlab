<script>
import SvgIcon from './svg_explorer/svg_icon.vue';

export default {
  name: 'MenuItem',
  components: {
    SvgIcon,
  },
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
    navTree: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChildren() {
      return this.item.children?.length;
    },
    isExpanded() {
      return this.item.isActive;
    },
    isExternalLink() {
      return this.item.path && this.item.path.startsWith('http');
    },
    itemId() {
      return `item-${this.item.path}`;
    },
    nextBasePath() {
      let { basePath: nextBasePath } = this;
      if (this.item.path) {
        nextBasePath += `/${this.item.path}`;
      }
      return nextBasePath;
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
};
</script>

<template>
  <li v-if="depth === 0">
    <div aria-hidden="true" class="gl-font-sm gl-font-weight-bold gl-px-3 gl-py-2">
      {{ item.title }}
    </div>
    <ul :aria-label="item.title">
      <menu-item
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :depth="depth + 1"
        :base-path="nextBasePath"
        :nav-tree="navTree"
      />
    </ul>
  </li>
  <li v-else-if="hasChildren">
    <button
      class="sidebar__nav-toggle"
      :class="{ 'sidebar__nav-toggle--expanded': isExpanded }"
      :aria-expanded="isExpanded"
      :aria-controls="itemId"
      @click.prevent="navTree.toggleNode(item)"
    >
      <span class="sidebar__nav-toggle-inner">
        <span>{{ item.title }}</span>
        <svg-icon icon="chevron-down" />
      </span>
    </button>
    <ul v-show="isExpanded" :id="itemId" :aria-label="item.title" class="gl-ml-4!">
      <menu-item
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :depth="depth + 1"
        :base-path="nextBasePath"
        :nav-tree="navTree"
      />
    </ul>
  </li>
  <li v-else class="sidebar__nav-option">
    <a
      v-if="isExternalLink"
      :href="path"
      target="_blank"
      rel="noopener"
      class="sidebar__nav-anchor"
    >
      {{ item.title }}
    </a>
    <nuxt-link
      v-else
      :to="path"
      class="sidebar__nav-anchor"
      @click.prevent="navTree.activateNode(item)"
    >
      {{ item.title }}
    </nuxt-link>
  </li>
</template>
