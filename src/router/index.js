import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Playlist from '@/components/Playlist'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/playlist/:playlist_id',
      name: 'Playlist',
      component: Playlist,
      props: true
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
