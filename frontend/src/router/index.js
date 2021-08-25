import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListQuote from '@/components/Quote/ListQuote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/quotes',
      name: 'ListQuote',
      component: ListQuote
    }
  ],
  mode: 'history'
})
