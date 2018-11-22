import Vue from 'vue'
import * as gitlabComponents from '@gitlab/ui/documentation' // eslint-disable-line import/no-duplicates
import { GlComponentDocumentation } from '@gitlab/ui/documentation' // eslint-disable-line import/no-duplicates

Object.entries(gitlabComponents)
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) =>
    Vue.component(componentName, component)
  )

Vue.use(GlComponentDocumentation)
