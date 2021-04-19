/**
 *小程序-授权-商家注册接口
 */
const fs = require('fs');
const path = require('path');
const insertStorteMessage = require('../db/dBinsertStorte'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const md5 = require('../config/md5')  //md加密
const insertStorte = async (ctx, next) => {
    let req = ctx.request.body;
    const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
    try {
        if (req.id && req.usernmae && req.img && req.place && req.password && req.source && req.StoreImage && req.DetailedAddress && req.ShopName && req.phoneNumber && req.StoreTime && req.Storemanage && req.UserType) {
            let choose = 0;
            let myDate = await insertStorteMessage(choose, req.id)
                if (myDate.length > 0) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '用户已经存在',
                    }
                } else {
                    let choose = 1;
                    let password = md5.MD5(req.password); //密码 
                    let ShopIntroduction = req.ShopIntroduction;
                    if(ShopIntroduction == undefined){
                        ShopIntroduction = ''
                    }
                    // // 创建可读
                      const reader = fs.createReadStream(file.path);
                    // 修改文件的名称
                    let newDate = new Date();
                    let newFilename = newDate.getTime() + '.' + file.name.split('.')[1];
                    let user = req.usernmae //根据不同用户创建不同文件夹
                    let uploadPath = path.join(__dirname, '../public/store') + `/${user}` + `/${req.StoreImage}`;
                    let StoreImage  = `/public/store`+ `/${user}` + `/${req.StoreImage}`+`/${newFilename}`
                    // console.log(uploadPath)
                     fs.mkdir(uploadPath, {
                                        recursive: true
                                    }, (err) => {
                                        if (err) {
                                            // throw err;
                                            console.log(err)
                                        } else {
                                            //创建可写流
                                            const upStream = fs.createWriteStream(uploadPath + `/${newFilename}`);
                                            // 可读流通过管道写入可写流
                                            reader.pipe(upStream);
                                        }
                            });
                    await insertStorteMessage(choose, req.id,req.usernmae,password,req.img,req.place,req.source,StoreImage,req.DetailedAddress,req.ShopName,ShopIntroduction,req.phoneNumber,req.StoreTime,req.Storemanage,req.UserType);
                    let num = 0;
                    let  data = await insertStorteMessage(num, req.id)
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '插入成功', 
                        data
                    }
                }
                logsUtil.logResponse(ctx, req);	  //记录响应日志
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: -1,
                desc: '参数不齐全或参数不对'
            }
        }
    } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
            code: 0,
            msg: "服务器异常"
        }
        logsUtil.logError(ctx, err);	  //错误日志
        console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', err);
    }

}

module.exports = insertStorte


