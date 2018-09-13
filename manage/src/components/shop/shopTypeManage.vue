<template>
    <div>
        <table>
            <tr>
                <td>类别名字</td>
                <td>类别图片</td>
                <td>排名</td>
                <td>添加时间</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in shopTypeList">
                <td>{{item.shopTypeName}}</td>
                <td>{{item.orderNum}}</td>
                <td><img :src="'http://127.0.0.1/'+item.shopTypePic" alt="" width="100px"></td>
                <td>{{item.addTime | date}}</td>
                <!--<td>修改</td>-->
       			<td><router-link :to="{path:'/upShopType/'+item._id}">修改</router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "shop-type-mange",
        data(){
            return {
                shopTypeList:[]
            }
        },
        methods:{
            getShopType(){
                this.$http.get("http://127.0.0.1/getShopType")
                    .then(function({body}){
                        if(body.ok==1){
                            this.shopTypeList=body.shopTypeList
                        }else{
                            alert(body.msg);
                        }
                    })
            }
        },
        mounted(){
            this.getShopType();
        }
    }
</script>

<style scoped>

</style>
