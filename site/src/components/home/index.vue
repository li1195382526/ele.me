<template>
    <div class = "header">
    <header>
        <div class = "top">
           <i class = "iconfont">&#xe605;</i>
           <p>BEIJING HETEL</p>
           <i class = "iconfont">&#xe601;</i>
        </div>
        <div class = "top1"><i class = "iconfont">&#xe60c;</i>搜索饿了么商家，商品</div>
    </header>
    <section>
    	<shopType></shopType>
    	<adv></adv>
    	<shopList></shopList>
    </section>
        <aside><div class = "shop">----商家推荐----</div></aside>
    <nav>
        <ul>
          <li>综合排序</li>
          <li>距离最近</li>
          <li>品质联盟</li>
          <li>筛选</li>
        </ul>
    </nav>
    </div>
</template>

<script>
    import shopType from "@/components/home/shopType"
    import adv from "@/components/home/advList"
    import shopList from "@/components/shop/shopList"
    export default {
        name: "index",
        components:{
            shopType,
            adv,
            shopList
        }
    }
</script>

<style scoped>
	/*@font-face {
  font-family: 'iconfont';
  src: url('font/iconfont.eot');
  src: url('font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('font/iconfont.woff') format('woff'),
  url('font/iconfont.ttf') format('truetype'),
  url('font/iconfont.svg') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}*/
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
/*.header{
	display:flex;
}*/
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
  background:#0097ff;
  width:100%;
  height:82px;
}
header .top{
  display:flex;
  background:#0097ff;
  height:44px;
  line-height:22px;
  color:#fff;
  justify-content:center;
  align-items:center;
}
header .top1{
  margin:0 auto;
  width:92%;
  height:30px;
  font-size:12px;
  background:#fff;
  color:#999999;
  justify-content:center;
  line-height:30px;
}
	/*import  "@/assets/style/ele.me.css"*/
	article{
  display:flex;
  width:100%;
  height:150px;
  justify-content:space-around;
  flex-wrap:wrap;
}
article .div1{
  width:20%;
  text-align:center;
}
article .div1 img{
  width:30px;
  height:30px;
}
article .div1 p{
  font-size:9px;
  text-align:center;
  color:#666666;
}
section .shop{
	display:flex;
}
section{
	height:340px;
  overflow:auto;
  display:flex;
  flex:1;
  justify-content:space-around;
  width:100%;
 /* height:118px;*/
  margin:0 auto;
  flex-wrap:wrap;
}
section .mate1{
  width:100%;
  display:flex;
  justify-content:space-around;
}
section .mate{
  width:153px;
  height:119px;
  background:#f5f5f5;
/*  flex-wrap:wrap;*/
}
section .mate h3{
  font-size:14px;
  color:#333333;
  line-height:22px;
}
section .mate p{
  font-size:10px;
  color:#777777;
}
section .mate img{
  width:67%;
  float:right;
}
section .mate .shop{
  width:100%;
  height:40px;
  justify-content:center;
}
section .shopList{
	display:flex;
}
section ul{
  /*display:flex;*/
  width:100%;
}
section ul li{
  display:flex;
  width:100%;
  justify-content:space-around;
  height:148px;
  align-items:center;
  border-top:1px solid #eeeeee;
  border-bottom:1px solid #eeeeee;
  line-height:19px;
}
section .box{
  width:55px;
  height:55px;
  float:left;
}
section .box img{
  width:100%;
  height:100%;
}

section .box1{
  float:left;
}
section .box1 p{
  font-size:8px;
}
section .box1 h3{
  font-size:12px;
}
section .box1 i{
  width:23px;
  height:14px;
  font-size:12px;
  background:#ffe920;
  color:#000;
}
nav{
  width:100%;
  height:43px;
  display:flex;
}
nav ul{
  display:flex;
  width:100%;
  height:43px;
  justify-content:space-around;
  align-items:center;
}
nav ul li{
  font-size:12px;
  color:#666666;
}
aside{
  display:flex;
  justify-content: center;
}
</style>