<script>
import { camelCase } from 'lodash';
import { GlCard, GlIcon, GlLink } from '../helpers/gitlab_ui';
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
    component: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: false,
      default: 'default',
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    iframePadding: {
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
    storyName() {
      const suffix = this.isDocsMode ? 'docs' : this.story;
      return `${this.component}--${suffix}`;
    },
    cardTitle() {
      return this.title || this.storyName;
    },
    storyUrl() {
      const url = new URL(this.$gitlabUiUrl);
      url.searchParams.append('path', `/${this.viewMode}/${this.storyName}`);
      if (this.storyBookArgs) {
        url.searchParams.append('args', this.storyBookArgs);
      }

      return url.href;
    },
    storyBookArgs() {
      return Object.entries(this.$attrs)
        .flatMap(([key, value]) => {
          if (!key.startsWith('args-')) {
            return [];
          }

          return `${camelCase(key.substring(5))}:${value}`;
        })
        .join(';');
    },
    iFrameUrl() {
      const url = new URL(`${this.$gitlabUiUrl}/iframe.html`);
      url.searchParams.append('id', this.storyName);
      url.searchParams.append('viewMode', this.viewMode);
      if (this.storyBookArgs) {
        url.searchParams.append('args', this.storyBookArgs);
      }

      return url.href;
    },
  },
};
</script>

<template>
  <div class="app-styles gl-mb-5">
    <story-iframe v-if="isDocsMode" :url="iFrameUrl" :iframe-padding="iframePadding" />
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
      <story-iframe :url="iFrameUrl" :iframe-padding="iframePadding" />
    </gl-card>
  </div>
</template>
