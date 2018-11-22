<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="componentAttributes">
      <div class="md">
        <h1>{{ componentAttributes.name }}</h1>
      </div>
      <b-tabs
        nav-class="top-area nav-links issues-state-filters mobile-separator nav nav-tabs"
        nav-wrapper-class="app-styles"
      >
        <b-tab 
          title="Design" 
          active 
          class="p-t-3"
        >
          <md-display :md="componentBody" />
        </b-tab>
        <b-tab 
          v-if="vueComponents && vueComponents.length > 0"
          title="Vue Component" 
          class="app-styles"
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
import * as Documentation from '@gitlab-org/gitlab-ui/documentation'

import mdDisplay from '../../components/md_display.vue';

export default {
  components: {
    'md-display': mdDisplay,
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
      vueComponentDocumentations: {},
    };
  },
  created() {
    this.componentAttributes = this.frontmatterInfo.attributes;

    this.vueComponents = this.frontmatterInfo.attributes.vueComponents;

    this.componentBody = this.frontmatterInfo.body;

    if (this.vueComponents) {
      this.vueComponents.forEach(vueComponentName => {
        let snakeName = vueComponentName.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
        if (snakeName.indexOf('_') === 0) snakeName = snakeName.substr(1);
        snakeName = snakeName.replace(/gl_/, '');

      Object.keys(Documentation.ComponentDocumentations).forEach(component => {
        if (component.startsWith(vueComponentName)) {
          this.vueComponentDocumentations[vueComponentName] =
            Documentation.ComponentDocumentations[component]
        }
      })
    })
  },
};
</script>
