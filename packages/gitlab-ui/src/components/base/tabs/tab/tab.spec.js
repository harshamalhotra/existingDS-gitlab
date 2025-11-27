import { shallowMount } from '@vue/test-utils';
import { BTab } from '../../../../vendor/bootstrap-vue/src/components/tabs/tab';
import { DEFAULT_TAB_TITLE_LINK_CLASS } from '../constants';
import GlTab from './tab.vue';

describe('Tab component', () => {
  let wrapper;

  const createComponent = (options) => {
    wrapper = shallowMount(GlTab, {
      ...options,
    });
  };

  it.each`
    titleLinkClass                  | expectedProp
    ${''}                           | ${`${DEFAULT_TAB_TITLE_LINK_CLASS}`}
    ${'additional-class'}           | ${`additional-class ${DEFAULT_TAB_TITLE_LINK_CLASS}`}
    ${['additional-class']}         | ${['additional-class', DEFAULT_TAB_TITLE_LINK_CLASS]}
    ${{ 'additional-class': true }} | ${{ 'additional-class': true, 'gl-tab-nav-item': true }}
    ${undefined}                    | ${DEFAULT_TAB_TITLE_LINK_CLASS}
  `(
    'computed title link class is $expectedProp when titleLinkClass is $titleLinkClass',
    ({ titleLinkClass, expectedProp }) => {
      createComponent({
        propsData: {
          titleLinkClass,
        },
      });

      expect(wrapper.findComponent(BTab).props('titleLinkClass')).toStrictEqual(expectedProp);
    },
  );

  describe('tab-count prop', () => {
    it('renders title slot when tabCount is provided', () => {
      createComponent({
        propsData: { tabCount: 5, tabCountSrText: '5 items' },
        attrs: { title: 'Test' },
      });

      expect(wrapper.findComponent(BTab).vm.$scopedSlots.title).toBeDefined();
      expect(wrapper.findComponent(BTab).props('title')).toBeNull();
    });

    it('does not render title slot when tabCount is negative', () => {
      createComponent({
        propsData: { tabCount: -1 },
        attrs: { title: 'Test' },
      });

      expect(wrapper.findComponent(BTab).vm.$scopedSlots.title).toBeUndefined();
      expect(wrapper.findComponent(BTab).props('title')).toBe('Test');
    });

    it('does not render title slot when tabCount is not provided', () => {
      createComponent({
        attrs: { title: 'Test' },
      });

      expect(wrapper.findComponent(BTab).vm.$scopedSlots.title).toBeUndefined();
      expect(wrapper.findComponent(BTab).props('title')).toBe('Test');
    });
  });

  describe('development warnings', () => {
    let consoleWarnSpy;
    let originalEnv;

    beforeEach(() => {
      originalEnv = process.env.NODE_ENV;
      consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
      process.env.NODE_ENV = originalEnv;
    });

    it('warns when tabCount is used without tabCountSrText in development', () => {
      process.env.NODE_ENV = 'development';

      createComponent({
        propsData: { tabCount: 5 },
        attrs: { title: 'Test' },
      });

      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('[GlTab]'));
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('tab-count-sr-text'));
    });

    it('does not warn in production', () => {
      process.env.NODE_ENV = 'production';

      createComponent({
        propsData: { tabCount: 5 },
        attrs: { title: 'Test' },
      });

      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });
  });
});
