<template>
	<div>
		<form id="myform">
			<p>商品名称：<input type="text" name="goodsName"/></p>
			<p>商品图片：<input type="file" name="goodsPic"/></p>
			<p>商品价钱：<input type="text" name="goodsPrice"/></p>
			<p>商品数量：<input type="text" name="goodsNum"/></p>
			<p>店铺名称：<select name="shopId" v-model="shopId" @change="getGoodsTypeByShopId">
				<option value="">---请输入---</option>
				<option v-for="item in shopList" :value="item._id">{{item.shopName}}</option>
			</select></p>
			<p>商品类别：<select name="goodsTypeId"  v-model="goodsTypeId">
				<option value="">---请输入---</option>
				<option v-for="item in goodsTypeList" :value="item._id">{{item.goodsTypeName}}</option>
			</select></p>
			
			<p><input type="button" value="添加" @click="addGoods"/></p>
		</form>
	</div>
</template>

<script>
	export default{
		name:"add-goods",
		data(){
			return{
				shopId:"",
				goodsTypeList:[],
				shopList:[],
				goodsTypeId:""
			}
		},
		methods:{
			addGoods(){
				this.$ajax.post("http://127.0.0.1/addGoods",new FormData(document.querySelector("#myform")))
				.then(({data})=>{
					if(data.ok==1){
						alert(data.msg)
						this.$router.push("/goodsManage")
					}else{
						alert(data.msg)
					}
				})

			},
//			getGoodsType(){
//				this.$ajax.get("http://127.0.0.1/getGoodsType")
//				.then(({data})=>{
//					if(data.ok==1){
//						this.goodsTypeList=data.goodsTypeList
//					}
//				})
//			},
			getShopList(){
				this.$ajax.get("http://127.0.0.1/getShopList")
				.then(({data})=>{
					if(data.ok==1){
						this.shopList=data.shopList
					}
				})
			},
			 getGoodsTypeByShopId(){
                this.$ajax.get("http://127.0.0.1/getGoodsTypeByShopId",{
                    params:{
                        shopId:this.shopId
                    }
                }).then(({data})=>{
//                  alert(data.goodsTypeList);
                    this.goodsTypeList=data.goodsTypeList;
                })
            }
		},
		mounted(){
			 if(this.$route.query.shopId){
                this.shopId=this.$route.query.shopId;
                this.getGoodsTypeByShopId();
            }
            if(this.$route.query.goodsTypeId){
                this.goodsTypeId=this.$route.query.goodsTypeId;
            }
            this.getShopList();
		}
	}
</script>

<style>
</style>