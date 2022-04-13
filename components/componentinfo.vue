<script>
import ContributeToComponent from './contribute_to_component.vue';
import RelatedPages from './related_pages.vue';

const componentNameToLabelMap = {
  dropdowns: 'dropdown',
  forms: 'form',
  labels: 'label',
  modals: 'modal',
  'radio-button': 'radio',
  tables: 'table',
  tabs: 'tab',
  toggles: 'toggle',
};

export default {
  components: {
    ContributeToComponent,
    RelatedPages,
  },
  props: {
    page: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  head() {
    return {
      title: this.page.name,
    };
  },
  computed: {
    componentLabel() {
      const { section, slug } = this.$route.params;
      if (section !== 'components') {
        return null;
      }
      return componentNameToLabelMap[slug] || slug;
    },
    showTabs() {
      return Boolean(this.page?.stories?.length);
    },
    lastUpdatedAt() {
      const { lastGitUpdate } = this.page || {};
      if (!lastGitUpdate) {
        return null;
      }
      return new Date(lastGitUpdate).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
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
    activateTab(tab = null) {
      this.$router.push({
        ...this.$route,
        params: {
          ...this.$route.params,
          tab,
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="page">
      <div class="md typography gl-mb-6!">
        <h1 id="skipTarget" tabindex="-1">{{ page.name }}</h1>
        <div
          v-if="page.deprecated"
          role="alert"
          class="gl-bg-orange-50 gl-px-5 gl-py-3 gl-mb-3 gl-display-flex gl-align-items-center"
        >
          <span class="gl-text-orange-600 gl-mr-3">⚠️</span>
          Please refrain from using this component - it is about to be deprecated!
        </div>
        <p>{{ page.description }}</p>
      </div>
      <div v-if="showTabs">
        <gl-tabs v-model="tabIndex" nav-wrapper-class="app-styles gl-mb-5" lazy>
          <gl-tab title="Usage" active class="p-t-3 js-gl-tab" @click.prevent="activateTab()">
            <div v-if="page" class="component md typography">
              <nuxt-content :document="page" />
            </div>
            <related-pages :related="page.related" class="m-t-6" />
          </gl-tab>
          <gl-tab
            title="Implementation"
            :active="this.$route.params.tab === 'code'"
            class="app-styles js-gl-tab"
            @click.prevent="activateTab('code')"
          >
            <div class="gl-pt-0">
              <div v-for="story in page.stories" :key="story" class="container">
                <story-viewer :story-name="story" view-mode="docs" />
              </div>
            </div>
          </gl-tab>
          <gl-tab
            v-if="componentLabel"
            title="Contribute"
            class="p-t-3 js-gl-tab"
            :active="this.$route.params.tab === 'contribute'"
            @click.prevent="activateTab('contribute')"
          >
            <contribute-to-component :component-label="componentLabel" />
          </gl-tab>
        </gl-tabs>
      </div>
      <div v-else class="md typography">
        <nuxt-content :document="page" />
        <related-pages :related="page.related" class="m-t-6" />
      </div>
      <p v-if="lastUpdatedAt" class="row justify-content-center m-t-5">
        Last updated at:&nbsp;<time :datetime="lastUpdatedAt">{{ lastUpdatedAt }}</time>
      </p>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>
