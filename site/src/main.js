// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex"

//import home from '@/components/home/index'
import axios from 'axios'
import filter from "@/filters"
Vue.config.productionTip = false
Vue.prototype.$ajax=axios;
for(var f in filter){
    Vue.filter(f,filter[f]);
}
//filters.forEach(function(v){
//
//  Vue.filter(v.filterName,v[v.filterName])
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
