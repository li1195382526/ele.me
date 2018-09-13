const fs=require("fs");
const formidable=require("formidable");
/*上传图片的方法
* cb({
* type:-4,未上传图片,-3:上传图片格式不正确！，请上传.png,.gif,.jpg,.jpeg,3:成功
* })*/
module.exports.upPic=function(req,picName,cb){
    var form=new formidable.IncomingForm();
//  console.log(form)
    form.encoding="utf-8";
    form.uploadDir="./upload";
    form.keepExtensions=true;
    form.parse(req,function(err,params,file){
//  	console.log(file)
        if(file[picName].size>0){//上传了图片
            var path=file[picName].path;
            var extens=path.substr(path.lastIndexOf("."));//上传文件的扩展名
            var picExtensions=[".png",".gif",".jpg",".jpeg"];
            if(picExtensions.includes(extens)){
                var newPicName=new Date().getTime()+extens;
                
                fs.rename(path,"./upload/"+newPicName,function(err){
                    cb({
                        type:3,//上传成功，
                        params,
                        newPicName,
                        msg:"上传成功"
                    })
                })
            }else{
                fs.unlink(file[picName].path,function(err) {
                    cb({
                        type:-3,//格式不正确，
                        params,
                        msg:"上传图片格式不正确！，请上传.png,.gif,.jpg,.jpeg"
                    })
                })

            }
        }else{
            fs.unlink(file[picName].path,function(err){
                cb({
                    type:-4,//未上传图片，
                    params,
                    msg:"未上传图片"
                })
            })

        }
    })
}