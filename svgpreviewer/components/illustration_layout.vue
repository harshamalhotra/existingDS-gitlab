<script>
import SvgImage from './svg_image.vue';

const DEFAULT_COLORING = 'light';

export default {
  components: {
    SvgImage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    pluralName: {
      type: String,
      required: true,
    },
    svgs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchString: this.$route.query.q || '',
      selectedColor: this.$route.query.color || DEFAULT_COLORING,
      copyStatus: 0,
    };
  },
  computed: {
    filteredSVGs() {
      const unfiltered = this.svgs;

      if (this.searchString === '') {
        return unfiltered;
      }

      return this.svgs.filter(({ name }) => name.includes(this.searchString));
    },
    svgCount() {
      return this.filteredSVGs.length;
    },
    colors() {
      return [
        { value: DEFAULT_COLORING, name: 'Light' },
        { value: 'dark', name: 'Dark' },
      ];
    },
    countName() {
      return this.svgCount === 1 ? this.name : this.pluralName;
    },
    pageName() {
      return this.pluralName;
    },
  },
  watch: {
    searchString() {
      this.updateQueryParams();
    },
    selectedColor() {
      this.updateQueryParams();
    },
    $route(to) {
      const query = to.query || {};
      this.searchString = query.q || '';
      this.selectedColor = query.color || DEFAULT_COLORING;
    },
  },
  methods: {
    setSearchString(value) {
      this.searchString = value;
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
    updateQueryParams() {
      const location = {
        query: {
          q: this.searchString ? this.searchString : undefined,
          color: this.selectedColor !== DEFAULT_COLORING ? this.selectedColor : undefined,
        },
      };

      this.$router.replace(location);
    },
  },
};
</script>

<template>
  <div>
    <header class="subheader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h5 class="subtitle">{{ svgCount }} {{ countName }}</h5>
          </div>
          <div class="col-sm-3">
            <span v-if="copyStatus === 1" class="label label-success">
              Copied to your clipboard!
            </span>
            <span v-if="copyStatus === -1" class="label label-danger">
              Copying didn't work :-(
            </span>
            <span v-else-if="copyStatus === 0" class="label muted">
              Click {{ pageName }} to copy their path
            </span>
          </div>
          <div class="col-sm-5">
            <input
              v-model="searchString"
              maxlength="255"
              autofocus="autofocus"
              class="form-control pad"
              size="255"
              type="text"
              placeholder="Search"
            />
            <svg class="icon-reset" @click="resetSearch">
              <use v-bind="{ 'xlink:href': `dist/icons.svg#close` }" />
            </svg>
          </div>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="illustrations-list">
        <aside>
          <h3>{{ pageName }} configuration</h3>
          <label>
            <strong> Select a color mode:</strong>
          </label>
          <select v-model="selectedColor" class="form-control select-control chevron-down">
            <template v-for="color in colors">
              <option :key="color.value" :value="color.value">
                {{ color.name }}
              </option>
            </template>
          </select>
        </aside>
        <svg-image
          v-for="(svg, index) in filteredSVGs"
          :key="index"
          :image="svg.name"
          :class="[selectedColor, svg.size]"
          image-sprite="dist/illustrations.svg"
          source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
          @imageCopied="setCopyStatus"
          @permalinkSelected="setSearchString"
        />
      </div>
    </section>
  </div>
</template>

<style>
.subheader {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  border-bottom: solid 1px #ccc;
}

.subheader .container {
  margin-top: 3px;
  margin-bottom: 3px;
}

.subheader .container .label {
  margin-top: 7px;
}

.subtitle {
  margin-top: 8px;
}

.illustrations-list {
  margin-top: 98px;
  padding: 0;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
}

.illustrations-list aside {
  display: block;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  margin-bottom: 1rem;
  padding: 1rem;
}

.illustrations-list .image-wrapper {
  margin-bottom: 1rem;
}

.muted {
  color: #999;
  font-size: smaller;
}

.icon-reset {
  position: absolute;
  right: 24px;
  top: 9px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  fill: #707070;
}

.icon-reset:hover {
  fill: black;
}

.image-wrapper.sm .image-view svg {
  width: 72px;
  aspect-ratio: 1/1;
}

.image-wrapper.md .image-view svg {
  width: 144px;
  aspect-ratio: 1/1;
}

.image-wrapper.lg .image-view svg {
  width: 288px;
  aspect-ratio: 1/1;
}

