const jwt=require("jwt-simple");
var sign="sfsdfsdgweeww"
module.exports.getToken=function(obj){
    obj.exp=Date.now()+5*1000;
    return jwt.encode(obj,sign);
}
module.exports.isToken=function(str){
    try{
        var obj=jwt.decode(str,sign);
        if(obj.exp<Date.now()){
            return 2;
        }else{
            return 1;
        }
    }
    catch(err) {
        return 3;
    }
}