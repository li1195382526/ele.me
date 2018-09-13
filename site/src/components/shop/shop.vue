<template>
    <div>
        <!--{{$store.state.shop.shopInfo.shopName}}-->
		<header>
			<img src="@/assets/img/h.gif" alt="" />
			<div class = "img"><img src="@/assets/img/2.jpeg" alt="" /></div>
		</header>
		<aside>
			<ul>
				<li>{{$store.state.shop.shopInfo.shopName}}</li>
				<li>评价4.7 月售1787单  蜂鸟转送33分钟</li>
				<li>￥8 无门槛 领取</li>
				<li>新用户下单</li>
				<li>公告今日动力紧张</li>
			</ul>	
		</aside>
    </div>
</template>

<script>
    export default {
        name: "shop",
        mounted(){
        	console.log(this.$route.query.shopId)
            this.$store.dispatch("getShopInfoById",this.$route.query.shopId)
        }
    }
</script>

<style scoped>
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
</style>
