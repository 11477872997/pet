/**
 * 判断商家接口
 */
 const insertStorteMessage = require('../db/dBinsertStorte'); //引入查询sql 语句
 const logsUtil = require('../config/log');//自定义日志；
 const ifStorte = async (ctx, next) => {
     let req = ctx.request.body;
     try {
         if (req.id) {
             let choose = 0;
             let myDate = await insertStorteMessage(choose, req.id)
                 if (myDate.length > 0) {
                     ctx.response.status = 200;
                     ctx.body = {
                         code: -1,
                         desc: '用户已经存在',
                     }
                 }else{
                  ctx.response.status = 200;
                  ctx.body = {
                      code: -1,
                      desc: '用户未注册',
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
 
 module.exports = ifStorte
 
 
 