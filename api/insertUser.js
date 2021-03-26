const insertUserMessage = require('../db/dBinsertUser'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const insertUser = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if (req.id && req.usernmae && req.img && req.place && req.source) {
            let choose = 0;
            let myDate = await insertUserMessage(choose, req.id)
            console.log(myDate.length)
                if (myDate.length > 0) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '用户已经存在'
                    }
                } else {
                    let choose = 1;
                    await insertUserMessage(choose, req.id, req.usernmae, req.img, req.place, req.source);
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
        console.error('insertUser服务器报错，请看log/error目录最新日志内容', err);
    }

}

module.exports = insertUser


