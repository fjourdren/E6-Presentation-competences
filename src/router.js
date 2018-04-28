import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/components/NotFound'

import Activites from '@/components/Activites'
import Activite from '@/components/Activite'

import Situations from '@/components/Situations'
import Situation from '@/components/Situation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/activites',
      name: 'Activites',
      component: Activites
    },
    {
      path: '/activite/:activiteId',
      name: 'Activite',
      component: Activite
    },
    {
      path: '/situations',
      name: 'Situations',
      component: Situations
    },
    {
      path: '/situation/:situationId',
      name: 'Situation',
      component: Situation
    },
    {
      path: '/',
      name: 'index',
      redirect: '/activites'
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
