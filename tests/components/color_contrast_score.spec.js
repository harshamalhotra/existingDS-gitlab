import { shallowMount } from '@vue/test-utils';
import ColorContrastScore from '../../components/color_contrast_score.vue';

describe('color-contrast-score component', () => {
  let wrapper;

  // Finders
  const findByTestId = (testid) => wrapper.find(`[data-testid="${testid}"]`);
  const findContrastScore = () => findByTestId('contrast-score');

  const createComponent = (propsData) => {
    wrapper = shallowMount(ColorContrastScore, {
      propsData,
    });
  };

  afterEach(() => {
    wrapper.destroy();
  });

  describe.each`
    hex          | withWhiteText | expectedScore | expectedGrade | expectedClass
    ${'#e9f3fc'} | ${false}      | ${18.7}       | ${'AAA'}      | ${'pass'}
    ${'#e9f3fc'} | ${true}       | ${1.1}        | ${'F'}        | ${'fail'}
    ${'#428fdc'} | ${false}      | ${6.2}        | ${'AA'}       | ${'pass'}
    ${'#428fdc'} | ${true}       | ${3.4}        | ${'AA+'}      | ${'pass'}
  `(
    'with $hex and withWhiteText = $withWhiteText',
    ({ hex, withWhiteText, expectedScore, expectedGrade, expectedClass }) => {
      let contrastScore;

      beforeEach(() => {
        createComponent({
          bgColorHex: hex,
          name: hex,
          withWhiteText,
        });
        contrastScore = findContrastScore();
      });

      afterEach(() => {
        contrastScore = null;
      });

      it(`score is ${expectedScore}`, () => {
        expect(contrastScore.text()).toContain(`(${expectedScore})`);
      });

      it(`grade is ${expectedGrade}`, () => {
        expect(contrastScore.text()).toMatch(new RegExp(`^${expectedGrade}`));
      });

      it(`adds ${expectedClass} class`, () => {
        expect(contrastScore.classes()).toContain(expectedClass);
      });
    },
  );
});
