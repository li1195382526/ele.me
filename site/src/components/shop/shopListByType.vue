<template>
    <div class = "shopListByType">
        
        <header>
				<ul class = "list1">
					<li class = "iconfont">&#xe624;</li>
					<li>美食</li>
					<li></li>
				</ul>
				<ul class="list2">
					<li>全部</li>
					<li>简餐便当</li>
					<li>小吃炸串</li>
					<li>面食粥店</li>
					<li>小吃炸串</li>
					<li>面食粥店</li>
					<li>面食粥店</li>
					<li>小吃炸串</li>
					<li>面食粥店</li>
					<li>地址</li>
				</ul>
			
		</header>
		<section>
			<div>
				<ul class = "shopList1">
					<li>省心套餐</li>
					<li>更多></li>
				</ul>
			</div>
				
			<div>
				<ul class = "shopList2">
				<li>
					<img src="" alt="" />
					<h4>至尊椒香肉排</h4>
					<p>165人好评</p>
					<p>￥29.9 <span>满17减7</span></p>
				</li>
				<li>
					<img src="" alt="" />
					<h4>至尊椒香肉排</h4>
					<p>165人好评</p>
					<p>￥29.9 <span>满17减7</span></p>
				</li>
				<li>
					<img src="" alt="" />
					<h4>至尊椒香肉排</h4>
					<p>165人好评</p>
					<p>￥29.9 <span>满17减7</span></p>
				</li>
			</ul>
			</div>
			<shopList></shopList>
		</section>
        
    </div>
</template>

<script>
    import shopList from "@/components/shop/shopList"
    export default {
        name: "shop-list-by-type",
        components:{
            shopList
        },
      
        mounted(){
        	
            this.$store.dispatch("getShopListByType",this.$route.query.shopTypeId);
        }
    }
</script>

<style scoped>
.shopListByType{
	display:block;
	display:flex;
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	width:100%;
	height:100%;
}
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
header,nav,section,footer{
  display:block;
}
header{
	width:100%;
	height:72px;
	background:#00a5ff;
	display:flex;
	flex-direction:column;
}
header ul{
	display:flex;
}
header .list1{
		height:40px;
		align-items:center;
		justify-content:space-between;
}
header .list1 li{
	color:#fff;
}
header .list2{
	display:flex;
	width:100%;
	overflow-x:auto;
	white-space:nowrap;
	height:24px;
	justify-content:space-around;
	font-size:12px;
	color:#fff;
	
}
header .list2 li{
	margin-right:17px;
}
section{
	display:flex;
	overflow:auto;
	width:100%;
	height:521px;
	flex-direction:column;
}
section .shopList1{
	justify-content: center;
	width:92%;
	display:flex;
	height:38px;
	justify-content:space-between;
	align-items:center;
}
section  .shopList1 li{
	display:flex;
}
section .shopList1 li:nth-child(1){
	font-size:12px;
	color:#000;
}
section .shopList1 li:nth-child(2){
	font-size:10px;
	color:#666;
}
section .shopList2{
	display:flex;
	width:100%;
	height:161px;
	justify-content:space-around;
}
section .shopList2 li{
	width:93px;
	height:162px;
	border:1px solid red;
}
section .shopList2 li img{
	display:block;
	width:100%;
	height:93px;
}
section .shopList2 li h4{
	font-size:12px;
}
section .shopList2 li p{
	font-size:12px;
}
section .shopList2 li span{
	width:44px;
	height:19px;
/*	display:block;*/
	border:1px solid #e8470b;
	color:#e8470b;
	font-size:8px;
}



section .shopList3{
  /*display:flex;*/
  width:100%;
}
section .shopList3 li{
  display:flex;
  width:100%;
  justify-content:space-around;
  height:148px;
  align-items:center;
  border-top:1px solid #eeeeee;
  border-bottom:1px solid #eeeeee;
  line-height:19px;
}
.box{
  width:55px;
  height:55px;
  float:left;
}
.box img{
  width:100%;
  height:100%;
}

.box1{
  float:left;
}
.box1 p{
  font-size:8px;
}
.box1 h3{
  font-size:12px;
}
.box1 i{
  width:23px;
  height:14px;
  font-size:12px;
  background:#ffe920;
  color:#000;
}
</style>
