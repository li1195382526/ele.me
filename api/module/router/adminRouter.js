const md5=require("md5");
const db=require("../db");
const help=require("../help");
const mongodb =require("mongodb");
const jwt=require("../jwt");
module.exports.login=function(req,res){
    db.find("adminList",{
        whereObj:{
            adminName:req.body.adminName,
            passWord:md5(req.body.passWord+"ele@.com")
        }
    },function(err,adminInfo){
        if(adminInfo.length>0){
            var admin=adminInfo[0];
            //登陆成功
            db.insertOne("adminLoginLog",{
                adminId:admin._id,
                adminName:admin.adminName,
                loginTime:new Date().getTime(),
                logType:1
            },function(err,results){
                if(err){
                    help.errorJson(res);
                }else{
                    res.json({
                        ok:1,
                        adminName:admin.adminName,
                        adminId:admin._id,
                        token:jwt.getToken({
                        	adminName:admin.adminName,
                        	adminId:admin._id
                        })
                    })
                }
            })
        }else{//账号或密码错误
            help.errorJson(res,-1,"账号或密码错误!");
        }
    })
}
//注册信息
module.exports.reg=function(req,res){
//	console.log(req.body.passWord)
 if(req.body.passWord==req.body.passWord1){
        db.count("adminList",{
            adminName:req.body.adminName
        },function(count){
            if(count>0){
                res.json({
                    ok:-1,
                    msg:"您的用户名已存在！请重新输入"
                })
            }else{
                db.insertOne("adminList",{
                    adminName:req.body.adminName,
                    passWord:md5(req.body.passWord+"ele@.com"),
                    regTime:new Date().getTime()
                },function(err,results){
                    if(err){
                        res.json({
                            ok:-1,
                            msg:"网络连接错误"
                        })
                    }else{
                        res.json({
                            ok:1,
                            msg:"注册成功"
                        })
                    }
                })
            }
        })
    }else{
        res.json({
            ok:-1,
            msg:"二次输入的密码不一致，请重新输入"
        })
    }
}
//管理员登录日志
module.exports.getAdminLoginLog=function(req,res){
	var pageIndex=req.body.pageIndex;
	var keyWord=req.body.keyWord;
//	console.log(keyWord)
	var whereObj={};
	if(keyWord>0){
		whereObj.adminName=new RegExp(keyWord)
	}
//	console.log(pageIndex)
	var pageSum=1;
	var pageNum=5;
	db.count("adminLoginLog",whereObj,function(count){
		pageSum=Math.ceil(count/pageNum);
		console.log(count)
        if(pageSum<1)
            pageSum=1;
        if(pageIndex>pageSum)
            pageIndex=pageSum;
        if(pageIndex<1)
            pageIndex=1;   
        db.find("adminLoginLog",{
        sort:{
            loginTime:-1
        },
        whereObj,
        limit:pageNum,
        skip:(pageIndex-1)*pageNum,
    },function(err,adminLoginLog){
        if(err){
        	help.errorJson(res);
        }   
        else{
        	res.json({
                ok:1,
                adminLoginLog,
                pageIndex,
                pageSum,
                
            })
        }
            
    })
	})
    
}
//删除
module.exports.deleteAdmin=function(req,res){
	var id=req.body.id;
//	console.log(id)
	db.deleteById("adminLoginLog",id,function(err){
		res.json({
			ok:1,
			msg:"删除成功"
		})
	})
 
}
//修改密码
module.exports.upPassWord=function(req,res){
	var id=req.body.id;
	console.log(id)
	if(req.body.pass==req.body.pass1){
		//		var where={};
//		where._id=mongodb.ObjectId(id);
//		if(req.body.oldPass){
//			where.passWord=md5(req.body.oldPass+"ele@.com")
//		}
		db.count("adminList",{_id:mongodb.ObjectId(id)},function(count){
			if(count>0){
				console.log(count)
				db.upDateById("adminList",id,{$set:{passWord:md5(req.body.pass+"ele@.com")}},function(err,results){
					if(err){
						res.json({
							ok:-1,
							msg:"修改失败"
						})
					}else{
						res.json({
							ok:1,
							msg:"修改成功"
						})
					}
				})
			}
		})
	}else{
		res.json({
			ok:-1,
			msg:"两次密码不一致"
		})
	}
}
//管理员列表
module.exports.getAdminList=function(req,res){
	db.find("adminList",{},function(err,adminList){
		 if(err){
		 	help.errorJson(res);
		 }else{
		 	res.json({
			ok:1,
			adminList
		})
		 }	
	})
}
//删除管理员
module.exports.deleteAdminManage=function(req,res){
	var id = req.body.id
	db.deleteById("adminList",id,function(err,results){
		if(err){
			res.json({
			ok:-1,
			msg:"删除失败"
		})
		}else{
			res.json({
			ok:1,
			msg:"删除成功"
		})
		}
		
	})
}
//添加管理员
module.exports.addAdmin=function(req,res){
	 db.count("adminList",{
            adminName:req.body.adminName
        },function(count){
            if(count>0){
                res.json({
                    ok:-1,
                    msg:"该用户已经是管理员，请重新添加"
                })
            }else{
                db.insertOne("adminList",{
                    adminName:req.body.adminName,
                    passWord:md5(req.body.passWord+"ele@.com"),
                    regTime:new Date().getTime()
                },function(err,results){
                    if(err){
                        res.json({
                            ok:-1,
                            msg:"网络连接错误"
                        })
                    }else{
                        res.json({
                            ok:1,
                            msg:"添加成功"
                        })
                    }
                })
            }
        })
}
