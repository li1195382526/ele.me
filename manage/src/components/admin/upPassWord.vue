<template>
	<!--<div>
		<div v-if="isMy">
			<p>旧密码：<input type="text" v-model="oldPass"/></p>
			<p>新密码：<input type="text" v-model="pass"/></p>
			<p>确认密码：<input type="text" v-model="pass1"/></p>
			<p><input type="button" value="修改密码" @click="upPassWord"/></p>
		</div>

		<div v-else>
			<p>新密码<input type="text" v-model="pass"/></p>
			<p>确定密码<input type="text"  v-model="pass1"/></p>
			<p><input type="button" value="修改" @click="upPassWord"/></p>
		</div>
		
	</div>-->
	
	<div>
		<p>新密码<input type="text" v-model="pass"/></p>
		<p>确定密码<input type="text"  v-model="pass1"/></p>
		<p><input type="button" value="修改" @click="upPassWord"/></p>
	</div>
	
</template>

<!--<script>
	import Bus from '@/common/Bus'
	export default{
		name:"up-pass-word",
		data(){
			return {
				pass:"",
				pass1:"",
				oldPass:"",
				isMy:false
			}
		},
		methods:{
			upPassWord(){
			if(this.isMy){
				if(!this.oldPass){
					alert("请输入旧密码");
				}else{
				this.$http.post("http://127.0.0.1/upPassWord",{
					pass:this.pass,
					pass1:this.pass1,
					id:localStorage.adminId,
					oldPass:this.oldPass
				}).then(function({body}){
				if(body.ok==1){
					if(!this.isMy){
						alert(body.msg)
					}else{
						alert(body.msg)
						localStorage.removeItem("adminId");
						localStorage.removeItem("adminName");
						Bus.$emit("init");
					}
				}else{
					alert(body.msg)
				}
			})
				}
			}else{
				this.$http.post("http://127.0.0.1/upPassWord",{
					pass:this.pass,
					pass1:this.pass1,
					id:this.$route.params.id,
					oldPass:this.oldPass
				}).then(function({body}){
				if(body.ok==1){
					if(!this.isMy){
						alert(body.msg)
					}else{
						alert(body.msg)
						localStorage.removeItem("adminId");
						localStorage.removeItem("adminName");
						Bus.$emit("init");
					}
				}else{
					alert(body.msg)
				}
			})
			}
			
		}
		},
		mounted(){
			if(this.$route.params.id==localStorage.adminId){
                this.isMy=true;
            }else{
                this.isMy=false
            }
		}
		
	}
</script>-->


<script>
	import Bus from "@/common/bus"
	export default {
		name:"up-pass-word",
		data(){
			return {
				pass:"",
				pass1:""
			}
		},
		methods:{
			upPassWord(){
//				alert(1)
				this.$http.post("http://127.0.0.1/upPassWord",{
					pass:this.pass,
					pass1:this.pass1,
					id:localStorage.adminId
				}).then(function(results){
					if(results.body.ok==1){
						alert(results.body.msg)
						localStorage.removeItem("adminId");
						localStorage.removeItem("adminName");
						Bus.$emit("init");
					}else{
						alert(results.body.msg)
					}
				})
			}
		}
	}
</script>

<style>
</style>