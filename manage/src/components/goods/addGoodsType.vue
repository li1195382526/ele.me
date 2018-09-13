<template>
	<div>
		<p>商品类别名称：<input type="text" v-model="goodsTypeName"/></p>
		<p>添加店铺：<select v-model="shopId">
			<option value="">----请选择----</option>
			<option v-for="item in shopList" :value="item._id">{{item.shopName}}</option>
		</select></p>
		<p><input type="button" value="提交" @click="addGoodsType"/></p>
	</div>
</template>

<script>
	export default{
		name:"add-goods-type",
		data(){
			return{
				shopList:[],
				shopId:'',
				goodsTypeName:""
			}
		},
		methods:{
			getShopList(){
				this.$ajax.get("http://127.0.0.1/getShopList")
				.then(({data})=>{
					if(data.ok==1){
						this.shopList=data.shopList
					}else{
						alert(data.msg)
					}
						
				})	
			},
			addGoodsType(){
				this.$ajax.post("http://127.0.0.1/addGoodsType",{
					shopId:this.shopId,
					goodsTypeName:this.goodsTypeName
				}).then(({data})=>{
					if(data.ok==1){
						this.$router.push("/goodsTypeManage")
					}else{
						alert(data.msg)
					}
				})
			}
		},
		mounted(){
			this.getShopList();
		}
	}
</script>

<style>
</style>