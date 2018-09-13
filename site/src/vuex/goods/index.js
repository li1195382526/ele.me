import axios from "axios"
export default {
    state:{
        goodsList:[]
    },
    actions:{
        getGoodsListByShopId({state},shopId){
            console.log(shopId);
            
            axios.get("http://127.0.0.1/getGoodsListByShopId",{
                params:{
                    shopId
                }
            }).then(({data})=>{
                console.log(data);
                state.goodsList=data.goodsList
            })
        }

    }
}
