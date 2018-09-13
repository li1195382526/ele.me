<template>
    <div>
    	 {{token}}
        <input type="button" value="验证" @click="sendToken">
        	<hr>
    	搜索：<input type="text" v-model="keyWord" @input="search"/>
    	<hr>
        <table>
            <tr>
                <td>管理ID</td>
                <td>管理员账号</td>
                <td>管理最后登陆时间</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in adminLoginLog">
                <td>{{item._id}}</td>
                <td>{{item.adminName}}</td>
                <td>{{item.loginTime | date}}</td>
                <td @click="deleteAdmin(item._id)">删除</td>
            </tr>
        </table>
        <div>
        	<a @click="pageBtn(pageIndex-1)">上一页</a>
        	{{pageIndex}}/{{pageSum}}
        	<a @click="pageBtn(pageIndex/1+1)">下一页</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin-login-log",
        data(){
            return {
                adminLoginLog:[],
                pageIndex:1,
                pageSum:1,
                keyWord:"",
                token:localStorage.token
            }
        },
        methods:{
        	 pageBtn(pageNum){
            	this.pageIndex=pageNum;
            	this.getAdminLoginLog()
            },
            getAdminLoginLog(){
//          	alert(this.pageIndex)
                this.$http.post("http://127.0.0.1/getAdminLoginLog",{
                	pageIndex:this.pageIndex,
                	keyWord:this.keyWord
                }).then(function(results){
                        if(results.body.ok==1){
                            this.adminLoginLog=results.body.adminLoginLog;
                            this.pageIndex=results.body.pageIndex;
                            this.pageSum=results.body.pageSum;
                        }else{
                            alert(results.body.msg);
                        }
                    })
            },
           search(){
           	this.getAdminLoginLog()
           },
            deleteAdmin(id){
            	this.$http.post("http://127.0.0.1/deleteAdmin",{
            		id
            	}).then(function(results){
            		if(results.body.ok==1){
            			alert(results.data.msg)
            			this.getAdminLoginLog()
            		}
            		
            	})
            },
            sendToken(){
                this.$ajax.get("http://127.0.0.1/sendToken",{
                  	    headers:{
                           "content-type":"application/json",
                           "authorization":localStorage.token
                       }
                }).then((data)=>{
                    if(data.ok==1){
                    alert(data.msg);
                }else{
                    this.$bus.$emit("outLogin");
                }
            })
        
            }  
        },
          
        mounted(){
            this.getAdminLoginLog()
        }
    }
</script>

<style scoped>

</style>
