import axios from "axios"
export default {
    state:{
        shopTypeList:[],
        shopList:[],
        shopInfo:[],
    },
    actions:{
        getShopType({state}){
           
            axios.get("http://127.0.0.1/getShopType")
                .then(({data})=>{
                   
                    if(data.ok==1){
                        console.log(data);
                        state.shopTypeList=data.shopTypeList
                    }
                })
        },
        
        getShopListByType({state},shopTypeId){
            
            axios.get("http://127.0.0.1/getShopListByType",{
                params:{
                    shopTypeId
                }
            }).then(({data})=>{
                state.shopList=data.shopList
        })
        },
        
        getShopList({state}){
            axios.get("http://127.0.0.1/getShopList").then(({data})=>{
                state.shopList=data.shopList
            })
        },
        getShopInfoById({state},shopId){
        	console.log(shopId)
            axios.get("http://127.0.0.1/getShopInfoById",{
                params:{
                    shopId
                }
            }).then(({data})=>{
                state.shopInfo=data.shopInfo
            })
        }
    }
}
