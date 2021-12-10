import { GlCard } from '@gitlab/ui';
import { shallowMount } from '@vue/test-utils';
import StoryViewer from '../../components/story_viewer.vue';
import StoryIframe from '../../components/story_iframe.vue';

describe('story viewer component', () => {
  let wrapper;

  // Props
  const storyName = 'base-component--default';

  // Mocks
  const $gitlabUiUrl = 'http://gitlab-ui.test';

  // Finders
  const findByTestId = (id) => wrapper.find(`[data-testid="${id}"]`);
  const findCard = () => wrapper.findComponent(GlCard);
  const findStoryIframe = () => wrapper.findComponent(StoryIframe);
  const findStoryTitle = () => findByTestId('story-title');
  const findStoryLink = () => findByTestId('story-link');

  const createComponent = (props = {}) => {
    wrapper = shallowMount(StoryViewer, {
      propsData: {
        storyName,
        ...props,
      },
      mocks: {
        $gitlabUiUrl,
      },
      stubs: {
        GlCard,
      },
    });
  };

  afterEach(() => {
    wrapper.destroy();
  });

  describe.each(['story', 'docs'])('with view mode %s', (viewMode) => {
    beforeEach(() => {
      createComponent({
        viewMode,
      });
    });

    it('renders an iframe with the proper URL', () => {
      expect(findStoryIframe().props('url')).toBe(
        `${$gitlabUiUrl}/iframe.html?id=${storyName}&viewMode=${viewMode}&isEmbeddedStory=1`,
      );
    });
  });

  describe('story mode', () => {
    beforeEach(() => {
      createComponent();
    });

    it('renders a link to Storybook', () => {
      expect(findStoryLink().attributes('href')).toBe(
        `${$gitlabUiUrl}/?path=%2Fstory%2F${storyName}`,
      );
    });

    it('renders the story inside a card', () => {
      const card = findCard();

      expect(card.exists()).toBe(true);
      expect(card.findComponent(StoryIframe).exists()).toBe(true);
    });

    it("renders the story's ID as the default title", () => {
      createComponent();

      expect(findStoryTitle().text()).toBe(storyName);
    });

    it('renders the custom title if provided', () => {
      const title = 'Custom title';
      createComponent({
        title,
      });

      expect(findStoryTitle().text()).toBe(title);
    });
  });

  describe('docs mode', () => {
    const viewMode = 'docs';

    beforeEach(() => {
      createComponent({
        viewMode,
      });
    });

    it('renders the story directly', () => {
      expect(findCard().exists()).toBe(false);
      expect(findStoryIframe().exists()).toBe(true);
    });
  });
});
