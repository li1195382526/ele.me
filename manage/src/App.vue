<template>
  <div id="app">
  	欢迎“{{adminName}}”的到来
  	<hr/>
  	<input type="button" value="退出登录" @click="outLogin"/>
  	<hr/>
  	<router-link to="/" :class = "{active:$route.meta.parentType==1}">管理员管理</router-link>
  	<router-link to="/shopTypeManage" :class="{active:$route.meta.parentType==3}">店铺管理</router-link>
  	<router-link to="/goodsManage" :class="{active:$route.meta.parentType==5}">商品管理</router-link>
  	<router-link to="/advManage" :class="{active:$route.meta.parentType==4}">广告管理</router-link>
  	<router-link to="/userManage" :class="{active:$route.meta.parentType==2}">用户管理</router-link>
  	<!--<router-link to="/">商品管理</router-link>
  	<router-link to="/">店铺管理</router-link>-->
  	<nav v-show="$route.meta.parentType==1">
  		<router-link to="/" :class = "{active1:$route.meta.typeId==11}">查看日志</router-link>
  		<router-link :to="{path:'/upPassWord/'+adminId}" :class = "{active1:$route.meta.typeId==12}">修改密码</router-link>
  		<router-link to="/adminManage" :class = "{active1:$route.meta.typeId==13}">管理员列表</router-link>
  		<router-link to="/addAdmin" :class="{active1:$route.meta.typeId==14}">添加管理员</router-link>
  	</nav>
  	
  		<nav v-show="$route.meta.parentType==2">
  		<router-link to="/userManage" >用户管理</router-link>
  		<router-link to="/addUser" >添加用户</router-link>
  		<router-link to="/userLog" >用户记录</router-link>
  		</nav>
  		
  	<nav v-show="$route.meta.parentType==3">
          <router-link to="/shopTypeManage"  :class="{active:$route.meta.typeId==31}">店铺类别管理</router-link>
          <router-link to="/addShopType"  :class="{active:$route.meta.typeId==32}">添加店铺类别</router-link>
          <router-link to="/addShop"  :class="{active:$route.meta.typeId==33}">添加店铺</router-link>
         <router-link to="/shopManage"  :class="{active:$route.meta.typeId==34}">店铺管理</router-link>
    </nav>
    <nav v-show="$route.meta.parentType==4">
          <router-link to="/advManage"  :class="{active:$route.meta.typeId==42}">广告管理</router-link>
          <router-link to="/addAdv"  :class="{active:$route.meta.typeId==41}">添加广告</router-link>
         
    </nav>
    <nav v-show="$route.meta.parentType==5">
          <router-link to="/addGoodsType"  :class="{active:$route.meta.typeId==51}">添加商品类型</router-link>
          <router-link to="/GoodsTypeManage"  :class="{active:$route.meta.typeId==52}">商品类型管理</router-link>
          <router-link to="/addGoods"  :class="{active:$route.meta.typeId==53}">添加商品</router-link>
          <router-link to="/goodsManage"  :class="{active:$route.meta.typeId==54}">商品管理</router-link>



    </nav>
  	<hr>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
data(){
	return {
		adminName:localStorage.adminName,
		adminId:localStorage.adminId
	}
},
  methods:{
  	outLogin(){
  		 localStorage.removeItem("adminId");
  		 localStorage.removeItem("adminName");
       this.$emit("change","Login");
  	}
  },
   mounted(){
        this.$bus.$on("outLogin",()=>{
            this.outLogin();
        })
    }
}
</script>

<style>
	table{
        width:100%;
        border-collapse:collapse;
    }
    table td{
        border:1px solid green;
        text-align:center;
    }
    .active{
    	background:red;
    }
    .active1{
    	background:pink
    }
</style>
