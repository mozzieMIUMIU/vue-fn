import Vue from 'vue'
import Router from 'vue-router'
import abc from '@/components/abc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'abc',
      component: abc
    }
  ]
})
