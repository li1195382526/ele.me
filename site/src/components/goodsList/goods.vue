<template>
    <div>
    	<!--{{$store.state.goods.goodsList.goodsName}}-->
        <!--<div v-for="item in $store.state.goods.goodsList">
            <h3>{{item.goodsName}}</h3>
            <input type="button" value="加入购物车" @click="addCar">
        </div>-->
        <section>
			<div class = "goodList">
				<ul>
					<li>点餐</li>
					<li>评价</li>
					<li>商家</li>
				</ul>
			</div>
			<div class = "goodList1">
				<h3>商家推荐</h3>
				<ul>
					<li>
						<img src="@/assets/img/p.jpeg" alt="" />
						<p>皮蛋廋肉粥</p>
						<span>月销量471</span>
						<p>￥16</p>
					</li>
					<li>
						<img src="@/assets/img/p.jpeg" alt="" />
						<p>皮蛋廋肉粥</p>
						<span>月销量471</span>
						<p>￥16</p>
					</li>
					<li>
						<img src="@/assets/img/p.jpeg" alt="" />
						
							<p>皮蛋廋肉粥</p>
							<p>月销量471</p>
							<p>￥16</p>
							
					</li>
				</ul>
			</div>
			<div class = "goodList2">
			
				<ul>
					<li v-for="item in $store.state.goods.goodsList">
						<img :src="item.goodsPic | picUrl" alt="" />
						<div class = "col">
						<p>{{item.goodsName}}</p>
						<span>月销量452份</span>
						<p>￥16 <input type="button" value="加入购物车" @click="addCar"/></p>
						</div>
					</li>
					<!--<li>
						<img src="../img/p.jpeg" alt="" />
						<div class = "col">
						<p>皮蛋廋肉粥</p>
						<span>月销量452份</span>
						<p>￥16 +</p>
						</div>
					</li>
					<li>
						<img src="../img/p.jpeg" alt="" />
						<div class = "col">
						<p>皮蛋廋肉粥</p>
						<span>月销量452份</span>
						<p>￥16 +</p>
						</div>
					</li>
					<li>
						<img src="../img/p.jpeg" alt="" />
						<div class = "col">
						<p>皮蛋廋肉粥</p>
						<span>月销量452份</span>
						<p>￥16 +</p>
						</div>
					</li>-->
				</ul>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        name: "goods-list",
        methods:{
            addCar(){
                if(localStorage.userId){
                    this.$toast("提示信息");

                }else{
                    console.log(this.$route);
                    this.$router.push({path:"/my",query:{url:this.$route.fullPath}})
                }
            }
        },
        mounted(){
            this.$store.dispatch("getGoodsListByShopId",this.$route.query.shopId);
        }
    }
</script>

<style>
	*{
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
a{
  text-decotation:none;
}
html,body{
  width:100%;
  height:100%;
}
body{
display:flex;
flex-direction:column;
width:100%;
height:100%;
}
header{
  width:100%;
  height:85px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
}
header img{
	width:100%;
	}
header .img{
	width:65px;
	height:65px;
	position:absolute;
	left:128px;
	top:55px;
}
aside{
	display:flex;
	width:100%;
	height:173px;
}
aside ul{
	width:100%;
	text-align:center;
	margin-top:20px;
}
aside ul li:nth-child(1){
	font-size:18px;
	font-weight:bolder;
	color:#000;
	line-height:30px;
}
aside ul li:nth-child(2){
	font-size:8px;
	color:#666;
	line-height:16px;
}
aside ul li:nth-child(3){
	font-size:12px;
	width:122px;
	height:20px;
	background:#ffe578;
	line-height:20px;
	margin-left:99px;
}
aside ul li:nth-child(4){
	color:#333;
	font-size:9px;
	line-height:21px;
}
aside ul li:nth-child(5){
	color:#999;
	font-size:9px;
	
}
section{
	width:100%;
	display:flex;
	flex:1;
	overflow:auto;
	flex-direction:column ;
}
section .goodList{
	width:100%;
	height:32px;
}
section .goodList ul{
	display:flex;
	width:100%;
	height:32px;
	border-bottom:1px solid #ccc;
	justify-content:space-around;
}
section .goodList ul li{
	display:flex;
	font-size:12px;
	align-items: center;
}
section .goodList1{
	width:100%;
	height:206px;
}
section .goodList1 h3{
	font-size:12px;
	margin-left:14px;
	line-height:38px;
}
section .goodList1 ul{
	width:100%;
	height:168px;
	display:flex;
	justify-content:space-around;
}
section .goodList1 ul li{
	width:31.8%;
	height:168px;
}
section .goodList1 ul li img{
	width:100%;
}
section .goodList1 ul li p{
	font-size:12px;
}
section .goodList1 ul li span{
	font-size:12px;
}
section .goodList2{
	width:100%;
}
section .goodList2 ul{
	width:100%;
	display:flex;
	flex-direction: column;
	justify-content:space-around;
}
section .goodList2 ul li{
	display:flex;
	
	margin-top:17px;
}
section .goodList2 ul li img{
	width:31%;
	height:80px;
}
section .goodList2 ul li .col{
	height:80px;
	width:70%;
	display:flex;
	flex-direction:column;
}
section .goodList2 ul li p{
	font-size:12px;
}
section .goodList2 ul li span{
	font-size:12px;
}
</style>
