import { config } from '@vue/test-utils';

config.stubs = {
  ...config.stubs,
  'nuxt-link': true,
  nuxt: true,
  'client-only': true,
  'edit-this-page-link': true,
};
