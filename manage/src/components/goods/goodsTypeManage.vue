<template>
	<div>
		<table>
			<tr>
				<td>店铺类型名称</td>
				<td>商品类型名称</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in goodsTypeList">
				<td>{{item.shopTypeName}}</td>
				<td>{{item.goodsTypeName}}</td>
				<td>修改
					删除
					<router-link :to="{path:'/addGoodsType',query:{shopId:item.shopId,goodsTypeId:item._id}}">添加商品类别</router-link>
                    <router-link :to="{path:'/addGoods',query:{shopId:item._id}}">添加商品</router-link>
					<!--添加商品
					添加类别-->
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:"goods-type-manage",
		data(){
			return{
				goodsTypeList:[]
			}
		},
		methods:{
			getGoodsType(){
				this.$ajax.get("http://127.0.0.1/getGoodsType")
				.then(({data})=>{
					if(data.ok==1){
						this.goodsTypeList=data.goodsTypeList
					}else{
						alert("失败")
					}
					
				})
			}
		},
		mounted(){
			this.getGoodsType();
		}
	}
</script>

<style>
</style>