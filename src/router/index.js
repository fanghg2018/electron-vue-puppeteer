import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import List from '../components/user/List.vue'
import Msg from '../components/msg/msgs.vue'
import Order from '../components/order/orders.vue'
import A1 from '../components/order/1.vue'
import A2 from '../components/order/2.vue'
import Puppeteer from '../components/puppeteer/index.vue'
import Xlsx from '../components/xlsx/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/users',
    component: List
  },
  {
    path: '/msgs',
    component: Msg
  },
  {
    path: '/orders',
    component: Order,
    children: [
      {
        path: '',
        component: A1
      },
      {
        path: '1',
        component: A1
      },
      {
        path: '2',
        component: A2
      }
    ]
  },
  {
    path: '/puppeteer',
    component: Puppeteer
  },
  {
    path: '/xlsx',
    component: Xlsx
  }

]

const router = new VueRouter({
  routes
})

export default router
