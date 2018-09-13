import axios from "axios"
export default {
    state:{
        advList:[]  
    },
    actions:{
       getAdv({state}){
            axios.get("http://127.0.0.1/getAdv").then(({data})=>{
                state.advList=data.advList
            })
        }
    }
}
