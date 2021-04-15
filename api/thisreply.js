/**
 * 宠物圈查询回复
 */
 const {dbthisreply,dbthisreplylinst} = require('../db/dbthisreply'); //引入查询sql 语句
 const logsUtil = require('../config/log');//自定义日志；
 const getTIme = require('../config/getTime')//自定义处理时间
 const thisreply = async (ctx,next)=>{
     let req = ctx.request.body;
     try{
         if(req.discussid ){
            console.log(req.replyId)
            let data = ''
            if(req.replyId != undefined){
              data =   await dbthisreply(req.discussid,req.replyId);
            }else{
                data =   await dbthisreplylinst(req.discussid);
            }
           
           // let time = data[0].DuaminTime;
           //   let newtime = getTIme(time);
           //   data[0].DuaminTime = newtime;
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
 
 module.exports = thisreply;