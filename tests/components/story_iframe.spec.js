import { GlLoadingIcon } from '@gitlab/ui';
import { mount, createLocalVue } from '@vue/test-utils';
import { iframeResize } from 'iframe-resizer';
import Vuex from 'vuex';
import StoryIframe from '../../components/story_iframe.vue';

jest.mock('iframe-resizer');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('story iframe component', () => {
  let wrapper;
  let store;

  // Props
  const url = 'http://story.test/';

  // Finders
  const findIframe = () => wrapper.find('iframe');
  const findLoadingIcon = () => wrapper.findComponent(GlLoadingIcon);

  // Helpers
  const loadIframe = () => {
    findIframe().trigger('load');
    return wrapper.vm.$nextTick();
  };

  const createComponent = () => {
    store = new Vuex.Store({
      state: {
        isDarkMode: false,
      },
      getters: {
        isDarkMode: (state) => state.isDarkMode,
      },
    });
    wrapper = mount(StoryIframe, {
      localVue,
      store,
      propsData: {
        url,
        title: 'Test Story Title',
      },
    });
  };

  beforeEach(() => {
    createComponent();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders an iframe with the passed URL', () => {
    expect(findIframe().attributes('src')).toBe(url);
  });

  it('calls the iframe resizer once the iframe has loaded', () => {
    findIframe().trigger('load');

    expect(iframeResize).toHaveBeenCalled();
  });

  it('shows a loading icon until the iframe has finished loading', async () => {
    expect(findLoadingIcon().exists()).toBe(true);

    await loadIframe();

    expect(findLoadingIcon().exists()).toBe(false);
  });

  it('removes opacity class once iframe has finished loading', async () => {
    const glOpacityUtility = 'gl-opacity-0';

    expect(findIframe().classes()).toContain(glOpacityUtility);

    await loadIframe();

    expect(findIframe().classes()).not.toContain(glOpacityUtility);
  });
});
