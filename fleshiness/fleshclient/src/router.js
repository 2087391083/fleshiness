import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Help from "./views/Help.vue"
import Index from "./views/Index.vue"
import Plants from "./views/Plants.vue"
import Potting from "./views/Potting.vue"
import Materials from "./views/Materials.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: "/help",
      component: Help
    },
    {
      path:"/plants",
      name: "plants 多肉植物",
      component : Plants
    },{
      path:"/potting",
      name:"potting 绿植盆栽",
      component: Potting
    },
    {
      path:"/materials",
      name:"materials 园艺资料",
      component: Materials
    }
  ]
})
