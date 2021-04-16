/**
 * 小程序-公共-获取经纬度接口--插入
 */
const dblongitude = require('../db/dblongitude'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const longitude = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if (req.id && req.typename && req.userlongitude && req.userlaitude) {
           await dblongitude(req.id, req.typename, req.userlongitude, req.userlaitude);
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '插入成功',
                data: myDate
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

module.exports = longitude


