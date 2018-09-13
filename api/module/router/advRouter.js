const md5=require("md5");
const db=require("../db");
const help=require("../help");
const mongodb =require("mongodb");
const {upPic}=require("../upPic")
//添加店铺类型
module.exports.addAdv=function(req,res){
	upPic(req,"advPic",function(obj){
		if(obj.type==3){
            db.insertOne("advList",{
                advName:obj.params.advName,
                advPic:obj.newPicName,
                addTime:new Date().getTime(),
                orderNum:obj.params.orderNum
            },function(err,results){
                if(err){
                	res.json({
                		ok:-1,
                		msg:"添加失败"
                	})
                }else{
                	res.json({
                		ok:1,
                		msg:"添加成功"
                	})
                }
              
            })
        }else{
            help.sendStatus(res,obj.type);
        }
	})
}
//获取店铺类型
module.exports.getAdv=function(req,res){
    db.find("advList",{},function(err,advList){
        if(err)
            help.sendStatus(res);
        else{
            res.json({
                ok:1,
                advList
            })
        }
    })
}