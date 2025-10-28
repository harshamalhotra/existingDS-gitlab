import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { waitForAnimationFrame } from '../../../utils/test_utils';
import { TEST_HOST } from '../../../../tests/__helpers__/constants';
import GlToast from './toast';

Vue.use(GlToast);
const Component = {
  template: `<div />`,
};

describe('GlToast', () => {
  let wrapper;

  const findToasts = () => document.body.querySelectorAll('.gl-toast');

  async function showToast(message = 'foo', options) {
    const toast = wrapper.vm.$toast.show(message, options);

    await waitForAnimationFrame();
    await wrapper.vm.$nextTick();
    await waitForAnimationFrame();
    await wrapper.vm.$nextTick();

    return toast;
  }

  beforeEach(() => {
    wrapper = mount(Component);
  });

  afterEach(async () => {
    findToasts().forEach((toast) => toast.remove());
  });

  it('attaches $toast property', () => {
    expect(wrapper.vm.$toast).toEqual({
      show: expect.any(Function),
    });
  });

  it('shows a toast', async () => {
    expect(findToasts()).toHaveLength(0);

    const toast = await showToast();
    expect(toast).toEqual({
      id: expect.any(String),
      hide: expect.any(Function),
    });

    expect(findToasts()).toHaveLength(1);
  });

  describe('action', () => {
    it('shows href', async () => {
      expect(findToasts()).toHaveLength(0);

      const onClick = jest.fn();
      const href = '/link';
      const text = 'action';

      const { id } = await showToast('with action', {
        action: {
          onClick,
          href,
          text,
        },
      });

      const toast = document.getElementById(id);
      const action = toast.querySelector('a');
      action.click();
      expect(onClick).toHaveBeenCalled();
      expect(action.href).toBe(`${TEST_HOST}${href}`);
      expect(action.textContent).toBe(text);
      expect(action.role).toBe(null);
    });

    it('shows button', async () => {
      expect(findToasts()).toHaveLength(0);

      const onClick = jest.fn();
      const text = 'action';

      const { id } = await showToast('with action', {
        action: {
          onClick,
          text,
        },
      });

      const toast = document.getElementById(id);
      const action = toast.querySelector('a');
      action.click();
      expect(onClick).toHaveBeenCalled();
      expect(action.textContent).toBe(text);
      expect(action.role).toBe('button');
    });
  });

  it('closes the toast when clicking on the close button', async () => {
    await showToast();

    const toasts = findToasts();
    expect(toasts).toHaveLength(1);

    const closeButton = toasts[0].querySelector('.gl-toast-close-button');
    expect(closeButton).not.toBeNull();

    closeButton.click();
    await waitForAnimationFrame();
    await wrapper.vm.$nextTick();

    expect(findToasts()).toHaveLength(0);
  });

  describe('onComplete callback', () => {
    let onCompleteSpy;
    let toast;

    beforeEach(() => {
      onCompleteSpy = jest.fn();

      toast = wrapper.vm.$toast.show('foo', {
        onComplete: onCompleteSpy,
      });
    });

    it('calls onComplete callback only when matching toast hides', () => {
      expect(onCompleteSpy).not.toHaveBeenCalled();

      // Pretend some other toast was hidden.
      wrapper.vm.$root.$emit('bv::toast:hidden', { componentId: 'some other toast' });
      expect(onCompleteSpy).not.toHaveBeenCalled();

      // Pretend our toast was hidden.
      wrapper.vm.$root.$emit('bv::toast:hidden', { componentId: toast.id });
      expect(onCompleteSpy).toHaveBeenCalledTimes(1);
    });

    it('unregisters global listener when toast is hidden', () => {
      expect(onCompleteSpy).not.toHaveBeenCalled();

      // Pretend the toast was hidden. Can't seem to do this directly in jsdom,
      // so fake it by emitting the event we listen for.
      const event = { componentId: toast.id };
      wrapper.vm.$root.$emit('bv::toast:hidden', event);
      expect(onCompleteSpy).toHaveBeenCalledTimes(1);

      // This event won't fire more than once in practice, as once the toast is
      // hidden it'll be destroyed and won't show again. This is here to
      // indirectly test that the listener was removed when the toast is
      // hidden the first time.
      wrapper.vm.$root.$emit('bv::toast:hidden', event);
      expect(onCompleteSpy).toHaveBeenCalledTimes(1);
    });
  });
});
