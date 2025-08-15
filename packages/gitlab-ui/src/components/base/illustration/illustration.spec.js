import { shallowMount } from '@vue/test-utils';
import Illustration from './illustration.vue';

const ILLUSTRATIONS_PATH = '/path/to/illustrations.svg';
const TEST_NAME = 'add-user-sm';

jest.mock('@gitlab/svgs/dist/illustrations.svg', () => '/path/to/illustrations.svg');

describe('Illustration component', () => {
  let wrapper;
  let consoleSpy;

  const createComponent = (props) => {
    wrapper = shallowMount(Illustration, {
      propsData: {
        name: TEST_NAME,
        ...props,
      },
    });
  };

  const validateName = (name) => Illustration.props.name.validator(name);

  afterEach(() => {
    if (consoleSpy) {
      consoleSpy.mockRestore();
    }
  });

  it('has role=presentation', () => {
    createComponent();

    expect(wrapper.attributes('role')).toBe('presentation');
  });

  describe('when created', () => {
    beforeEach(() => {
      createComponent();
    });

    it(`shows svg path "${ILLUSTRATIONS_PATH}#${TEST_NAME}"`, () => {
      expect(wrapper.find('use').attributes('href')).toEqual(`${ILLUSTRATIONS_PATH}#${TEST_NAME}`);
    });
  });

  describe('name validator', () => {
    it('fails with name that does not exist', () => {
      const badName = `${TEST_NAME}-bogus-zebra`;
      consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      expect(validateName(badName)).toBe(false);

      expect(consoleSpy).toHaveBeenCalledWith(
        `Illustration '${badName}' is not a known illustration of @gitlab/svgs`,
      );
    });

    it('passes with name that exists', () => {
      expect(validateName(TEST_NAME)).toBe(true);
    });
  });
});
