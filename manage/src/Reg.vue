<template>
	<div>
		<p>用户名：<input type="text" v-model="adminName"/></p>
		<p>密码：<input type="password" v-model="passWord"/></p>
		<p>确认密码：<input type="password" v-model="passWord1"/></p>
		<p><input type="button" value="注册" @click="reg"/>点击此处去<a href="javascript:;" @click="toLog">登录</a></p>	
	</div>
</template>

<script>
	export default {
		name:'Reg',
		data(){
			return {
			adminName:"",
			passWord:"",
			passWord1:""
			}	
		},
		methods:{
			toLog(){
				this.$emit("change","Login")
			},
			reg(){
				
				this.$http.post("http://127.0.0.1/reg",{
					adminName:this.adminName,
					passWord:this.passWord,
					passWord1:this.passWord1
				}).then(function(results){
					if(results.body.ok==1){
						this.toLog();
					}
					
				})
			}
		}
	}
</script>

<style>
</style>