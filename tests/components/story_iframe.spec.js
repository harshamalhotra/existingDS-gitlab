import { GlLoadingIcon } from '@gitlab/ui';
import { mount } from '@vue/test-utils';
import { iframeResize } from 'iframe-resizer';
import StoryIframe from '../../components/story_iframe.vue';

jest.mock('iframe-resizer');

describe('story iframe component', () => {
  let wrapper;

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
    wrapper = mount(StoryIframe, {
      propsData: {
        url,
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
