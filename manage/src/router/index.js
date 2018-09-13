import Vue from 'vue'
import Router from 'vue-router'
import AdminRouter from '@/router/admin'
import UserRouter from '@/router/user'
import ShopRouter from '@/router/shop'
import AdvRouter from '@/router/adv'
import GoodsRouter from '@/router/goods'


Vue.use(Router)

export default new Router({
    mode:"history",
    routes: AdminRouter.concat(UserRouter,ShopRouter,AdvRouter,GoodsRouter)
})