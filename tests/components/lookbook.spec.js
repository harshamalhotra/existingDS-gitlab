import { shallowMount } from '@vue/test-utils';
import Lookbook from '../../pages/_section/_slug/lookbook.vue';

window.Lookbook = { initEmbeds: () => {} };

describe('lookbook component', () => {
  let wrapper;

  const createComponent = () => {
    wrapper = shallowMount(Lookbook, {
      propsData: {
        page: { slug: 'progress-bar' },
      },
      stubs: {
        'lookbook-embed': true,
      },
      mocks: {
        $lookbookUrl: 'https://lookbook.example.com',
      },
    });
  };

  beforeEach(() => {
    createComponent();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  describe('computed properties', () => {
    describe('componentName', () => {
      it('maps the page slug to a component name', () => {
        expect(wrapper.vm.componentName).toBe('progress');
      });
    });

    describe('inspectUrl', () => {
      it('returns the correct URL of the Lookbook server', () => {
        expect(wrapper.vm.inspectUrl).toBe('https://lookbook.example.com/inspect/pajamas/progress');
      });
    });

    describe('previewName', () => {
      it('returns the name of the Lookbook component preview class', () => {
        expect(wrapper.vm.previewName).toBe('Pajamas::ProgressComponentPreview');
      });
    });
  });
});