.image-wrapper.light .image-base {
  background-color: #ffffff;

  --gl-illustration-stroke-color-default: #171321;
  --gl-illustration-stroke-width-default: 2;
  --gl-illustration-fill-color-default: #fff;
  --gl-illustration-status-fill-color-neutral: #aea5d6;
  --gl-illustration-status-fill-color-success: #6fdac9;
  --gl-illustration-status-fill-color-warning: #fca326;
  --gl-illustration-status-fill-color-danger: #ff9d73;
  --gl-illustration-accent-stroke-color-orange: #ff9d73;
  --gl-illustration-accent-stroke-color-teal: #6fdac9;
  --gl-illustration-accent-stroke-color-strong: #aea5d6;
  --gl-illustration-accent-fill-color-subtle: #d0c5e2;
  --gl-illustration-accent-fill-color-strong: #aea5d6;
  --gl-illustration-accent-fill-color-orange: #ff9d73;
  --gl-illustration-accent-fill-color-teal: #6fdac9;
  --gl-illustration-base-fill-color: #e7e4f2;
  --gl-illustration-isometric-stroke-color-default: #171321;
  --gl-illustration-isometric-stroke-width-default: 2;
  --gl-illustration-isometric-glyph-top-fill-color: #c5f4ec;
  --gl-illustration-isometric-glyph-front-fill-color: #fff;
  --gl-illustration-isometric-glyph-side-fill-color: #6fdac9;
  --gl-illustration-isometric-glyph-shadow-fill-color: #10b1b1;
  --gl-illustration-isometric-object-top-fill-color: #ff9d73;
  --gl-illustration-isometric-object-front-fill-color: #ffc2a8;
  --gl-illustration-isometric-object-side-fill-color: #ff7b42;
  --gl-illustration-isometric-object-highlight-fill-color: #fff;
  --gl-illustration-isometric-object-shadow-fill-color: #e24329;
  --gl-illustration-isometric-accent-top-fill-color: #45424d;
  --gl-illustration-isometric-accent-front-fill-color: #74717a;
  --gl-illustration-isometric-accent-side-fill-color: #2b2838;
  --gl-illustration-isometric-base-top-fill-color: #e7e4f2;
  --gl-illustration-isometric-base-front-fill-color: #d5d0e8;
  --gl-illustration-isometric-base-side-fill-color: #aea5d6;
}

.image-wrapper.dark .image-base {
  background-color: #28272d;
  color: #fff;

  --gl-illustration-stroke-color-default: #e3e3e8;
  --gl-illustration-stroke-width-default: 1.5;
  --gl-illustration-fill-color-default: #423f4f;
  --gl-illustration-status-fill-color-neutral: #6f6796;
  --gl-illustration-status-fill-color-success: #3b8581;
  --gl-illustration-status-fill-color-warning: #ab752f;
  --gl-illustration-status-fill-color-danger: #aa563a;
  --gl-illustration-accent-stroke-color-orange: #e3865f;
  --gl-illustration-accent-stroke-color-teal: #6baea3;
  --gl-illustration-accent-stroke-color-strong: #aea5d6;
  --gl-illustration-accent-fill-color-subtle: #5c5371;
  --gl-illustration-accent-fill-color-strong: #6f6796;
  --gl-illustration-accent-fill-color-orange: #aa563a;
  --gl-illustration-accent-fill-color-teal: #3b8581;
  --gl-illustration-base-fill-color: #32303c;
  --gl-illustration-isometric-stroke-color-default: #e3e3e8;
  --gl-illustration-isometric-stroke-width-default: 1.5;
  --gl-illustration-isometric-glyph-top-fill-color: #5a566c;
  --gl-illustration-isometric-glyph-front-fill-color: #423f4f;
  --gl-illustration-isometric-glyph-side-fill-color: #373441;
  --gl-illustration-isometric-glyph-shadow-fill-color: #292730;
  --gl-illustration-isometric-object-top-fill-color: #aa563a;
  --gl-illustration-isometric-object-front-fill-color: #a54623;
  --gl-illustration-isometric-object-side-fill-color: #8f4424;
  --gl-illustration-isometric-object-highlight-fill-color: #423f4f;
  --gl-illustration-isometric-object-shadow-fill-color: #3d2b2a;
  --gl-illustration-isometric-accent-top-fill-color: #6d6972;
  --gl-illustration-isometric-accent-front-fill-color: #49474d;
  --gl-illustration-isometric-accent-side-fill-color: #212023;
  --gl-illustration-isometric-base-top-fill-color: #32303c;
  --gl-illustration-isometric-base-front-fill-color: #2b2932;
  --gl-illustration-isometric-base-side-fill-color: #23222b;
}
</style>
