/**
 * 评论与回复接口
 */
const dbdunamiclistcomment = require('../db/dbdunamiclistcomment'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const timeInfo = require('../config/time')//自定义时间
const dunamiclistcomment = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if(req.CommentId && req.id && req.DunamicId && req.CommentContent && req.replyId){
            let CommentTime = timeInfo;
            await dbdunamiclistcomment(req.CommentId ,req.id ,req.DunamicId ,req.CommentContent ,CommentTime,req.replyId);
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

module.exports = dunamiclistcomment



