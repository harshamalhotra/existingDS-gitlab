<script>
import { GlCard, GlIcon, GlLink } from '@gitlab/ui';
import StoryIframe from './story_iframe.vue';

const VIEW_MODE_STORY = 'story';
const VIEW_MODE_DOCS = 'docs';

export default {
  components: {
    GlCard,
    GlIcon,
    GlLink,
    StoryIframe,
  },
  props: {
    storyName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    viewMode: {
      type: String,
      required: false,
      default: VIEW_MODE_STORY,
      validator: (viewMode) => [VIEW_MODE_STORY, VIEW_MODE_DOCS].includes(viewMode),
    },
  },
  computed: {
    isDocsMode() {
      return this.viewMode === VIEW_MODE_DOCS;
    },
    cardTitle() {
      return this.title || this.storyName;
    },
    storyUrl() {
      const url = new URL(this.$gitlabUiUrl);
      url.searchParams.append('path', `/${this.viewMode}/${this.storyName}`);

      return url.href;
    },
    iFrameUrl() {
      const url = new URL(`${this.$gitlabUiUrl}/iframe.html`);
      url.searchParams.append('id', this.storyName);
      url.searchParams.append('viewMode', this.viewMode);
      url.searchParams.append('isEmbeddedStory', 1);

      return url.href;
    },
  },
};
</script>

<template>
  <div class="app-styles gl-mb-5">
    <story-iframe v-if="isDocsMode" :url="iFrameUrl" />
    <gl-card v-else>
      <template #header>
        <div class="row">
          <div class="col">
            <strong data-testid="story-title">{{ cardTitle }}</strong>
          </div>
          <div class="gl-text-right col">
            <gl-link :href="storyUrl" target="_blank" data-testid="story-link">
              Open in Storybook
              <gl-icon name="external-link" />
            </gl-link>
          </div>
        </div>
      </template>
      <story-iframe :url="iFrameUrl" />
    </gl-card>
  </div>
</template>
