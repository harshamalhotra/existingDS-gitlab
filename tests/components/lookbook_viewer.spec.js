import { shallowMount } from '@vue/test-utils';
import LookbookViewer from '../../components/lookbook_viewer.vue';

window.Lookbook = { initEmbeds: () => {} };

describe('lookbook viewer component', () => {
  let wrapper;

  const createComponent = () => {
    wrapper = shallowMount(LookbookViewer, {
      propsData: {
        component: 'alert',
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
    describe('inspectUrl', () => {
      it('returns the correct URL of the Lookbook server', () => {
        expect(wrapper.vm.inspectUrl).toBe('https://lookbook.example.com/inspect/pajamas/alert');
      });
    });

    describe('previewName', () => {
      it('returns the name of the Lookbook component preview class', () => {
        expect(wrapper.vm.previewName).toBe('Pajamas::AlertComponentPreview');
      });
    });
  });
});
