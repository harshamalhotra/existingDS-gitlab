import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as gitlabComponents from '@gitlab/ui';

Vue.use(BootstrapVue);

Object.entries(gitlabComponents)
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) => Vue.component(componentName, component));
