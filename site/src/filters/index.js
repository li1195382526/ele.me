//export default [
//  {
//      filterName:"getUrl",
//      getUrl(imgUrl){
//          return "http://127.0.0.1/"+imgUrl
//      }
//  }
//]
const filter={
    date:function(v){
        var date=new Date(v);
        return date.getFullYear()+"-"
            +(date.getMonth()+1+"").padStart(2,"0")+"-"
            +(date.getDate()+"").padStart(2,"0")+" "
            +(date.getHours()+"").padStart(2,"0")+":"
            +(date.getMinutes()+"").padStart(2,"0")+":"
            +(date.getSeconds()+"").padStart(2,"0");
    },
     picUrl(v){
       return "http://127.0.0.1/"+v;
    }
}
export default filter;