<template>
	<div>
		<input type="button" value="返回" @click="back"/>
		<form id="myForm">
			<p><input type="text" v-model="id" name="id" style="display:none"/></p>
			<p>店铺类别名称：<input type="text" name="shopTypeName" v-model="shopTypeName"/></p>
			<p>店铺类别图片<input type="file" name="shopTypePic"/><img width="200px" id="myPic" src="'http://127.0.0.1/'+shopTypePic" alt=""></p>
			<p>店铺类别排名：<input type="text" name="orderNum" v-model="orderNum"/></p>
			<p v-if="isAdd"><input type="button" value="提交"  @click="addShopType"></p>
            <p v-else><input type="button" value="修改"  @click="upShopType"></p>
		</form>
	</div>
</template>

<script>
	export default{
		name:"add-shop-type",
		 data(){
            return {
                isAdd:true,//isAdd为true是添加，否则为修改
                shopTypeName:"",
                orderNum:"",
                shopTypePic:"",
                id:""
            }
        },
		methods:{
			 addShopType(){
                var formdata=new FormData(document.querySelector("#myForm"));
                this.$http.post("http://127.0.0.1/addShopType",formdata)
                    .then(function({body}){
                        if(body.ok==1){
                        	alert(body.msg)
                            this.$router.push("/shopTypeManage")  
                        }else{
                            alert(body.msg);
                        }
                    })
            },
            upShopType(){
            	
            	var formdata=new FormData(document.querySelector("#myForm"));
                this.$http.post("http://127.0.0.1/upShopType",formdata)
                    .then(function({body}){
                        if(body.ok==1){
                        	alert(body.msg)
                            this.$router.push("/shopTypeManage")  
                        }else{
                            alert(body.msg);
                        }
                    })
            },
            back(){
                this.$router.go(-1);
            },
            getShopTypeId(){
				 var id = this.$route.params.shopTypeId
//				 console.log(id)
                this.$ajax.post("http://127.0.0.1/getShopTypeId",{
					id
						}).then(({data})=>{
                        if(data.ok==1){
//                      	alert(1)
//							console.log(data.shopTypeList.shopTypeName)
//							alert(this.$route.params.shopTypeId)
							this.id = this.$route.params.shopTypeId
							this.shopTypeName=data.shopTypeList.shopTypeName
            				this.orderNum=data.shopTypeList.orderNum
            				this.shopTyePic=data.shopTypeList.shopTypePic
							
                        	
//                          this.shopTypeList=body.shopTypeList
                        }else{
                            alert(body.msg);
                        }
                    })
            },
//          getShop(){
//          	this.$ajax.get("http://127.0.0.1/getShop")
//          	.then(({data})=>{
//          		this.shopTypeName=data.shopTypeName
//          		this.orderNum=orderNum
//          	})
//          },
            init(){
                if(this.$route.params.shopTypeId){
                    this.isAdd=false;
                    this.getShopTypeId()
                }
            }
			},
			mounted(){
				this.init()
//				if(!this.isAdd){
//					this.getShopTypeId()
//				}
				
			}
		}
</script>

<style>
</style>