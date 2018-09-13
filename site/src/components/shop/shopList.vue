<template>
    <div class = "shopList4">
    	<ul class = "shopList3">
          <li  v-for="item in $store.state.shop.shopList">
            <div class = "box">
            	<img :src="item.shopPic | picUrl" alt="">
            </div>
            <div class = "box1">
                <h3><i>品牌</i><router-link :to="{path:'/shopInfo',query:{shopId:item._id}}">{{item.shopName}}</router-link></h3>
                <p>4.7月4372单</p>
                <p>￥20元起送 夜间配送费15</p>
                <p>口碑人气好店</p>
                <p>新用户下载立减17元</p>
                <p>满十减五</p>
            </div>
          </li>
          <!--<li>
            <div class = "box"><img src="img/01 (2).jpeg" alt=""></div>
            <div class = "box1">
                <h3><i>品牌</i>田老师红烧肉</h3>
                <p>4.7月4372单</p>
                <p>￥20元起送 夜间配送费15</p>
                <p>口碑人气好店</p>
                <p>新用户下载立减17元</p>
                <p>满十减五</p>
            </div>
          </li>
          <li>
            <div class = "box"><img src="img/01 (2).jpeg" alt=""></div>
            <div class = "box1">
                <h3><i>品牌</i>田老师红烧肉</h3>
                <p>4.7月4372单</p>
                <p>￥20元起送 夜间配送费15</p>
                <p>口碑人气好店</p>
                <p>新用户下载立减17元</p>
                <p>满十减五</p>
            </div>
          </li>
          <li>
            <div class = "box"><img src="img/01 (2).jpeg" alt=""></div>
            <div class = "box1">
                <h3><i>品牌</i>田老师红烧肉</h3>
                <p>4.7月4372单</p>
                <p>￥20元起送 夜间配送费15</p>
                <p>口碑人气好店</p>
                <p>新用户下载立减17元</p>
                <p>满十减五</p>
            </div>
          </li>-->
        </ul>
        
       
    </div>

</template>

<script>
    export default {
        name: "shop-list",
          mounted(){
        	console.log(this.$route.query.shopId)
            this.$store.dispatch("getShopList")
        }
    }
</script>

<style scoped>
/*@font-face {
  font-family: 'iconfont';
  src: url('@/assets/font/iconfont.eot');
  src: url('@/assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('@/assets/font/iconfont.woff') format('woff'),
  url('@/assets/font/iconfont.ttf') format('truetype'),
  url('@/assets/font/iconfont.svg') format('svg');
}
@font-face {
  font-family: 'iconfont';
  src: url('@/assets/font1/iconfont.eot');
  src: url('@/assets/font1/iconfont.eot?#iefix') format('embedded-opentype'),
  url('@/assets/font1/iconfont.woff') format('woff'),
  url('@/assets/font1/iconfont.ttf') format('truetype'),
  url('@/assets/font1/iconfont.svg') format('svg');
}*/
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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
html{
/*font-size:100px;*/	
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
  width:320px;
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
