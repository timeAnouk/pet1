import Vue from 'vue'
import Router from 'vue-router'
import MemberEntry from '@/components/MemberEntry'
//import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemberEntry',
      component: MemberEntry
    }
  ]
})
