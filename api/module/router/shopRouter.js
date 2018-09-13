const md5=require("md5");
const db=require("../db");
const help=require("../help");
const fs=require("fs")
const mongodb =require("mongodb");
const {upPic}=require("../upPic")
//添加店铺类型
module.exports.addShopType=function(req,res){
	upPic(req,"shopTypePic",function(obj){
		if(obj.type==3){
            db.insertOne("shopTypeList",{
                shopTypeName:obj.params.shopTypeName,
                shopTypePic:obj.newPicName,
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
module.exports.getShopType=function(req,res){
    db.find("shopTypeList",{},function(err,shopTypeList){
//  	console.log(shopTypeList)
        if(err)
            help.sendStatus(res);
        else{
            res.json({
                ok:1,
                shopTypeList
            })
        }
    })
}
//添加商品
module.exports.addShop=function(req,res){
	upPic(req,"shopPic",function(obj){
		if(obj.type==3){
			db.findOneById("shopTypeList",obj.params.shopTypeId,function(err,shopType){
//				console.log(shopType)
				db.insertOne("shopList",{
					shopName:obj.params.shopName,
					shopPic:obj.newPicName,
					shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
					shopTypeName:shopType.shopTypeName,
					addTime:new Date().getTime(),
					upTime:new Date().getTime()
				},function(err,results){
					if(err){
						res.json({
							ok:1,
							msg:"添加失败"
						})
					}else{
						res.json({
						ok:1,
						msg:"添加成功"
					})
					}
					
				})
			})
		}
	})
}
//获取店铺信息
module.exports.getShopList=function(req,res){
	db.find("shopList",{
		 sort:{
            addTime:-1
        }

	},function(err,shopList){
		if(err){
			res.json({
				ok:-1,
				msg:"网络失败"
			})
		}else{
			res.json({
			ok:1,
			shopList
		})
		}
		
	})
}
//修改
module.exports.upShopType=function(req,res){
	upPic(req,"shopTypePic",function(obj){
		console.log(obj.params.id)
		db.upDateById("shopTypeList",obj.params.id,{$set:{
			shopTypeName:obj.params.shopTypeName,
			shopTypePic:obj.params.shopTypePic,
			orderNum:obj.params.orderNum
		}},function(err,results){
			res.json({
				ok:1,
				msg:"成功"
			})
		})
	})
}
module.exports.getShopTypeId=function(req,res){
	  db.findOneById("shopTypeList",req.body.id,function(err,shopTypeList){
//	  	console.log(shopTypeList)
        if(err){
            help.sendStatus(res,-1)
        }else{
            res.json({
                ok:1,
                shopTypeList
            })
        }
    })
}
//删除
module.exports.deleteShopManage=function(req,res){
//	db.deleteById("shopList",req.body.id,function(err,results){
//		res.json({
//			ok:1,
//			msg:"删除成功"
//		})
//	})
	var id=req.body.id;
    db.findOneById("shopList",id,function(err,shopInfo){
        fs.unlink("./upload/"+shopInfo.shopPic,function(err){
            if(err){
                res.json({
                    ok:-1,
                    msg:"删除图片失败"
                })
            }else{
                db.deleteById("shopList",id,function(err){
                    res.json({
                        ok:1,
                        msg:"删除成功"
                    })
                })
            }
        })
    })
}
 module.exports.getShopInfoById=function(req,res){
    db.findOneById("shopList",req.query.shopId,function(err,shopInfo){
        res.json({
            ok:1,
            shopInfo
        })
    })
}   
module.exports.getShopListByType=function(req,res){
    // console.log(req.query.shopTypeId);

    db.find("shopList",{
        whereObj:{
            shopTypeId:mongodb.ObjectId(req.query.shopTypeId)
        }
    },function(err,shopList){
        res.json({
            ok:1,
            shopList
        })
    })
}