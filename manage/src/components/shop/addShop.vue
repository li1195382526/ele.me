<template>
	<div>
		<form id="myform">
			<p>店铺名称：<input type="text" name="shopName"/></p>
			<p>店铺图片：<input type="file" name="shopPic"/></p>
			<p>商店类别：<select name="shopTypeId">
				<option v-for="item in shopTypeList" :value="item._id">{{item.shopTypeName}}</option>
			</select>
			</p>
			<p><input type="button" value="提交" @click="addShop"/></p>
		</form>
		
	</div>
</template>

<script>
	export default {
	  	name:"add-shop",
	  	data(){
	  		return{
	  			shopTypeList:[]
	  		}
	  	},
	  	methods:{
	  		getShopTypeList(){
	  			this.$ajax.get("http://127.0.0.1/getShopType")
	  			.then(({data})=>{
	  				if(data.ok==1){
//	  					alert(data.shopTypeList)
	  					this.shopTypeList=data.shopTypeList
	  				}else{
	  					alert()
	  				}
	  			
	  			})
	  		},
	  		addShop(){
	  			this.$ajax.post("http://127.0.0.1/addShop",new FormData(document.querySelector("#myform")))
	  			.then(({data})=>{
	  				if(data.ok==1){
	  					this.$router.push("/shopManage")
	  				}else{
	  					alert(data.msg)
	  				}
	  				
	  			})
	  		}
	  	},
	  	mounted(){
	  		this.getShopTypeList()
	  	}
	  }
</script>

<style>
</style>