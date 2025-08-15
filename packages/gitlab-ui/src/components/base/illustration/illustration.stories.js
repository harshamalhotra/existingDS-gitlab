import illustrationsSpriteInfo from '@gitlab/svgs/dist/illustrations.json';
import GlIllustration from './illustration.vue';

const components = {
  GlIllustration,
};

const generateProps = ({ name = 'add-user-sm' } = {}) => ({
  name,
});

const template = `<gl-illustration :name="name" />`;

const Template = (args) => ({
  components,
  props: Object.keys(args),
  template,
});

export const Default = Template.bind({});
Default.args = generateProps();

export default {
  title: 'base/illustration',
  component: GlIllustration,
  tags: ['skip-visual-test'],
  argTypes: {
    name: {
      options: illustrationsSpriteInfo.icons.map((obj) => obj.name),
      control: 'select',
    },
  },
};
