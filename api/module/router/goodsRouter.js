const md5=require("md5");
const db=require("../db");
const help=require("../help");
const fs=require("fs")
const mongodb =require("mongodb");
const {upPic}=require("../upPic");
module.exports.addGoodsType=function(req,res){
//	console.log(req.body.shopId)
	db.findOneById("shopList",req.body.shopId,function(err,shopType){
		db.insertOne("goodsTypeList",{
		shopId:shopType._id,
		shopTypeId:shopType.shopTypeId,
		goodsTypeName:req.body.goodsTypeName,
		shopTypeName:shopType.shopTypeName
	},function(err,results){
		res.json({
			ok:1,
			msg:"添加成功"
		})
	})
	})
	
}
module.exports.getGoodsType=function(req,res){
	db.find("goodsTypeList",{},function(err,goodsTypeList){
		res.json({
			ok:1,
			goodsTypeList
		})
	})
}
// 根据店铺的ID来查找商品的类别
module.exports.getGoodsTypeByShopId=function(req,res){
    db.find("goodsTypeList",{
        whereObj:{
            shopId:mongodb.ObjectId(req.query.shopId)
        }
    },function(err,goodsTypeList){
        res.json({
            ok:1,
            goodsTypeList
        })
    })
}
//添加商品
module.exports.addGoods=function(req,res){
	upPic(req,"goodsPic",function(obj){
		if(obj.type==3){
//			console.log(req.body.shopId)
//			db.findOneById("shopList",obj.params.shopId,function(err,shopInfo){
				db.findOneById("goodsTypeList",obj.params.goodsTypeId,function(err,goodsType){
					db.insertOne("goodsList",{
						goodsPic:obj.newPicName,
						goodsName:obj.params.goodsName,
						goodsPrice:obj.params.goodsPrice/1,
						goodsNum:obj.params.goodsNum/1,
						shopName:goodsType.shopName,
						shopId:goodsType.shopId,
						goodTypeId:goodsType._id,
						goodsType:goodsType.goodsTypeName,
						addTime:new Date().getTime()
					},function(err,results){
						res.json({
							ok:1,
							msg:"添加成功"
						})
					})
				})
//			})
			
		}else{
			res.json({
				ok:-1,
				msg:"失败"
			})
		}
	
	})
}
//获取商品
module.exports.getGoods=function(req,res){
	db.find("goodsList",{},function(err,goodsList){
		res.json({
			ok:1,
			goodsList
		})
	})
}
//删除商品
module.exports.deleteGoods=function(req,res){
//	db.deleteById("goodsList",req.body.id,function(err,results){
//		res.json({
//			ok:1,
//			msg:"删除成功"
//		})
//	})
var id=req.body.id;
    db.findOneById("goodsList",id,function(err,goodsInfo){
        fs.unlink("./upload/"+goodsInfo.goodsPic,function(err){
            if(err){
                res.json({
                    ok:-1,
                    msg:"删除图片失败"
                })
            }else{
                db.deleteById("goodsList",id,function(err){
                    res.json({
                        ok:1,
                        msg:"删除成功"
                    })
                })
            }
        })
    })
}
//查商品
module.exports.getGoodsListByShopId=function(req,res){
    console.log(req.query.shopId);
    db.find("goodsList",{
        whereObj:{
            shopId:mongodb.ObjectId(req.query.shopId)
        }
    },function(err,goodsList){
        res.json({
            ok:1,
            goodsList
        })
    })
}