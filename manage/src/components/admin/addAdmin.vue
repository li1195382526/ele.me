<template>
	<div>
		<p>管理员名称:<input type="text" v-model="adminName"/></p>
		<p>管理员密码：<input type="password" v-model="passWord"/></p>
		<p><input type="button" value="提交" @click="addAdmin"/></p>
	</div>
</template>

<script>
	export default{
		name:"add-admin",
		data(){
			return{
				adminName:"",
				passWord:""
			}
		},
		methods:{
			addAdmin(){
				this.$http.post("http://127.0.0.1/addAdmin",{
					adminName:this.adminName,
					passWord:this.passWord
				}).then(function({body}){
					if(body.ok==1){
						alert(body.msg)
						this.$router.push("/adminManage")
					}else{
						alert(body.msg)
					}
				})
			}
		}
//		,
//		mounted(){
//			this.addAdmin1()
//		}
	}
</script>

<style>
</style>