import { makePropCacheMixin } from '../utils/cache'
import { extend, isGlobalVue3 } from '../vue'

const attrsMixinVue2 = makePropCacheMixin('$attrs', 'bvAttrs')
const attrsMixinVue3 = extend({
  computed: {
    bvAttrs() {
      const bvAttrs = { ...this.$attrs }
      Object.keys(bvAttrs).forEach(key => {
        if (bvAttrs[key] === undefined) {
          delete bvAttrs[key]
        }
      })
      return bvAttrs
    }
  }
})

export const attrsMixin = isGlobalVue3 ? attrsMixinVue3 : attrsMixinVue2
