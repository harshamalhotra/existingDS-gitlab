import { GlCard } from '@gitlab/ui';
import { shallowMount } from '@vue/test-utils';
import StoryViewer from '../../components/story_viewer.vue';
import StoryIframe from '../../components/story_iframe.vue';

describe('story viewer component', () => {
  let wrapper;

  // Props
  const component = 'base-component';

  // Mocks
  const $gitlabUiUrl = 'http://gitlab-ui.test';

  // Finders
  const findByTestId = (id) => wrapper.find(`[data-testid="${id}"]`);
  const findCard = () => wrapper.findComponent(GlCard);
  const findStoryIframe = () => wrapper.findComponent(StoryIframe);
  const findStoryTitle = () => findByTestId('story-title');
  const findStoryLink = () => findByTestId('story-link');
  const getIFrameURL = () => findStoryIframe().props('url');

  const createComponent = (props = {}) => {
    wrapper = shallowMount(StoryViewer, {
      propsData: {
        component,
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

  describe.each`
    viewMode   | story         | expectedPath
    ${'story'} | ${undefined}  | ${`${component}--default`}
    ${'story'} | ${'variants'} | ${`${component}--variants`}
    ${'docs'}  | ${undefined}  | ${`${component}--docs`}
    ${'docs'}  | ${'variants'} | ${`${component}--docs`}
  `('with view mode $viewMode and story $story', ({ viewMode, story, expectedPath }) => {
    beforeEach(() => {
      createComponent({
        viewMode,
        story,
      });
    });

    it('renders an iframe with the proper URL', () => {
      expect(getIFrameURL()).toBe(
        `${$gitlabUiUrl}/iframe.html?id=${expectedPath}&viewMode=${viewMode}`,
      );
    });
  });

  describe('custom storybook arguments are added to the URL', () => {
    const getIFrameArgs = () => new URL(getIFrameURL()).searchParams.get('args');

    it('renders none with no args', () => {
      createComponent({});

      expect(getIFrameArgs()).toBe(null);
    });

    it('combines args properly when given', () => {
      createComponent({
        'args-foo': 'bar',
        'args-is-loading': true,
      });

      expect(getIFrameArgs()).toBe(`foo:bar;isLoading:true`);
    });

    it('renders only args with `args-` prefix', () => {
      createComponent({
        'args-foo': 'bar',
        'is-loading': true,
      });

      expect(getIFrameArgs()).toBe(`foo:bar`);
    });
  });

  describe('story mode', () => {
    beforeEach(() => {
      createComponent();
    });

    it('renders a link to Storybook', () => {
      expect(findStoryLink().attributes('href')).toBe(
        `${$gitlabUiUrl}/?path=%2Fstory%2F${component}--default`,
      );
    });

    it('renders the story inside a card', () => {
      const card = findCard();

      expect(card.exists()).toBe(true);
      expect(card.findComponent(StoryIframe).exists()).toBe(true);
    });

    it("renders the story's name as the default title", () => {
      createComponent();

      expect(findStoryTitle().text()).toBe(`${component}--default`);
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
