import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
  //Hash, History
  // https://google.com/#/search => 새로고침시 페이지를 찾을 수 없음을 방지
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  //페이지들
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    }, 
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})