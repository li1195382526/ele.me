import Vue from 'vue'
import Router from 'vue-router'
import home from '@/router/home'
import order from '@/router/order'
import my from '@/router/my'
import find from '@/router/find'
import shop from "@/router/shop"
import goods from "@/router/goods"
Vue.use(Router)

export default new Router({
  routes:home.concat(order,my,shop,find,goods)
})