import { isGlobalVue3 } from '../vue'

let registry = null
if (isGlobalVue3) {
  registry = new WeakMap()
}

export const registerElementToInstance = (element, instance) => {
  if (!isGlobalVue3) {
    return
  }

  registry.set(element, instance)
}

export const removeElementToInstance = element => {
  if (!isGlobalVue3) {
    return
  }

  registry.delete(element)
}

export const getInstanceFromElement = element => {
  if (!isGlobalVue3) {
    return element.__vue__
  }

  let currentElement = element

  while (currentElement) {
    if (registry.has(currentElement)) {
      /* istanbul ignore next */
      return registry.get(currentElement)
    }
    currentElement = currentElement.parentNode
  }

  return null
}
