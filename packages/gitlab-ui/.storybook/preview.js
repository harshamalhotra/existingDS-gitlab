import { useArgs } from '@storybook/preview-api';

import 'iframe-resizer/js/iframeResizer.contentWindow.min';
import setConfigs from '../src/config';
import logoWithBlackText from '../static/img/_logo_with_black_text.svg';
import logoWithWhiteText from '../static/img/_logo_with_white_text.svg';

import '../src/scss/bootstrap.scss';
import '../src/scss/storybook.scss';

const decorators = [
  (story, context) => {
    const [, updateArgs] = useArgs();
    return story({ ...context, updateArgs });
  },
  () => ({
    template: '<story />',
    mounted() {
      window.addEventListener('message', this.toggleDarkModeClass);

      // Request initial dark mode state from parent
      window.parent.postMessage({ type: 'REQUEST_DARK_MODE_STATE' }, '*');

      this.$nextTick()
        .then(() => {
          return this.$el.parentElement.classList.add('vue-component-mounted');
        })
        .catch(() => {});
    },
    beforeDestroy() {
      window.removeEventListener('message', this.toggleDarkModeClass);
    },
    methods: {
      toggleDarkModeClass(event) {
        if (event.data && typeof event.data.isDarkMode === 'boolean') {
          document.documentElement.classList.toggle('gl-dark', event.data.isDarkMode);
        }
      },
    }
  }),
];

setConfigs();

const theme = {
  brandTitle: 'GitLab UI',
  brandUrl: 'https://gitlab.com/gitlab-org/gitlab-ui',
};

const parameters = {
  darkMode: {
    current: 'light',
    stylePreview: true,
    classTarget: 'html',
    darkClass: 'gl-dark',
    dark: {
      ...theme,
      brandImage: logoWithWhiteText,
    },
    light: {
      ...theme,
      brandImage: logoWithBlackText,
    },
  },
  a11y: {},
  viewport: {
    viewports: {
      breakpointSmall: {
        name: 'Breakpoint small (width: 320px)',
        styles: {
          height: '568px',
          width: '320px',
        },
      },
      breakpointMedium: {
        name: 'Breakpoint medium (width: 768px)',
        styles: {
          height: '1024px',
          width: '768px',
        },
      },
      breakpointLarge: {
        name: 'Breakpoint large (width: 1024px)',
        styles: {
          height: '768px',
          width: '1024px',
        },
      },
      breakpointExtraLarge: {
        name: 'Breakpoint extra large (width: 1280px)',
        styles: {
          height: '800px',
          width: '1280px',
        },
      },
    },
  },
};

/**
 * When running in test mode, we do small adjustments to help with visual regression testing:
 * - Skip DocsPage settings to prevent JSX errors.
 * - Set the layout to fullscreen to ensure stories are full-width.
 */
if (process.env.IS_VISUAL_TEST) {
  parameters.layout = 'fullscreen';
} else {
  // eslint-disable-next-line global-require
  const { page } = require('./docs/page');
  parameters.docs = { page };
}

// eslint-disable-next-line import/no-default-export
export default { decorators, parameters };
