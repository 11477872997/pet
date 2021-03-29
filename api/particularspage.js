/**
 * 宠物圈点击当前详情评论与评论接口
 */
const findUserData = require('../db/cj'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const particularspage = async (ctx,next)=>{
    let req = ctx.request.body;
    try{
       
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

module.exports = particularspage;