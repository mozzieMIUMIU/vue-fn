import abc from './abc.vue'

const VueFn = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueFn', abc)
  }
}

export default VueFn
