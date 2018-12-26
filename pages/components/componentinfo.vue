<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="componentAttributes">
      <div class="md">
        <h1>{{ componentAttributes.name }}</h1>
      </div>
      <b-tabs
        v-model="tabIndex"
        nav-class="top-area nav-links issues-state-filters mobile-separator nav nav-tabs"
        nav-wrapper-class="app-styles"
        lazy
      >
        <b-tab
          title="Design"
          active
          class="p-t-3 js-gl-tab"
        >
          <md-display :md="componentBody" />
          <div class="m-t-6">
            <div class="md">
              <h2 id="related-patterns">Related patterns</h2>
              <ul v-if="hasRelatedPatterns">
                <li v-for="pattern in relatedPatterns" :key="pattern.slug">
                  <a :href="pattern.url">{{ pattern.label }}</a>
                </li>
              </ul>
              <div v-else>
                No related patterns known.
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab
          v-if="vueComponents && vueComponents.length > 0"
          title="Vue Component"
          class="app-styles js-gl-tab"
        >
          <div class="pt-3">
            <template v-for="vueComponentName in vueComponents">
              <div
                :key="`header-${vueComponentName}`"
                class="component md mb-3"
              >
                <h2
                  :key="`hl-${vueComponentName}`"
                  class="mb-3"
                >Vue Component - {{ vueComponentName }}</h2>
                <b-alert
                  v-if="!vueComponentDocumentations[vueComponentName].followsDesignSystem"
                  :key="`design-alert-${vueComponentName}`"
                  show
                  variant="warning"
                  class="mt-3 mb-3"
                >
                  This component does not yet conform to the correct styling defined in our <a href="https://design.gitlab.com/">Design System</a>. Refer to the <a href="https://design.gitlab.com/">Design System</a> documentation when referencing visuals for this component.
                </b-alert>
              </div>
              <gl-example-explorer
                :key="`examples-${vueComponentName}`"
                :component-name="vueComponentName"
              />
              <md-display
                v-if="vueComponentDocumentations[vueComponentName] && vueComponentDocumentations[vueComponentName].description"
                :key="`description-${vueComponentName}`"
                :md="vueComponentDocumentations[vueComponentName].description"
                class="mt-3 mb-3"
              />
              <div
                :key="`props-${vueComponentName}`"
                class="component md mt-3"
              >
                <h3>Component Properties</h3>
                <gl-component-documentation
                  :key="`docs-${vueComponentName}`"
                  :component-name="vueComponentName"
                  class="mt-3 component-documentation"
                />
              </div>
            </template>
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import {
  ComponentDocumentations,
  GlComponentDocumentation,
  GlExampleExplorer,
} from '@gitlab/ui/documentation';

import mdDisplay from '../../components/md_display.vue';

export default {
  components: {
    'md-display': mdDisplay,
    GlComponentDocumentation,
    GlExampleExplorer,
  },
  props: {
    frontmatterInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      componentName: this.$route.params.componentinfo,
      componentAttributes: null,
      componentBody: null,
      vueComponents: null,
      related: null,
      vueComponentDocumentations: {},
      tabIndex: 0,
    };
  },
  created() {
    this.componentAttributes = this.frontmatterInfo.attributes;

    this.vueComponents = this.frontmatterInfo.attributes.vueComponents;
    this.related = this.frontmatterInfo.attributes.related;

    this.componentBody = this.frontmatterInfo.body;

    if (this.vueComponents) {
      this.vueComponents.forEach(vueComponentName => {
        let snakeName = vueComponentName.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
        if (snakeName.indexOf('_') === 0) snakeName = snakeName.substr(1);
        snakeName = snakeName.replace(/gl_/, '');

        Object.keys(ComponentDocumentations).forEach(component => {
          if (component.startsWith(vueComponentName)) {
            this.vueComponentDocumentations[vueComponentName] = ComponentDocumentations[component];
          }
        });
      });
    }
  },
  mounted() {
    if (this.$route.hash) {
      const targetAnchor = this.$el.querySelector(this.$route.hash);

      if (!targetAnchor) {
        return;
      }

      const tabContainingAnchor = targetAnchor.closest('.js-gl-tab');
      if (!tabContainingAnchor) {
        return;
      }

      this.setActiveTab(tabContainingAnchor);

      this.$nextTick(() => {
        window.scrollTo(0, targetAnchor.offsetTop);
      });
    }
  },
  methods: {
    setActiveTab(tabEl) {
      this.tabIndex = [...tabEl.parentNode.children].indexOf(tabEl);
    },
  },
  computed: {
    hasRelatedPatterns() {
      return this.relatedPatterns && this.relatedPatterns.length > 0;
    },
    relatedPatterns() {
      return (this.related || []).map(slug => ({
        slug,
        url: `/components/${slug}`,
        label: (slug.charAt(0).toLocaleUpperCase() + slug.substring(1)).split('-').join(' '),
      }));
    },
  },
};
</script>
