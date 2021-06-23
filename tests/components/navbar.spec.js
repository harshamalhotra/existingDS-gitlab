import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Navbar from '../../components/navbar.vue';
import mutations from '../../store/mutations';
import state from '../../store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('navbar component', () => {
  let wrapper;
  let store;

  const createComponent = () => {
    store = new Vuex.Store({
      state: state(),
      mutations,
    });
    wrapper = mount(Navbar, {
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
