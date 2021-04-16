/**
 * 小程序-宠物圈-当前评论--插入
 */
const {dbcomment,dbreply} = require('../db/dbcomment'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const comment = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if(req.DunamicId  && req.id && req.CommentContent && req.replyId){
            let dates = new Date();
            //返回数据
            let CommentTime = `${dates.getFullYear()}-${dates.getMonth() + 1}-${dates.getDate()} ${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`
            let CommentId = `${new Date().getTime()}-${Math.random().toString(36).substr(2)}`;
            await dbcomment(CommentId,req.DunamicId,req.id,req.CommentContent,req.replyId,CommentTime);
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '插入成功'
            }
        }else{
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

module.exports = comment



