<template>
	<div>
		<table>
			<tr>
				<td>管理员名字</td>
				
				<td>注册时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in adminList">
				<td>{{item.adminName}}</td>
                <td>{{item.regTime | date}}</td>
                <td><a @click="deleteAdminManage(item._id)">删除</a>/
                <router-link :to="{path:'/upPassWord/12'}">修改密码</router-link></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:"admin-manage",
		data(){
			return{
				adminList:[]
			}
		},
		methods:{
			getAdminList(){
				this.$http.get("http://127.0.0.1/getAdminList")
				.then(function({body}){
					if(body.ok==1){
						this.adminList=body.adminList
					}else{
						alert(body.msg)
					}
				})
			},
			deleteAdminManage(id){
				this.$http.post("http://127.0.0.1/deleteAdminManage",{
					id
				}).then(function({body}){
					if(body.ok==1){
						alert(body.msg)
						this.getAdminList()
					}else{
						alert(body.msg)
					}
				})
			}
		},
		mounted(){
			this.getAdminList()
		}
	}
</script>

<style>
</style>