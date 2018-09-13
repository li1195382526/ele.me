<template>
	<div>
		<p>用户名：<input type="text" v-model="adminName"/></p>
		<p>密    码：<input type="text" v-model="passWord"/></p>
		<p><input type="button" value="登录" @click="login"/>点击此处去<a href="javascript:;" @click="toReg">注册</a></p>
	</div>
</template>

<script>
	export default{
		name:"Login",
		data(){
			return {
				adminName:"",
				passWord:""
			}
		},
		methods:{
			login(){
				this.$http.post("http://127.0.0.1/login",{
					adminName:this.adminName,
					passWord:this.passWord
				}).then(function(results){
					if(results.body.ok==1){
						localStorage.adminId=results.body.adminId;
                        localStorage.adminName=results.body.adminName;
                        localStorage.token=results.body.token;
                        this.$emit("init");
					}else{
						alert(results.body.msg)
					}
				})
//				 sessionStorage.adminId="123";
//                 this.$emit("init");
			},
			toReg(){
				this.$emit("change","Reg")
			}
		}
	}
</script>

<style>
</style>