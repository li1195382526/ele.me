<template>
	<div>
		<table>
			<tr>
				<td>店铺名称</td>
				<td>店铺图片</td>
				<td>店铺类别</td>
				<td>添加时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in shopList">
				<td>{{item.shopName}}</td>
				<td><img :src="'http://127.0.0.1/'+item.shopPic" alt="" width=50px/></td>
				<td>{{item.shopTypeName}}</td>
				<td>{{item.addTime | date}}</td>
				<td>修改 <a @click="deleteShopManage(item._id)">删除</a>
					<router-link :to="{path:'/addGoodsType',query:{shopId:item._id}}">添加商品类别</router-link>
                    <router-link :to="{path:'/addGoods',query:{shopId:item._id}}">添加商品</router-link>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:"shop-manage",
		data(){
			return{
				shopList:[]
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
			deleteShopManage(id){
				this.$ajax.post("http://127.0.0.1/deleteShopManage",{
					id
				}).then(({data})=>{
					if(data.ok==1){
						alert(data.msg)
						this.getShopList()
					}else{
						alert(data.msg)
					}
				})
			}
		},
		mounted(){
			this.getShopList()
		}
	}
</script>

<style>
</style>