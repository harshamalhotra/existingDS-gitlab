import { makePropCacheMixin } from '../utils/cache'
import { extend, isGlobalVue3 } from '../vue'

const listenersMixinVue2 = makePropCacheMixin('$listeners', 'bvListeners')

const listenersMixinVue3 = extend({
  data() {
    return {
      bvListeners: {}
    }
  },
  created() {
    this.bvListeners = {
      ...this.$listeners
    }
  },
  beforeUpdate() {
    this.bvListeners = {
      ...this.$listeners
    }
  }
})

export const listenersMixin = isGlobalVue3 ? listenersMixinVue3 : listenersMixinVue2
