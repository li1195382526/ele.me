<template>
    <div>
        <table>
            <tr>
                <td>广告名称</td>
                <td>广告图片</td>
                <td>排名</td>
                <td>添加时间</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in advList">
                <td>{{item.advName}}</td>
                <td>{{item.orderNum}}</td>
                <td><img :src="'http://127.0.0.1/'+item.advPic" alt="" width="100px"></td>
                <td>{{item.addTime | date}}</td>
       			<td>删除/修改</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "shop-type-mange",
        data(){
            return {
                advList:[]
            }
        },
        methods:{
            getAdv(){
                this.$http.get("http://127.0.0.1/getAdv")
                    .then(function({body}){
                        if(body.ok==1){
                            this.advList=body.advList
                        }else{
                            alert(body.msg);
                        }
                    })
            }
        },
        mounted(){
            this.getAdv();
        }
    }
</script>

<style scoped>

</style>
