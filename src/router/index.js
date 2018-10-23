import Vue from 'vue'
import Router from 'vue-router'
import MusicINdex from '@/components/MusicIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicIndex',
      component: MusicINdex
    }
  ]
})
