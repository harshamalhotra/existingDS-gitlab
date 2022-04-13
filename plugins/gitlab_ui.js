import * as gitlabComponents from '@gitlab/ui';
import * as gitlabCharts from '@gitlab/ui/dist/charts';

import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(gitlabComponents.GlToast); // The toast plugin needs to be registered before being used

Object.entries({
  ...gitlabComponents,
  ...gitlabCharts,
})
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) => Vue.component(componentName, component));

// eslint-disable-next-line import/no-default-export
export default (_ctx, inject) => {
  inject('gitlabUiUrl', process.env.GITLAB_UI_URL);
};
