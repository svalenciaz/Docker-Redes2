import Vue from 'vue'
import Router from 'vue-router'

import ListQuote from '@/components/Quote/ListQuote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListQuote',
      component: ListQuote
    }
  ],
  mode: 'history'
})
