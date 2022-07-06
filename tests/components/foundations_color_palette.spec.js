import { shallowMount } from '@vue/test-utils';
import FoundationsColorPalette from '../../components/foundations_color_palette.vue';
import ColorContrastScore from '../../components/color_contrast_score.vue';

const shades = [
  {
    name: 'blue-50',
    code: '#e9f3fc',
    class: 'foo',
  },
  {
    name: 'blue-100',
    code: '#cbe2f9',
    class: 'bar',
  },
  {
    name: 'blue-200',
    code: '#9dc7f1',
    class: 'buzz',
  },
];

describe('foundations-color-palette component', () => {
  let wrapper;

  // Finders
  const findByTestId = (testid) => wrapper.find(`[data-testid="${testid}"]`);
  const findName = () => findByTestId('name');
  const findColorContrastScores = () => wrapper.findAllComponents(ColorContrastScore);

  const createComponent = ({ propsData = {}, scopedSlots = {} } = {}) => {
    wrapper = shallowMount(FoundationsColorPalette, {
      propsData: {
        ...propsData,
        shades,
      },
      scopedSlots,
    });
  };

  afterEach(() => {
    wrapper.destroy();
  });

  describe('header', () => {
    it('renders the name prop if provided', () => {
      const name = 'Palette name';
      createComponent({
        propsData: { name },
      });

      expect(findName().text()).toBe(name);
    });

    it('renders the header slot if provided', () => {
      const customHeaderTestId = 'customHeaderTestId';
      createComponent({
        scopedSlots: {
          header: `<div data-testid="${customHeaderTestId}"></div>`,
        },
      });

      expect(findByTestId(customHeaderTestId).exists()).toBe(true);
    });
  });

  describe.each(shades)('shade %s', (shade) => {
    it("renders shade's name", () => {
      createComponent();

      expect(wrapper.text()).toContain(`$${shade.name}`);
    });

    it("renders shade's code", () => {
      createComponent();

      expect(wrapper.text()).toContain(`${shade.code}`);
    });

    it("applies shade's classes", () => {
      createComponent();

      expect(wrapper.find(`.color-overview.${shade.name}.${shade.class}`).exists()).toBe(true);
    });

    it('applies provided class prefix', () => {
      createComponent({
        propsData: { backgroundClassPrefix: 'shade-class-prefix-' },
      });

      expect(
        wrapper.find(`.color-overview.shade-class-prefix-${shade.name}.${shade.class}`).exists(),
      ).toBe(true);
    });
  });

  describe('contrast scores', () => {
    let scores;

    beforeEach(() => {
      createComponent({
        propsData: { showContrastScores: true },
      });
      scores = findColorContrastScores();
    });

    afterEach(() => {
      scores = null;
    });

    it('renders 2 contrast scores per shade', () => {
      expect(scores).toHaveLength(shades.length * 2);
    });

    it('passes proper props to contrast score components', () => {
      let shadeIndex = 0;
      for (let i = 0; i < 6; i += 1) {
        const shade = shades[shadeIndex];
        const withWhiteText = i % 2 !== 0;
        expect(scores.wrappers[i].props()).toEqual({
          bgColorHex: shade.code,
          name: shade.name,
          withWhiteText,
        });
        shadeIndex += withWhiteText ? 1 : 0;
      }
    });
  });
});
