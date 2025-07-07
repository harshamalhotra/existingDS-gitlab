import Vue, { nextTick } from 'vue';
import { VueLive } from 'vue-live';
import * as components from '@gitlab/ui/src/components';
import LiveExampleLayout from '../components/live_example_layout.vue';

const EDITABLE_FLAG = '<!-- live-example -->';

function initLiveExamples(el) {
  const codeblocks = [...el.querySelectorAll('pre.language-html')].filter((codeblock) =>
    codeblock.textContent.includes(EDITABLE_FLAG),
  );

  return codeblocks.map((codeblock) => {
    const code = codeblock.textContent.replace(EDITABLE_FLAG, '').trim();

    const instance = new Vue({
      name: 'LiveExample',
      render(createElement) {
        return createElement(VueLive, {
          props: {
            code,
            layout: LiveExampleLayout,
            editorProps: { lineNumbers: false },
            // Spread to ensure it's a plain Object, not a Module.
            components: { ...components },
          },
        });
      },
    });

    instance.$mount(codeblock.closest('.nuxt-content-highlight'));

    return instance;
  });
}

const instancesMap = new WeakMap();

Vue.directive('live-examples', {
  bind(el) {
    nextTick(() => {
      instancesMap.set(el, initLiveExamples(el));
    });
  },

  unbind(el) {
    if (!instancesMap.has(el)) return;

    for (const instance of instancesMap.get(el)) {
      instance.$destroy();
    }

    instancesMap.delete(el);
  },
});
