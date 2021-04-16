/**
 * 小程序 判断是否有该商家名--查询
 */
 const dbifusername = require('../db/dbifusername'); //引入查询sql 语句
 const logsUtil = require('../config/log');//自定义日志；
 const ifusername = async (ctx, next) => {
     let req = ctx.request.body;
     try {
         if (req.usernmae) {
             let myDate = await dbifusername(req.usernmae)
                 if (myDate.length > 0) {
                     ctx.response.status = 200;
                     ctx.body = {
                         code: -1,
                         desc: '用户名已经存在',
                         data:myDate
                     }
                 }else{
                  ctx.response.status = 200;
                  ctx.body = {
                      code: -1,
                      desc: '用户名未注册',
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
 
 module.exports = ifusername
 
 
 