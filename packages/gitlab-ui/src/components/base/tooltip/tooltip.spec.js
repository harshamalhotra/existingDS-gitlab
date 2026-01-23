import { shallowMount } from '@vue/test-utils';
import { tooltipActionEvents } from '../../../utils/constants';
import { setGlTooltipDefaultContainer } from '../../../directives/tooltip/container';
import GlTooltip from './tooltip.vue';

describe('GlTooltip', () => {
  let wrapper;

  const createWrapper = (stubs = {}) => {
    wrapper = shallowMount(GlTooltip, {
      propsData: {
        target: document.body,
      },
      stubs,
    });
  };

  const findBVTooltip = () => wrapper.findComponent({ ref: 'bvTooltip' });

  it.each(tooltipActionEvents)('passes through the %s event to call bvTooltip method', (event) => {
    const methodMock = jest.fn();
    createWrapper({
      BTooltip: {
        template: '<div></div>',
        methods: {
          [event]: methodMock,
        },
      },
    });

    wrapper.vm.$emit(event);

    expect(methodMock).toHaveBeenCalled();
  });

  it('respects custom default container', () => {
    setGlTooltipDefaultContainer('#custom-element');
    createWrapper();
    expect(findBVTooltip().props('container')).toBe('#custom-element');
  });
});
