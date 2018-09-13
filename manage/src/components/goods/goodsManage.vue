<template>
	<div>
		<table>
			<tr>
				<td>商品名称</td>
				<td>商品图片</td>
				<td>商品价钱</td>
				<td>商品数量</td>
				<td>店铺</td>
				<td>商品类别</td>
				<td>添加时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in goodsList">
				<td>{{item.goodsName}}</td>
				<td><img :src="item.goodsPic | picUrl" width="50px" alt="" /></td>
				<td>{{item.goodsPrice}}</td>
				<td>{{item.goodsNum}}</td>
				<td>{{item.shopName}}</td>
				<td>{{item.goodsType}}</td>
				<td>{{item.addTime | date}}</td>
				<td>
					<a @click="deleteGoods(item._id)">删除 </a>修改 
					 <router-link :to="{path:'/addGoods',query:{shopId:item._id}}">添加商品</router-link>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:"goods-manage",
		data(){
			return{
				goodsList:[]
			}
		},
		methods:{
			getGoods(){
				this.$ajax.get("http://127.0.0.1/getGoods")
				.then(({data})=>{
					this.goodsList=data.goodsList
				})
			},
			deleteGoods(id){
				this.$ajax.post("http://127.0.0.1/deleteGoods",{
					id
				}).then(({data})=>{
					if(data.ok==1){
						alert(data.msg)
						this.getGoods()
					}
				})
			}
		},
		mounted(){
			this.getGoods()
		}
	}
</script>

<style>
</style>