<template>
	<div>
		<form id="myForm">
			<p>广告名称：<input type="text" name="advName"/></p>
			<p>广告图片：<input type="file" name="advPic"/></p>
			<p>广告排序：<input type="text" name="orderNum"></p>
			<p><input type="button" value="添加广告" @click="addAdv"/></p>
		</form>
	</div>
</template>

<script>
	export default{
		name:"add-adv",
		methods:{
			addAdv(){
				var formdata=new FormData(document.querySelector("#myForm"));
                this.$http.post("http://127.0.0.1/addAdv",formdata)
                    .then(function({body}){
                        if(body.ok==1){
                        	alert(body.msg)
                            this.$router.push("/advManage")  
                        }else{
                            alert(body.msg);
                        }
                    })
            }
			}
		}
	
</script>

<style>
</style>