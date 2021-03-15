const insertStorteMessage = require('../db/dBinsertStorte'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const insertStorte = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if (req.id && req.usernmae && req.img && req.place && req.source,req.StoreImage && req.DetailedAddress && req.ShopName && req.phoneNumber) {
            let choose = 0;
            let myDate = await insertStorteMessage(choose, req.id)
            console.log(myDate.length)
                if (myDate.length > 0) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '用户已经存在'
                    }
                } else {
                    let choose = 1;
                    let phoneNumber = Number(req.phoneNumber);
                    console.log(typeof phoneNumber)
                    await insertStorteMessage(choose, req.id,req.usernmae,req.password,req.img,req.place,req.source,req.StoreImage,req.DetailedAddress,req.ShopName,req.ShopIntroduction,phoneNumber);
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '插入成功'
                    }
                }
                logsUtil.logResponse(ctx, req);	  //记录响应日志
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: -1,
                desc: '参数不齐全'
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


