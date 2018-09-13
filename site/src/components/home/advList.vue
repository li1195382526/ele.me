<template>
	<!--<div>广告</div>-->
	<div class = "mate1">
		
		  <div class = "mate" v-for="item in $store.state.adv.advList">
              <h3>{{item.advName}}</h3>
              <p>{{item.order}}</p>
              <p>立即抢购<i class = "iconfont">&#xe731;</i></p>
              <img :src="item.advPic | picUrl" alt="">
              <img src="img/01 (2).png" alt="">
          </div>
            <!--<div class = "mate">
              <h3>品质套餐</h3>
              <p>搭配齐全吃的好</p>
              <p>立即抢购<i class = "iconfont">&#xe731;</i></p>
              <img src="img/01 (2).png" alt="">
          </div>
          <div class = "mate">
              <h3>品质套餐</h3>
              <p>搭配齐全吃的好</p>
              <p>立即抢购<i class = "iconfont">&#xe731;</i></p>
              <img src="img/01 (2).png" alt="">
          </div>-->
    </div>
</template>

<script>
	  export default {
        name: "adv-list",
        mounted(){
            this.$store.dispatch("getAdv");
        }
    }
</script>

<style>
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
  width:40%;
  float:right;
}
section .mate .shop{
  width:100%;
  height:40px;
  justify-content:center;
}
</style>