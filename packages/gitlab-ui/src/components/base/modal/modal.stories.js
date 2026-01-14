import { userEvent, within, waitFor, expect } from '@storybook/test';
import { GlModalDirective } from '../../../directives/modal';
import GlButton from '../button/button.vue';
import BVueReadme from '../../../vendor/bootstrap-vue/src/components/modal/README.md';
import GlFormGroup from '../form/form_group/form_group.vue';
import GlFormInput from '../form/form_input/form_input.vue';
import GlModal from './modal.vue';

const play =
  (expectFinalState = () => Promise.resolve()) =>
  async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expectFinalState();
  };

const generateTemplate = ({ props = {}, slots = {} } = {}) => {
  const extraProps = Object.entries(props)
    .map(([key, value]) => `:${key}="${value}"`)
    .join('\n        ');

  return `
    <div>
      <gl-button v-gl-modal-directive="'test-modal-id'" category="primary" variant="confirm">
        Open modal
      </gl-button>
      <gl-modal
        ${extraProps}
        :action-primary="{text: 'Okay'}"
        :action-secondary="{text: 'Discard Changes'}"
        :action-cancel="{text: 'Cancel'}"
        :scrollable="scrollable"
        :no-focus-on-show="noFocusOnShow"
        :header-tag="headerTag"
        :footer-tag="footerTag"
        modal-id="test-modal-id"
        title="Example title"
        no-fade
      >
      <p v-for="n in contentParagraphs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      ${Object.entries(slots).map(
        ([slot, contents]) => `<template #${slot}>${contents}</template>`,
      )}
      </gl-modal>
    </div>
  `;
};

const Template = (args, { argTypes, viewMode }) => ({
  components: { GlModal, GlButton },
  directives: { GlModalDirective },
  props: Object.keys(argTypes),
  template: generateTemplate(),
  viewMode,
});

const generateProps = ({
  contentPagraphs = 1,
  scrollable = false,
  noFocusOnShow = false,
} = {}) => ({
  contentParagraphs: contentPagraphs,
  scrollable,
  noFocusOnShow,
});

export const Default = Template.bind({});
Default.args = generateProps();
Default.play = play(() =>
  waitFor(() =>
    expect(
      within(within(document).getByRole('dialog')).getByRole('button', { name: 'Cancel' }),
    ).toHaveFocus(),
  ),
);

export const WithScrollingContent = Template.bind({});
WithScrollingContent.args = generateProps({
  contentPagraphs: 100,
  scrollable: true,
});
WithScrollingContent.play = play(() =>
  waitFor(() =>
    expect(
      within(within(document).getByRole('dialog')).getByRole('button', { name: 'Cancel' }),
    ).toHaveFocus(),
  ),
);

export const WithAHeader = (args, { argTypes, viewMode }) => ({
  components: { GlModal, GlButton },
  directives: { GlModalDirective },
  props: Object.keys(argTypes),
  template: generateTemplate({
    slots: {
      'modal-header': '<h4>A custom header</h4>',
    },
  }),
  viewMode,
});
WithAHeader.args = generateProps();
WithAHeader.play = play(() =>
  waitFor(() =>
    expect(
      within(within(document).getByRole('dialog')).getByRole('button', { name: 'Cancel' }),
    ).toHaveFocus(),
  ),
);

export const WithoutAFooter = (args, { argTypes, viewMode }) => ({
  components: { GlModal, GlButton },
  directives: { GlModalDirective },
  props: Object.keys(argTypes),
  template: generateTemplate({
    props: { 'hide-footer': true },
  }),
  viewMode,
});
WithoutAFooter.args = generateProps();
WithoutAFooter.play = play(() =>
  waitFor(() =>
    expect(
      within(within(document).getByRole('dialog')).getByRole('button', { name: 'Close' }),
    ).toHaveFocus(),
  ),
);

export const WithoutFocus = Template.bind({});
WithoutFocus.args = generateProps({
  noFocusOnShow: true,
});
WithoutFocus.play = play();

export const Destructive = (args, { argTypes, viewMode }) => ({
  components: { GlModal, GlButton, GlFormGroup, GlFormInput },
  directives: { GlModalDirective },
  props: Object.keys(argTypes),
  data() {
    return {
      modalVisible: true,
      renderKey: 0,
    };
  },
  watch: {
    modalVisible(newVal) {
      if (newVal) {
        this.renderKey += 1;
      }
    },
  },
  template: `
    <div>
      <gl-button @click="modalVisible = true" category="primary" variant="danger">
        Delete project
      </gl-button>
      <gl-modal
        v-model="modalVisible"
        modal-id="destructive-modal-id"
        title="Confirm project deletion"
        :action-primary="{text: 'Yes, delete project', attributes: { variant: 'danger', disabled: true }}"
        :action-cancel="{text: 'Cancel, keep project'}"
        no-fade
      >
        <div class="gl-text-feedback-danger">
          <p class="gl-font-bold gl-mb-3">
            You're about to delete this project containing:
          </p>
          <ul class="gl-mb-5">
            <li>40 issues</li>
            <li>16 merge requests</li>
            <li>0 forks</li>
            <li>0 stars</li>
          </ul>
          <p class="gl-mb-5">
            This project is <strong>not</strong> a fork. This process deletes the project repository and all related resources.
          </p>
        </div>
        <gl-form-group
          :key="renderKey"
          label="Enter the following to confirm:"
          label-for="project-path"
          label-description="gitlab-org/gitlab-test"
          class="gl-mb-5"
        >
          <gl-form-input id="project-path" />
          <template #description>
            This project can be restored until 2025-11-28, <a href="#" class="gl-link">learn more</a>.
          </template>
        </gl-form-group>
      </gl-modal>
    </div>
  `,
  viewMode,
});

export default {
  title: 'base/modal',
  component: GlModal,
  directives: { GlModalDirective },
  parameters: {
    bootstrapComponent: 'b-modal',
    bootstrapDocs: BVueReadme,
    docs: {
      description: {
        component:
          'See [Pajamas Design System documentation](https://design.gitlab.com/components/modal) for usage and implementation details.',
      },
    },
  },
};
