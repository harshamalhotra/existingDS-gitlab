import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DefaultLayout from '../../layouts/default.vue';
import mutations from '../../store/mutations';
import state from '../../store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('default layout', () => {
  let wrapper;
  let store;

  const createComponent = () => {
    store = new Vuex.Store({
      state: state(),
      mutations,
    });
    wrapper = mount(DefaultLayout, {
      localVue,
      store,
      stubs: {
        search: true,
      },
      mocks: {
        $route: {
          fullPath: '/',
          params: {
            section: '',
          },
        },
      },
    });
  };

  beforeEach(() => {
    createComponent();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders sidebar properly', () => {
    expect(wrapper.find('nav').element).toMatchSnapshot();
  });
});
