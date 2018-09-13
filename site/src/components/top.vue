<template>
    <div>
       
	    <footer>
	        <ul>
	          <li><i class = "iconfont">&#xe502;</i> <span><router-link to="/">首页</router-link></span></li>
	          <li><i class = "iconfont">&#xe51f;</i><span><router-link to="/find">发现</router-link></span></li>
	          <li><i class = "iconfont">&#xe503;</i><span><router-link to="/order">订单</router-link></span></li>
	          <li><i class = "iconfont">&#xe501;</i><span><router-link to="/my">我的</router-link></span></li>
	        </ul>
	    </footer>
	    
    </div>
</template>

<script>
    export default {
        name: "top"
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
header,nav,section,footer{
  display:block;
}
	footer{
  width:100%;
  height:50px;
  display:flex;

}
footer ul{
  display:flex;
  width:100%;
  height:50px;
  justify-content:space-around;
  border-top:1px solid #dddddd;
  align-items:center;
}
footer ul li{
   display:flex;
  flex-direction:column;
  font-size:10px;
}
</style>
