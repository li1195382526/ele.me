<template>
	<div class = "my">
		
		<header>
            <img src="@/assets/img/l1.gif" alt="">
            <p>信息登录</p>
        </header>
        <section>
            <input type="text" value="手机号  ">
            <input type="text" value="验证码  ">
            <p>温馨提示：未注册饿了么账号的手机，登录时会将自动注册，且代表您已经同意
            <span>《用户服务协议》</span></p>
            <div class = "log" @click="login">
              	  登录
            </div>
        </section>
        <footer>
            <p>关于我们</p>
        </footer>
	
		
	</div>
</template>

<script>
	  export default {
        name: "index",
        methods:{
            login(){
                localStorage.userId="admin";
                this.$router.push(this.$route.query.url);
            }
        }
    }
</script>

<style>
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
.my{
	display:flex;
flex-direction:column;
width:100%;
height:100%;
}
header{
  width:100%;
  height:178px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
header img{
  width:136px;
  height:56px;
}
header p{
  margin-top:46px;
  color:#2395ff;
  font-size:12px;
  border-bottom:1px solid ##2395ff;
}
section{
  width:100%;
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
}
section input{
  width:299px;
  height:46px;
  margin-top:16px;
}
section p{
  width:90%;
  font-size:12px;
  color:#989999;
  margin-top:15px;
}
section .log{
  width:90%;
  height:42px;
  background:#4cd96f;
  font-size:16px;
  text-align:center;
  color:#fff;
  line-height:42px;
  margin-top:32px;
}
section span{
  color:#2395ff;
}
footer{
  display:flex;
  justify-content: center;
  width:100%;
  font-size:12px;
  line-height:50px;
  color:#999999;
}
</style>