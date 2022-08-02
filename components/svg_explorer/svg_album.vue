<script>
import { GlSearchBoxByType } from '../../helpers/gitlab_ui';
import {
  mapQueryFieldsToComputed,
  mapQueryFieldsToData,
} from '../../helpers/sync_state_to_query_params';
import SvgCard from './svg_card.vue';

const DEFAULT_ICON_SIZE = 'image-sm';
const DEFAULT_COLORING = 'default';

const queryFields = [
  { field: 'searchString', param: 'q', default: '' },
  { field: 'selectedClass', param: 'size', default: DEFAULT_ICON_SIZE },
  { field: 'selectedColor', param: 'color', default: DEFAULT_COLORING },
];

export default {
  components: {
    GlSearchBoxByType,
    SvgCard,
  },
  props: {
    elements: {
      type: Array,
      required: true,
    },
    sizeOptions: {
      type: Array,
      required: false,
      default: () => [],
    },
    sourcePath: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      copyStatus: 0,
      ...mapQueryFieldsToData(queryFields),
    };
  },
  computed: {
    ...mapQueryFieldsToComputed(queryFields),
    filteredElements() {
      return this.elements.flatMap(({ name }) => {
        const isVisible = this.searchString?.startsWith('~')
          ? `~${name}` === this.searchString
          : name.includes(this.searchString);

        return isVisible ? name : [];
      });
    },
    colors() {
      return [
        { value: DEFAULT_COLORING, name: 'Default' },
        { value: 'inverse', name: 'Inverse' },
        { value: 'indigo', name: 'Indigo' },
        { value: 'gray', name: 'Gray' },
        { value: 'red', name: 'Red' },
      ];
    },
    copyStatusText() {
      switch (this.copyStatus) {
        case 1:
          return 'Copied to your clipboard!';
        case -1:
          return "Copying didn't work :-(";
        default:
          return 'Click entry to copy their name';
      }
    },
  },
  methods: {
    setSearchString(value) {
      this.searchString = `~${value}`;
    },
    resetSearch() {
      this.searchString = '';
    },
    setCopyStatus(newStatus) {
      this.copyStatus = newStatus;
      setTimeout(() => {
        this.copyStatus = 0;
      }, 5000);
    },
  },
};
</script>

<template>
  <div class="svg-album">
    <header class="app-styles gl-mb-4">
      <h5 class="subtitle">
        <slot name="header"></slot>
      </h5>
      <div class="gl-mb-3">{{ copyStatusText }}</div>
      <client-only>
        <gl-search-box-by-type
          ref="input"
          v-model="searchString"
          aria-label="Search"
          autocomplete="off"
          spellcheck="false"
          :is-loading="false"
        />
      </client-only>
    </header>
    <section class="svg-list" :class="selectedClass + '-list'">
      <aside>
        <label v-if="sizeOptions.length" class="d-block gl-mb-3">
          <strong>Select a size:</strong>
          <select v-model="selectedClass">
            <option
              v-for="opt in sizeOptions"
              :key="opt.value"
              :value="opt.value"
              :selected="opt.default"
            >
              {{ opt.label }}
            </option>
          </select>
        </label>
        <strong>Select a color combination</strong>
        <div v-for="color in colors" :key="color.value">
          <input :id="color.value" v-model="selectedColor" type="radio" :value="color.value" />
          <label :for="color.value">
            {{ color.name }}
          </label>
        </div>
      </aside>
      <svg-card
        v-for="entry in elements"
        v-show="filteredElements.includes(entry.name)"
        :key="entry.name"
        :image="entry.name"
        :image-size="entry.size"
        :class="selectedColor"
        :source-path="sourcePath"
        @imageCopied="setCopyStatus"
        @permalinkSelected="setSearchString"
      >
        <slot name="figure" :entry="entry" :class-name="selectedClass"></slot>
      </svg-card>
      <button v-if="filteredElements.length === 0" href="" @click.prevent="resetSearch">
        <slot name="no-result"></slot>
      </button>
    </section>
  </div>
</template>
