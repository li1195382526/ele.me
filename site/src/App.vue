<template>
  <div id="app">
  	<router-view/>
    <top v-if="$route.meta.isTop"></top>
     <div v-else>
          <input type="button" value="<" @click="backFn">
      </div>
  </div>
</template>

<script>
	import top from "@/components/top"
export default {
  name: 'App',
  methods:{
  	backFn(){
  		this.$router.go(-1);
  	}
  },
  components:{
  	top
  }
}
</script>

<style>
#app {

}
</style>
