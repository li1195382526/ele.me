const express=require("express");
const bodyParser=require("body-parser");
const adminRouter=require("./module/router/adminRouter");
const shopRouter=require("./module/router/shopRouter");
const advRouter=require("./module/router/advRouter");
const goodsRouter=require("./module/router/goodsRouter");
const jwt=require("./module/jwt");
var app=express();
app.use(express.static("./upload"))
app.use(bodyParser.json());
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","PUT,GET,OPTIONS,POST,DELETE");
    res.header("Access-Control-Allow-Headers","content-type,authorization");
	next();
})
app.get("/sendToken",function(req,res){
    // jwt.isToken(req.headers)
    var errorEnum={
        "1":"正确 ",
        "2":"过期",
        "3":"报错"
    }
    console.log(req.headers.authorization);
    var ok=jwt.isToken(req.headers.authorization);
    res.json({
        ok,
        msg:errorEnum[ok]
    })
})
//登录注册
app.post("/login",adminRouter.login)
app.post("/reg",adminRouter.reg)
//管理员
app.post("/getAdminLoginLog",adminRouter.getAdminLoginLog)
app.post("/deleteAdmin",adminRouter.deleteAdmin)
app.post("/upPassWord",adminRouter.upPassWord)
app.get("/getAdminList",adminRouter.getAdminList)
app.post("/deleteAdminManage",adminRouter.deleteAdminManage)
app.post("/addAdmin",adminRouter.addAdmin)
//店铺
app.get("/getShopListByType",shopRouter.getShopListByType);
app.post("/addShopType",shopRouter.addShopType)
app.get("/getShopType",shopRouter.getShopType);
app.post("/deleteShopManage",shopRouter.deleteShopManage)
//广告
app.post("/addAdv",advRouter.addAdv)
app.get("/getAdv",advRouter.getAdv)
app.post("/addShop",shopRouter.addShop)
app.get("/getShopList",shopRouter.getShopList)
//商品
app.get("/getGoodsListByShopId",goodsRouter.getGoodsListByShopId)
app.post("/addGoodsType",goodsRouter.addGoodsType)
app.get("/getGoodsType",goodsRouter.getGoodsType)
app.get("/getGoodsTypeByShopId",goodsRouter.getGoodsTypeByShopId)
app.post("/addGoods",goodsRouter.addGoods)
app.get("/getGoods",goodsRouter.getGoods)
app.post("/deleteGoods",goodsRouter.deleteGoods)
app.get("/getShopInfoById",shopRouter.getShopInfoById)
//修改
app.post("/getShopTypeId",shopRouter.getShopTypeId)
app.post("/upShopType",shopRouter.upShopType)
app.listen(80,function(){
	console.log("开启服务成功")
})
