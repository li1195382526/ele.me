<template>
    <div class = "shop">
        <!--<div v-for="item in $store.state.shop.shopTypeList">
            <h3> <router-link :to="{path:'/shopListByType',query:{shopTypeId:item._id}}">{{item.shopTypeName}}</router-link></h3>
            <img :src="item.shopTypePic | getUrl" alt="">
        </div>-->
        
      <article>
        <div class = "div1" v-for="item in $store.state.shop.shopTypeList">
        	<img :src="item.shopTypePic | picUrl" alt="">
          <!--<img src="img/1.jpeg" alt="">-->
          <p><router-link :to="{path:'/shopListByType',query:{shopTypeId:item._id}}">{{item.shopTypeName}}</router-link></p>
        </div>
        <!--<div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>
        <div class = "div1">
          <img src="img/1.jpeg" alt="">
          <p>美食</p>
        </div>-->
    </article>
    </div>
</template>

<script>
    export default {
        name: "shop-type",
        mounted(){
            this.$store.dispatch("getShopType");
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
/*.headerList{
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
}*/
header,nav,section,footer{
  display:block;
}
	section .shop{
	display:flex;
  width:100%;
  height:150px;
  justify-content:space-around;
  flex-wrap:wrap;
}
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

section{
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
  width:50%;
  float:right;
}
section .mate .shop{
  width:100%;
  height:40px;
  justify-content:center;
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
</style>
