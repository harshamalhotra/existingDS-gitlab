import TokensStory from './tokens_story.vue';

export const createDesignTokenStory = ({
  tokens = {},
  isBackgroundColorStory = true,
  containerClass = '',
} = {}) => {
  const Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
      TokensStory,
    },
    provide: {
      containerClass,
      isBackgroundColorStory,
    },
    template: `<tokens-story v-bind="$props" />`,
  });
  Story.args = { tokens };

  return Story;
};
