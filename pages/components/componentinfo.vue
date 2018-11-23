<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="componentAttributes">
      <h1>{{ componentAttributes.name }}</h1>
      <b-tabs class="pt-3">
        <b-tab 
          title="Design" 
          active 
          class="pt-3"
        >
          <md-display :md="componentBody" />
        </b-tab>
        <b-tab 
          v-if="vueComponents && vueComponents.length > 0"
          title="Vue Component" 
          class="pt-3"
        >
          <template v-for="vueComponentName in vueComponents">
            <h2
              :key="`hl-${vueComponentName}`"
              class="mb-3"
            >Vue Component - {{ vueComponentName }}</h2>
            <gl-example-explorer
              :key="`examples-${vueComponentName}`"
              :component-name="vueComponentName"
            />
            <md-display
              :key="`description-${vueComponentName}`"
              :md="vueComponentDocumentations[vueComponentName]" 
              class="mt-3"
            />
            <div
              :key="`props-${vueComponentName}`"
              class="component md mt-3"
            >
              <h2>Component Properties</h2>
              <gl-component-documentation 
                :key="`docs-${vueComponentName}`"
                :component-name="vueComponentName" 
                class="mt-3 component-documentation"
              />
            </div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import * as Documentation from '@gitlab/ui'

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

        Object.keys(Documentation).forEach(component => {
          if (component.indexOf(vueComponentName) > -1) {
            this.vueComponentDocumentations[vueComponentName] =
              Documentation[component].description;
          }
        });
      });
    }
  },
};
</script>
