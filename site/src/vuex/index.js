import Vue from "vue";
import Vuex from "vuex";
import shop from "@/vuex/shop";
import adv from "@/vuex/adv"
import goods from "@/vuex/goods"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        shop,//店铺
        adv,
        goods
    }
})
