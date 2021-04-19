/**
 * 小程序首页列表当前商家--查询
 */
 const  dbthisindexstore = require('../db/dbthisindexstore'); //引入查询sql 语句
 const logsUtil = require('../config/log');//自定义日志；
 const thisindexstore = async (ctx,next)=>{
     let req = ctx.request.body;
     try{
         if(req.id){
           let data = await dbthisindexstore(req.id);
           for(let i = 0 ; i<data.length;i++){
                data[i].Storemanage = JSON.parse( data[i].Storemanage);
           }
             ctx.response.status = 200;
             ctx.body = {
                 code: -1,
                 msg: "查询成功",
                 data
             }
         }else{
             ctx.response.status = 416;
             ctx.body = {
                 code: -1,
                 desc: '参数不齐全或参数不对'
             }
         }
        
     }catch(error){
         ctx.response.status = 500;
         ctx.body = {
             code: 0,
             msg: "服务器异常"
         }
         logsUtil.logError(ctx, error);	  //错误日志
         console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', error);
     }
 
 }
 
 module.exports = thisindexstore;