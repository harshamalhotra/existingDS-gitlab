import * as gitlabComponents from '@gitlab/ui';
import * as gitlabCharts from '@gitlab/ui/dist/charts';

import GlExampleDisplay from '@gitlab/ui/documentation/components/example_display.vue';
import GlExampleExplorer from '@gitlab/ui/documentation/components/example_explorer.vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(gitlabComponents.GlToast); // The toast plugin needs to be registered before being used

Object.entries({ ...gitlabComponents, ...gitlabCharts, GlExampleExplorer, GlExampleDisplay })
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) => Vue.component(componentName, component));
