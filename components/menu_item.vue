<script>
import uniqueId from 'lodash/uniqueId';
import { GlIcon } from '../helpers/gitlab_ui';
import { slugify } from '../helpers/slugify';

export default {
  name: 'MenuItem',
  components: {
    GlIcon,
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
    depthClass() {
      switch (this.depth) {
        case 2:
          return 'gl-pl-6';
        case 3:
          return 'gl-pl-8';
        default:
          return null;
      }
    },
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
      return uniqueId(`item-${slugify(this.item.title)}-`);
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
  <li v-if="depth === 0" class="gl-m-0 gl-list-none gl-p-0">
    <div aria-hidden="true" class="gl-py-2 gl-pl-4 gl-pr-3 gl-text-sm gl-font-bold">
      {{ item.title }}
    </div>
    <ul :aria-label="item.title" class="gl-m-0 gl-pl-0">
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
  <li v-else-if="hasChildren" class="gl-m-0 gl-list-none gl-p-0">
    <button
      class="sidebar__nav-toggle gl-block gl-w-full gl-cursor-pointer gl-appearance-none gl-rounded-default gl-border-none gl-bg-transparent gl-p-3 gl-pl-4 gl-text-left gl-font-regular gl-text-base"
      :class="depthClass"
      :aria-expanded="isExpanded"
      :aria-controls="itemId"
      @click.prevent="item.toggle()"
    >
      <span class="gl-flex gl-items-center gl-gap-2">
        <span class="gl-min-w-0 gl-flex-1">{{ item.title }}</span>
        <gl-icon
          :class="['gl-flex-shrink-0', { 'gl-rotate-90': isExpanded }]"
          name="chevron-right"
        />
      </span>
    </button>
    <ul v-show="isExpanded" :id="itemId" :aria-label="item.title" class="gl-m-0 gl-pl-0">
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
  <li v-else class="sidebar__nav-option gl-m-0 gl-list-none gl-p-0">
    <a
      v-if="isExternalLink"
      :href="path"
      target="_blank"
      rel="noopener"
      class="sidebar__nav-anchor gl-flex gl-gap-2 gl-rounded-default gl-p-3 gl-pl-4 !gl-no-underline"
      :class="depthClass"
    >
      <span>{{ item.title }}</span>
      <gl-icon name="external-link" />
    </a>
    <nuxt-link
      v-else
      :to="path"
      class="sidebar__nav-anchor gl-flex gl-rounded-default gl-p-3 gl-pl-4 !gl-no-underline"
      :class="depthClass"
      @click.prevent="navTree.activateNode(item)"
    >
      {{ item.title }}
    </nuxt-link>
  </li>
</template>
