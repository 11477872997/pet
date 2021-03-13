const findUserData = require('../db/cj'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const options = async (ctx,next)=>{
      let req = ctx.request.body;
    // console.log(ctx.request.files);
  // console.log(ctx.request.body);
  logsUtil.logResponse(ctx, req);	  //记录响应日志
       await findUserData()
       .then((result) => {
            //  console.log(result)
            ctx.body = {
              status: 200,
              msg: result
            }
      }).catch((err) => {
        ctx.body = {
          code: 500,
          msg: "服务器异常"
        }
        console.error('服务器报错，请看log/error目录最新日志内容', err);
        logsUtil.logError(ctx,err);	  //错误日志
      })
  }
  
  module.exports = options