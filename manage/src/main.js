// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Login from './Login'
import Reg from './Reg'
import filter from './filter'
import Bus from './common/bus'
import axios from "axios"
import bus from "./common/bus"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$ajax=axios;
Vue.prototype.$bus=bus;
for(var f in filter){
	Vue.filter(f,filter[f]);
}
router.beforeEach((to,from,next)=>{
	if(!localStorage.adminId && to.meta.requestAuthor){
//		next(false)
	Bus.$emit("init")
	}else{
		next()
	}	
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
  	App,Login,Reg
  },
  data:{
  	isCom:"Login"
  },
  methods:{
  	init(){
  		if(localStorage.adminId){
                this.isCom="App";
                this.$router.push("/")
           }else{
                this.isCom="Login";
                
           }
  	},
  	changeCom(str){
                this.isCom=str;
           },
    fn(){
    	alert(1)
    }
  },
template: `<components :is="isCom" @init="init" @change="changeCom"/>`,
  mounted(){
  	this.init();
//	var _this=this;
  	Bus.$on("init",()=>{
		console.log(this);
			this.init();
  	})
  }
})
