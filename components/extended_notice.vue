<script>
/**
 * ExtendedNotice - Internal documentation site component
 *
 * Displays a notice indicating content is part of the extended design system.
 *
 * Props:
 * - scope (String, optional): Text to describe what is part of the extended system. Defaults to "This"
 * - owners (String|Array, optional): Owner names (e.g., "group::pipeline execution")
 * - contactPreset (String, optional): Preset for predetermined contacts (e.g., "ux")
 * - contacts (Array, optional): Contact options with { text, url } format
 *
 * Usage:
 * // Single owner and contact option
 * <extended-notice
 *   owners="group::pipeline execution"
 *   :contacts="[{ text: 'Slack: #team-pipeline', url: 'https://slack.com/...' }]"
 * />
 *
 * // Multiple owners and contact options
 * <extended-notice
 *   scope="The mini-pipeline graph"
 *   :owners="['group::pipeline execution', 'group::verify']"
 *   :contacts="[
 *     { text: 'Slack: #team-pipeline', url: 'https://slack.com/...' },
 *     { text: 'GitLab issue', url: 'https://gitlab.com/...' }
 *   ]"
 * />
 *
 * // Using predefined contact configuration
 * <extended-notice
 *   scope="Path"
 *   contact-preset="ux"
 * />
 */
import { GlLabel, GlLink } from '../helpers/gitlab_ui';

const GROUPS = {
  animation: {
    contacts: [
      { text: '#ux on slack', url: 'https://gitlab.slack.com/channels/ux' },
      { text: '@jmiocene on GitLab', url: 'https://gitlab.com/jmiocene' },
    ],
  },
  'custom-dashboards-foundation': {
    contacts: [
      {
        text: '#g_analytics_platform_insights on slack',
        url: 'https://gitlab.slack.com/channels/g_analytics_platform_insights',
      },
    ],
  },
  'ux-designers-and-gitlab-ui': {
    contacts: [
      { text: '#ux on slack', url: 'https://gitlab.slack.com/channels/ux' },
      { text: '#gitlab-ui on slack', url: 'https://gitlab.slack.com/channels/gitlab-ui' },
      {
        text: '@gitlab-com/gitlab-ux/designers',
        url: 'https://gitlab.com/groups/gitlab-com/gitlab-ux/designers/-/group_members?with_inherited_permissions=exclude',
      },
      {
        text: '@gitlab-org/maintainers/gitlab-ui on GitLab',
        url: 'https://gitlab.com/groups/gitlab-org/maintainers/gitlab-ui/-/group_members?with_inherited_permissions=exclude',
      },
    ],
  },
  'ux-designers': {
    contacts: [
      { text: '#ux on slack', url: 'https://gitlab.slack.com/channels/ux' },
      {
        text: '@gitlab-com/gitlab-ux/designers on GitLab',
        url: 'https://gitlab.com/groups/gitlab-com/gitlab-ux/designers/-/group_members?with_inherited_permissions=exclude',
      },
    ],
  },
};

export default {
  name: 'ExtendedNotice',
  components: {
    GlLabel,
    GlLink,
  },
  props: {
    scope: {
      type: String,
      required: false,
      default: 'This',
    },
    contactPreset: {
      type: String,
      required: false,
      default: null,
    },
    owners: {
      type: [String, Array],
      required: false,
      default: null,
    },
    contacts: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    ownersList() {
      if (!this.owners) return [];
      return Array.isArray(this.owners) ? this.owners : [this.owners];
    },
    contactOptions() {
      if (this.contactPreset) return GROUPS[this.contactPreset].contacts;
      return this.contacts;
    },
  },
  methods: {
    getOwnersSeparator(index) {
      if (index === this.ownersList.length - 1) return '';
      if (index === this.ownersList.length - 2) return ' and ';
      return ', ';
    },
    getContactsSeparator(index) {
      if (index === this.contactOptions.length - 1) return '';
      if (index === this.contactOptions.length - 2) return ' or ';
      return ', ';
    },
  },
};
</script>

<template>
  <div
    class="gl-mb-5 gl-block gl-rounded-lg gl-bg-feedback-neutral gl-p-5 gl-text-base gl-italic gl-leading-20 gl-text-feedback-neutral"
  >
    {{ scope }} is part of the
    <nuxt-link to="/get-started/contributing">design system extended layer</nuxt-link> 🤝

    <span v-if="ownersList.length > 0">
      owned by
      <template v-for="(ownerName, index) in ownersList">
        <gl-label
          :key="ownerName"
          :title="ownerName"
          background-color="#a8d695"
          class="pointer-events-none gl-not-italic"
          tabindex="-1"
          scoped
        />{{ getOwnersSeparator(index) }}</template
      >.
    </span>

    <span v-if="contactOptions.length > 0">
      <span>Questions or feedback? Reach out to </span>
      <template v-for="(option, index) in contactOptions">
        <gl-link :key="`contact-${index}`" :href="option.url">{{ option.text }}</gl-link
        >{{ getContactsSeparator(index) }}</template
      >.
    </span>
  </div>
</template>
