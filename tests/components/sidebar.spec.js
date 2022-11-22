import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Sidebar from '../../components/sidebar.vue';
import mutations from '../../store/mutations';
import state from '../../store/state';

const navMock = [
  {
    title: 'Top-level item 1',
    path: 'top1',
    items: [
      {
        title: 'Second-level item 1',
        path: 'second1',
      },
      {
        title: 'Second-level item 2',
        path: 'second2',
        items: [
          {
            title: 'Third-level item 1',
            path: 'third1',
          },
          {
            title: 'Third-level item 2',
            path: 'third2',
          },
        ],
      },
    ],
  },
  {
    title: 'Top-level item 2',
    path: 'top2',
    items: [
      {
        title: 'Second-level item without path',
        items: [
          {
            title: 'Third-level item 3',
            path: 'third2',
          },
        ],
      },
    ],
  },
];

jest.mock('../../nav.json', () => navMock);

const localVue = createLocalVue();
localVue.use(Vuex);

describe('sidebar component', () => {
  let wrapper;
  let store;

  const createComponent = () => {
    store = new Vuex.Store({
      state: state(),
      mutations,
    });
    wrapper = mount(Sidebar, {
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
        $router: {
          afterEach: () => {},
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
